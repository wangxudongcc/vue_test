const path =require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')


let obj = {
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    devServer:{
        hot:true,
        port:8080,
        open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader',
                'css-loader'],

        }]
    },{
        test:/^$/
    }

    // output:{
    //     filename:'[name].js',
    //     path:path.resolve(__dirname,'./build')
    // }
}

module.export = obj;