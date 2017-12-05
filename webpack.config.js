
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry:'./src/app.js',//打包入口，即从哪个文件开始。
    output:{  
        path:path.resolve(__dirname, './dist'),//指明打包后文件所存储的位置
        filename:'js/[name].bundle.js',//打包文件的名称.chunk可以看做是md5值，保证每一个文件的唯一性
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:'babel-loader',
                query:{
                    "presets":["latest"]
                },
                exclude:path.resolve(__dirname + './node_modules/'),//制定排除范围，节省打包时间
                include:path.resolve(__dirname + './src/')
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body'
        })
    ]
}