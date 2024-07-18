import path from 'path';
import webpack from 'webpack';
import { distWebpackConfig } from './config/build/distWebpackConfig';
import { DistEnv, DistPath } from './config/build/types/config';

export default (env: DistEnv) => {
  const paths: DistPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = distWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};