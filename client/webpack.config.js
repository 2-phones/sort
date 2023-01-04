const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const refreshPlugin = ['react-refresh/babel'];
const mode = process.env.NODE_ENV || 'development';
const dotenv = require('dotenv').config();
const webpack_dotenv = require('dotenv-webpack');

module.exports = {
  mode,
  entry: './src/index.tsx',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  stats: 'errors-only',
  devServer: {
    hot: true,
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env', '@babel/preset-react'],
      //     plugins: mode === 'development' ? refreshPlugin : null,
      //   },
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
          plugins: mode === 'development' ? refreshPlugin : null,
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },
  plugins: [
    new webpack_dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new RefreshWebpackPlugin(),
  ],
};
