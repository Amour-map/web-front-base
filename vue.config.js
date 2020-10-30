// 引入自定义配置
const config = require("./custom.config");

module.exports = {
  "devServer": {
    "port": 3000,
    "proxy": {
      "/api/": {
        "target": config.serverHostName,
        "changeOrigin": true,
        "ws": true,
        "pathRewrite": {
          "^/api/": ""
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
