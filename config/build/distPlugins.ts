import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { DistOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function distConfig({
  paths,
  isDev,
  apiUrl,
  project
}: DistOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev;
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify('project')
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      }
    })
    // new CircularDependencyPlugin({
    //   exclude: /node_modules/,
    //   failOnError: true
    // })
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'report.html'
      })
    );
  }
  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[contenthash].css'
      })
    );
    plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: paths.locales,
            to: paths.buildLocale
          }
        ]
      })
    );
  }

  return plugins;
}
