import { ResolveOptions } from 'webpack';

export function distResolve(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
}
