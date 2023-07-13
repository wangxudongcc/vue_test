const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin =require('terser-webpack-plugin');

const obj = {
    mode: "production",
    entry: {index:'./1.js'},
    output: {
        path: path.resolve(__dirname, '/build'),
        filename: 'build.js'
    },
    module: {
        rules: [
            //要处理什么文件;
            {
                test: /\.css$/,
                use: [{
                    loader:miniCssPlugin.loader
                },'css-loader'],
                exclude:[
                    path.resolve(__dirname,"node_modules")],
            },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'file-loader',
                option:{
                    outputPath:'images/'
                }
            }]    
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./index.html',
        filename:'index.html',
        title:'哈哈',
        minify:{
            removeComments:true,
            collapseWhitespace:true,
            collapseBooleanAttrbutes:true,
            removeAttributeQuotes:true
        }
    }),
    new miniCssPlugin({
        filename:'./css/[name].css'
    }),
],
optimization:{
    minimizer:[
        new TerserPlugin({
            cache:true,
            parallel:true,
            sourceMap:true,
            terserOptions:{

            }
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
}}

//=>导出配置项;
module.exports = obj;