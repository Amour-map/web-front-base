module.exports = {
  "devServer": {
    "port": 3000,
    "proxy": {
      "/api/": {
        "target": "http://192.168.10.161:8080/",
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