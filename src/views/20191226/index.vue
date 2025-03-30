<template>
    <div>
        <div class="box"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url: 'https://www.asdf.cn:8080/asd/sdf/?a=aa&as=12#a=aa&b=bb&c',
            params: {}
        }
    },
    mounted() {
        this.queryUrlParams(this.url)
    },
    methods: {
        queryUrlParams(url) {
            if (url) {
                let urlArr = url.split('?')
                let paramHash= urlArr.length > 1?urlArr[1].split('#'):url.split('#');
                if (urlArr.length > 1) {
                    // let paramHash = urlArr[1].split('#')
                    console.log(paramHash, 'paramArrHash')
                    if (paramHash.length > 1) {
                        this.params.Hash = paramHash[1]
                    }
                    let paramArr = paramHash[0].split('&')
                    console.log(paramArr, 'paramArr')
                    paramArr.forEach(item => {
                        let arr = item.split('=')
                        this.params[arr[0]] = arr[1]
                    })
                } else if (urlArr.length == 1) {
                    // let paramHash = url.split('#')
                    console.log(paramHash, 'paramArrHash')
                    if (paramHash.length > 1) {
                        this.params.Hash = paramHash[1]
                    }
                    let urlLink = paramHash[0].split(':')
                    this.params.SecureLink = urlLink[0];
                    this.params.Channel = null
                    this.params.link = urlLink[urlLink.length - 1].replace(/\/+/g, '');
                }
                let urlLink =urlArr.length>1? urlArr[0].split(':'):paramHash[0].split(':')
                if (urlLink.length - 1 > 1) {  //判断冒号出现了多少次  
                    this.params.Channel = urlLink[urlLink.length - 1].replace(/\/+/g, '')

                    this.params.link = urlLink[urlLink.length - 2].replace(/\/+/g, '');
                } else if (urlLink.length - 1 == 1) {
                    console.log(urlLink, 'urlLink')

                }

            }
            console.log(this.params, 'this.params')
            return this.params
        }
    }
}
</script>
<style scoped></style>