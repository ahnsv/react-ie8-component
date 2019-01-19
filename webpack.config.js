<<<<<<< HEAD
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
=======
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist/`,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      ],
    },
    {
      test: /\.js?$/,
      loader: 'es3ify-loader',
      enforce: 'post',
    },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: '.',
    hot: true,
  },
};
>>>>>>> origin/master
