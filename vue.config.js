module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.example.app",
        nodeIntegration: true,
        win: {
          target: "portable",
          icon: "src/assets/icon.png"
        },
        mac: {
          target: "dmg",
          icon: "src/assets/icon.png"
        }
      }
    }
  },
  devServer: {
    port: 3000,
    disableHostCheck: true
  }
}

