let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'app/index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|gif|jpe?g|bmp)$/i,
        use: ['url-loader?limit=8096']
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($\?)/i,
        loader: ['url-loader?limit=8096']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserWebpackPlugin({
      url: 'http://localhost:8080'
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    hot: true
  }
}