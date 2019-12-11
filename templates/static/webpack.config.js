const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
  devtool: 'eval-source-map',
  entry: __dirname + '/js/index.jsx',
  output:{
    path: resolve('../public'),
    filename: 'bundle.js',
    publicPath: resolve('../public')
  },
  resolve: {
    extensions: ['.js','.jsx','.css, .scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','es2015']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;