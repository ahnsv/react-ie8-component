const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development'
})

export default devWebpackConfig