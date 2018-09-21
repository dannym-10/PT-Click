import webpack from 'webpack'
import path from 'path'
import javascript from './loaders/javascript'
import json from './loaders/json'
import sass from './loaders/sass'
import svg from './loaders/svg'
import image from './loaders/image'

const root = process.cwd()// current working directory

export default {
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.resolve(root, 'src/index')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(root, 'build')
  },
  module: {
    loaders: [
      javascript,
      json,
      sass,
      svg,
      image.client
    ]
  },
  resolve: {
    extensions: [
      `.js`,
      `.json`,
      `.scss`
    ],
    modules: [
      `${root}/src`,
      `node_modules`
    ],
    alias: {
      'utils': `${root}/src/styles/utils`,
      '@components': `${root}/src/components`,
      '@pages': `${root}/src/pages`,
      '@icons': `${root}/src/assets/icons`,
      '@images': `${root}/src/assets/images`,
      '@stores': `${root}/src/stores`,
      '@helpers': `${root}/src/helpers`
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
