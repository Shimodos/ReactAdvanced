import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { DistOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function distConfig({ paths }: DistOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:8].css',
      chunkFilename: 'styles/[name].[contenthash:8].css',
    }),
  ];
}
