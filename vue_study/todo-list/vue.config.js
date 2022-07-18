// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,//关闭语法检查
  //开启代理服务器
  // devServer:{
  //   proxy : 'http://localhost:5000'//配置服务器的地址
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',//配置服务器的地址
        ws: true,//用于支持websocket
        changeOrigin: true,//用于控制请求头中的Host值
        //重写地址
        pathRewrite :{
          '^/api':''
        }
      }
    }
  }
}