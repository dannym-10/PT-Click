const client = {
  test: /\.(png|jpg|jpeg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
  loaders: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192,
        publicPath: '/assets/',
        name: 'images/[name].[ext]?[hash]'
      }
    },
    {
      loader: 'img-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 85
        }
      }
    }
  ]
}

const server = client
export default {
  server,
  client
}
