// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { DistOptions } from './types/config';
import { distCssLoaders } from './loaders/distCssLoaders';

export function distLoaders({ isDev }: DistOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cachestDirectory: true,
        presets: ['@babel/preset-env']
        // plugins: [
        //   [
        //     'i18next-extract',
        //     {
        //       locales: ['en', 'ua'],
        //       keyAsDefaultValue: true,
        //     },
        //   ],
        // ],
      }
    }
  };

  const cssLoaders = distCssLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoaders];
}
