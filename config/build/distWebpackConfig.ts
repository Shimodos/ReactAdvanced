import { distLoaders } from './distLoaders';
import { distConfig } from './distPlugins';
import { distResolve } from './distResolve';
import { DistOptions } from './types/config';
import webpack from 'webpack';
import { distDevServer } from './distDevServer';

export function distWebpackConfig(options: DistOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
      clean: true
    },
    plugins: distConfig(options),
    module: {
      rules: distLoaders(options)
    },
    resolve: distResolve(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? distDevServer(options) : undefined
  };
}
