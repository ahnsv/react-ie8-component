/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    App: ['babel-polyfill', path.join(__dirname, '/src/index.js')]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel?presets[]=es2015&presets[]=react'] },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ],
    postLoaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['es3ify-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules", "client"]
  }
};
