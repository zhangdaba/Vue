const path=require('path');
// 导入在内存中生成 HTML 页面的 插件
// 只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports={
    //入口
    entry:path.join(__dirname,'./src/main.js'),
    //出口
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bud.js'
    },
    plugins: [ // 配置插件的节点
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
          template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
          filename: 'index.html' // 指定生成的页面的名称
        }),
        new VueLoaderPlugin()
      ],
      module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则  \ 是转义符，因为。是元字符   use  是使用
          { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
          { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
          { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
        //   limit代表图片的大小（大于等于不会被转成bese64格式字符串，小于会转成base64字符串），hash是为了防止图片命名一样产生错误
          { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7000&name=[hash:8]-[name].[ext]'},
          { test:/\.(eot|ttf|svg|woff|woff2)$/,use:'url-loader'},
          { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
          { test: /\.vue$/,use: 'vue-loader'} // 处理 .vue 文件的 loader
        ]
      },
      // resolve:{
      //   alias:{
      //     // 'vue$':'vue/dist/vue.js'
      //   }  
      // }  
};