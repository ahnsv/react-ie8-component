const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production'
})

export default prodWebpackConfig