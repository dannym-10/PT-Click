export default {
    test: /\.(css|scss)(\?.+)?$/,
    loaders: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                minimize: true,
                localIdentName: 'fyp-[name]_[local]'
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                parser: 'postcss-scss'
            }
        },
        {
            loader: 'sass-loader'
        }
    ]
}