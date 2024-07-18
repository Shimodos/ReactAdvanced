import path from 'path';
import webpack from 'webpack';
import { distWebpackConfig } from './config/dist/distWebpackConfig';
import { DistPath } from './config/dist/types/config';

const paths: DistPath = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  dist: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';
const PORT = 3000;

const config: webpack.Configuration = distWebpackConfig({
  mode: 'development',
  paths,
  isDev,
  port: PORT,
});

export default config;
