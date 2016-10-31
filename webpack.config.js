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
    extensions: ['', '.webpack.js', '.web.js', '.js'],
    alias: {
      'vue': 'vue/dist/vue',
      'vue-resource': 'vue-resource/dist/vue-resource'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      }

    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      Vue: 'vue',
      VueResource: 'vue-resource',
      VueRouter: 'vue-router',
      Vuex: 'vuex'
    })
  ],
  devtool: 'source-map'
};