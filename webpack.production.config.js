/**
 * Created by hydra320 on 2017/5/8.
 */
const package = require('./package.json')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    vendor: Object.keys(package.dependencies)
  },
  output: {
    path: __dirname + '/build/',
    filename: "./js/[name]-[chunkhash:8].js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, 'app/actions/'),
      components: path.resolve(__dirname, 'app/components/'),
      config: path.resolve(__dirname, 'app/config/'),
      constants: path.resolve(__dirname, 'app/constants/'),
      containers: path.resolve(__dirname, 'app/containers/'),
      fetch: path.resolve(__dirname, 'app/fetch/'),
      reducers: path.resolve(__dirname, 'app/reducers/'),
      router: path.resolve(__dirname, 'app/router/'),
      static: path.resolve(__dirname, 'app/static/'),
      store: path.resolve(__dirname, 'app/store/'),
      util: path.resolve(__dirname, 'app/util/'),
      mock: path.resolve(__dirname, 'mock/')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|gif|jpe?g|bmp)$/i,
        use: ['url-loader?limit=8096&name=img/[name]-[chunkhash:8].[ext]']
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($\?)/i,
        use: ['url-loader?limit=8096&name=fonts/[name]-[chunkhash:8].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("Copyright by hydraz320@github.com"),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),
    // 定义为生产环境 编译React时压缩到最小 在前端console里可以访问到
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('/css/[name]-[chunkhash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name]-[chunkhash:8].js'
    }),
    new webpack.DefinePlugin({
      // 全局的bool量
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}