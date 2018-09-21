import webpack from 'webpack'
import path from 'path'
import javascript from './loaders/javascript'
import json from './loaders/json'
import image from './loaders/image'

const root = process.cwd()// current working directory

export default {
  entry: {
    index: path.resolve(root, 'src/server/index')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(root, 'build/server')
  },
  module: {
    loaders: [
      javascript,
      json,
      image.server
    ]
  },
  target: 'node',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    console: true,
    util: 'empty'
  }
}