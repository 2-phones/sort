const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const refreshPlugin = ['react-refresh/babel'];
const mode = process.env.NODE_ENV || 'development';
const dotenv = require('dotenv').config({
  path: process.env.NODE_ENV == 'production' ? './.env.production' : './.env.development',
});

module.exports = {
  mode,
  entry: './src/index.tsx',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html', favicon: './public/logo.ico' }),
    new RefreshWebpackPlugin(),
  ],
};
