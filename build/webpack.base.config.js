const webpack = require('webpack');

module.exports = {
  entry: '../src/index.js',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: 'es3ify-loader',
        enforce: 'post'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: '../.',
    hot: true
  }
};
