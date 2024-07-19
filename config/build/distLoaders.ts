import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { DistOptions } from './types/config';

export function distLoaders(options: DistOptions): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoaders];
}
