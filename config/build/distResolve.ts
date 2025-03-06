import { ResolveOptions } from 'webpack';
import { DistOptions } from './types/config';

export function distResolve(options: DistOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': options.paths.src
    }
  };
}
