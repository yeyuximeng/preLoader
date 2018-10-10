
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "preLoader.js"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules)/,
        include: /(src)/,
        loader: 'babel-loader'

      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "assets/images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html'
      })
  ],
  devServer: {
    contentBase: __dirname,
    open: true,
    port: 80,
    overlay: {
      errors: true
    }
  }
}


module.exports = config
