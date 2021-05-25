const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require('../paths');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  output: {
    filename: 'js/[name].js',
    path: paths.appDist,
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
  devServer: {
    host: '127.0.0.1', // 指定 host，不设置的话默认是 localhost
    port: '8080', // 指定端口，默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: {
      // 接口代理1
      '/api/': {
        target: 'http://198.168.111.111:3001',
        changeOrigin: true,
      },
      // 接口代理2
      '/api-2/': {
        target: 'http://198.168.111.111:3002',
        changeOrigin: true,
        pathRewrite: {
          '^/api-2': '',
        },
      },
    },
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: paths.appFavicon,
      template: paths.appHtml,
      filename: 'index.html',
      inject: true,
    }),
  ],
});
