var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
console.log(path)
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/[name].js"
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
                loader:"babel-loader", //加载器名，就是上一步安装的loader
                exclude:/node_modules/ //排除node_modules目录，我们不加载node模块中的js哦~
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    // 'postcss-loader'
                ]
                
                //依次使用以上loader加载css文件，postcss-loader可以暂时不加，后面再深入修改webpack配置的时候再说用处
                //
                //也可以写成这样 loader："style-loader!css-loader!postcss-loader"
            },
            {
                test:/\.(png|jpe?j|gif|svg)(\?.*)?$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'img/[name].[ext]?[hash]'
                }
                //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
                //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
            },
            {
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
                //和上面一致
            },
            {
                test:/\.scss$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
                //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
                //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
            },
        ]
    },
    //文件解析
    resolve: {
        extensions: ['.js', '.vue', '.json'],//自动解析确定的拓展名,使导入模块时不带拓展名
        alias: {// 创建import或require的别名
        //       'vue': 'vue/dist/vue.js',
        'vue$': 'dist/vue.esm.js',
        '@': path.resolve(__dirname,'dist'),
        }
    },
};