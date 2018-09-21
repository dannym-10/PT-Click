import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfigFile from '../../../config/webpack/webpack.config.client.babel'

const compiler = webpack(webpackConfigFile)
const webpackDev = webpackDevMiddleware(compiler, {
  noInfo: true,
  path: '/build',
  stats: {
    colors: true
  },
  historyApiFallback: true
})
const webpackHot = webpackHotMiddleware(compiler)

export { webpackDev, webpackHot }
