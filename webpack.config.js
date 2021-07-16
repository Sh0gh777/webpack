const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
      index: './index.js',
      index1:  './index1.js'},
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};