const http = require("http"),
    fs = require("fs"),
    urlModel = require("url"),
    qs = require("querystring");

const app = http.createServer((req, res) => {
    let originAry = ["http://localhost:81"];
   
    if (originAry.includes(req.headers.origin)) {
        console.log(req,req.headers,req.headers.origin);
        res.writeHead(200, {
            "Content-Type": "text/html",
            "Access-Control-Allow-Origin": req.headers.origin
        });
    }

    const {
        pathname,
        query
    } = urlModel.parse(req.url);
    let lastName = [".js$", ".html$", ".css$", ".txt$", ".jpg$"];
        // console.log(lastName);
    let re = new RegExp(lastName.join("|"));
        console.log(re);
    if (pathname === "/") {
        let data = fs.readFileSync("www/index.html");
        res.end(data.toString());
    } else if (re.test(pathname)) {
        try {
            let data = fs.readFileSync("www" + pathname);
            res.end(data.toString());
        } catch {
            let data = fs.readFileSync("www/404.html");
            res.end(data.toString());
        }
    } else {
        switch (pathname) {
            case "/add":
                const {
                    mkdirname
                } = qs.parse(query);
                fs.mkdir("www/" + mkdirname + "/", err => {
                    if (err) {
                        if (err.code === "EEXIST") {
                            fs.readdir("www", (error, filesAry) => {
                                let num = 0;
                                let b = filesAry.includes(mkdirname);
                                let name = "";
                                while (b) {
                                    name = mkdirname.replace(/\(\d+\)/, "");
                                    b = filesAry.includes(name + "(" + ++num + ")");
                                }
                                fs.mkdir('www/' + name + '/', err => {
                                    console.log("第二次创建成功!");
                                    res.end(JSON.stringify({
                                        code: 1,
                                        msg: '创建成功'
                                    }));
                                });
                            });
                        }
                        console.log('创建失败');
                        console.log(err);
                        return;
                    }
                    res.end(JSON.stringify({
                        code: 1,
                        msg: '文件夹创建成功了!'
                    }))
                });
                break;

            case "/rename":
                if (/^post$/i.test(req.method)) {
                    let temp = '';
                    req.on("data", d => {
                        temp += d;
                    });
                    req.on("end", () => {
                        let o = qs.parse(temp.toString());
                        fs.rename("www/" + o.oldname, "www/" + o.newname, () => {
                            res.end(JSON.stringify({
                                code: 1,
                                msg: "rename success!"
                            }));
                        })
                    })
                }
                break;
            case "/jsonp":
                let o = qs.parse(query.toString());

                if (o.wd == 1) {
                    let json = JSON.stringify({
                        code: 1,
                        ary: [1, 2, 3, 4, 5]
                    });
                    res.end(o.callback + "(" + json + ")");
                } else {
                    let json2 = JSON.stringify({
                        code: 1,
                        ary: [5, 4, 3, 2, 1]
                    });
                    res.end(o.callback + "(" + json2 + ")");
                }
                break;
            default:
                break;
        }
    }

});
let port = 81;
app.listen(port);
app.on("error", e => {
    if (e.code === "EADDRINUSE") {
        port++;
        app.listen(port);
    }
})





