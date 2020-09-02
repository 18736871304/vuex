// module.exports = {
//   // 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath
//   // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' 
//   publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
//   // 输出文件目录：在npm run build时，生成文件的目录名称 
//   outputDir: 'dist',
//   // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 
//   assetsDir: "assets",
//   // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 
//   productionSourceMap: false,
//   // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
//   filenameHashing: false,
//   // 代码保存时进行eslint检测
//   lintOnSave: false,
//   // webpack-dev-server 相关配置
//   devServer: {
//       // 自动打开浏览器
//       open: true,
//       host: 'localhost',
//       // 端口
//       port: 9930,
//       // https
//       https: false,
//       // 热更新
//       hotOnly: false,
//       // 使用代理
//       // proxy: {
//       //     '/api': {
//       //         // 目标代理服务器地址
//       //         target: 'http://47.100.47.3/',
//       //         // 开启代理，本地创建一个虚拟服务器 允许跨域
//       //         changeOrigin: true, 
//       //     },
//       // },
//   },
// }






















// Vue.config.js 配置选项
module.exports = {
  // 选项
  //基本路径
  publicPath: "./",
  //构建时的输出目录
  outputDir: "dist",
  //放置静态资源的目录
  assetsDir: "static",
  //html 的输出路径
  indexPath: "index.html",

  devServer: {
    // 自动打开浏览器
    open: true,
    host: 'localhost',
    // 端口
    port: 8089,
    // https
    https: false,
    // 热更新
    hotOnly: false,
    // 使用代理
    // proxy: {
    //     '/api': {
    //         // 目标代理服务器地址
    //         target: 'http://47.100.47.3/',
    //         // 开启代理，本地创建一个虚拟服务器 允许跨域
    //         changeOrigin: true, 
    //     },
    // },
  },
}