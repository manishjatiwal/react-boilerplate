const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const environment = process.env.ENVIRONMENT || 'development'
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 7001

module.exports = {
  mode: environment,
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  experiments: {
    asset: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      // images: path.join(__dirname, './src/assets/images'),
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    host,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: `http://${host}:${port}/`,
    hot: true,
    port,
    open: true,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true,
    clientLogLevel: 'silent'
  }
}
