import { DistOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function distDevServer(options: DistOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
