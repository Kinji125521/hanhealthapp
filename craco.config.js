// 添加自定義對於 webpack 的配置
const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置別名
    alias: {
      // 約定：使用 @ 表示 src 文件所在路徑
      '@': path.resolve(__dirname, 'src')
    }
  }
}