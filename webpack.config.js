const path = require('path');
module.exports = {
  entry: {
    index: './src/index.js' // 從哪裡開始打包
  },
  output: {
    filename: 'bundle.js', // 要打包成什麼
    path: path.resolve('./build'), // 要打包在哪裡
  },
  // --------- 把所有的js檔都用Babel編譯過 -----------
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/, //不編譯的檔案
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }, ]
  },
  //------ webpack-dev-server 一改程式碼就能預覽到結果 ------
  devServer: {
    // contentBase: './build', //  contentBase is deprecated in latest Webpack v5
    static: {
      directory: path.join(__dirname, "./build") //打包位置
    },
    port: 8080 // 預覽網頁要跑在哪個port
  }
};