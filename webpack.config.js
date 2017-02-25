var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            postcss: 'vue-style-loader!css-loader!postcss-loader!sass-loader',
          },
        },
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devtool: 'source-map'
};