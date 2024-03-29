const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '/src/')
}

module.exports = {
  mode: 'development',

  entry: [
    path.join(PATHS.src, 'app.js')
  ],

  output: {
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
    new HtmlWebpackPlugin({ template: path.join(PATHS.src, 'index.html') })
  ]
}
