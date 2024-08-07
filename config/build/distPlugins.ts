import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { DistOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function distConfig({ paths, isDev }: DistOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:8].css',
      chunkFilename: 'styles/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),

    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'report.html'
    })
  ];
}
