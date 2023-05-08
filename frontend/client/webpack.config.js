const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dotenv = require('dotenv').config({
  path: process.env.NODE_ENV == 'production' ? './.env.production' : './.env.development',
});
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const analyzer = process.env.BUNDLE_ANALYZER === 'true' ? new BundleAnalyzerPlugin() : null;

module.exports = {
  mode,
  entry: './src/index.tsx',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    // clean: true,
  },
  // profile: true,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'), 
    },
  },
  stats: 'errors-only',
  devServer: {
    hot: true,
    compress: true,
    static: { directory: path.resolve(__dirname, 'dist') },
    port: 3002,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // test: /\.(ts|tsx)$/,
        // exclude: /node_modules/,
        // loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
        //   plugins: mode === 'development' ? refreshPlugin : null,
        // },

        test: /\.(ts|tsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
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
    analyzer,
  ].filter(Boolean),
};
