const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

let port = 2222
module.exports = {
  publicPath: '/', // 相对路径 ('./')
  outputDir: 'dist', //输出文件目录
  assetsDir: 'static', //放置生成的静态资源 (js、css、img、fonts) 的目录。
  // //文件名哈希 不写默认true
  // filenameHashing: true,
  // //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: true,

  configureWebpack: (config) => {
    Object.assign(config, {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src'),
          assets: resolve('assets'),
          api: resolve('src/api')
        }
      }
    })
  },
  devServer: {
    port: port, // 端口号
    // https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    hotOnly: true, // 热更新
    // proxy: 'https://m.kongfz.com' // 配置跨域处理,只有一个代理
    //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://agent.paatedu.cn', // 生产环境接口域名
        // target: 'http://127.0.0.1:6601', // 生产环境接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '测试table'
      return args
    })
    config.resolve.alias.set('@', resolve('src'))
  }
}
