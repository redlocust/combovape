let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './client/index.js'
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    alias: {
      Main: path.resolve(__dirname, './client/components/Main.js'),
    }
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'})
      },
      {test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000'},
      {test: /\.(ttf|eot)$/, loader: 'file-loader'},
      {test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery'},
    ]
  },

  plugins: [
    new ExtractTextPlugin("/public/style.css"),
  ],

  devtool: 'source-map'
};