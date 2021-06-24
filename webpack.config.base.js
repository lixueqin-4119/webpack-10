const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'XDML-写代码啦',
        template: 'src/assets/test.html'
      })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',//把文件变成文件路径
          },
        ],
      },
      {
        test: /\.styl$/i,
        loader: [
          "style-loader",//把js字符串变成style标签放入head
          "css-loader",//把css变成js字符串
          "stylus-loader",//把stylus语法转为css语法
        ],
      },
      {
        test: /\.less$/i,
        loader: [
          "style-loader",//把js字符串变成style标签放入head
          "css-loader",//把css变成js字符串
          "less-loader",//把less语法转为css语法
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          },
        ],
      },
    ],
  },

};

