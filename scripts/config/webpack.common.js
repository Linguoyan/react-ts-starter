const path = require('path');
const { isDevelopment, isProduction } = require('../node_env');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/app.js'),
  },
  output: {
    filename: `js/[name]${isDevelopment ? '' : '.[hash:8]'}.js`,
    path: path.resolve(__dirname, '../../dist'),
  },
};
