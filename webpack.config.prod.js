const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  dist: path.join(__dirname, '/dist/'),
  src: path.join(__dirname, '/src/')
}

module.exports = {
  mode: 'production',

  entry: [
    path.join(PATHS.src, 'app.js')
  ],

  output: {
    path: PATHS.dist,
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  },

  resolve: {
    extensions: ['.coffee', '.js']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({ template: path.join(PATHS.src, 'index.html') })
  ]
}
