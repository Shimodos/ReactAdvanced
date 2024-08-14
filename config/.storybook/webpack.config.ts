import path from 'path';
import { DistPath } from './../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import { distCssLoaders } from './../build/loaders/distCssLoaders';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
  const paths: DistPath = {
    entry: '',
    dist: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module) {
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
      if (typeof rule !== 'string' && rule.test && /svg/.test(rule.test as string)) {
        return {
          ...rule,
          exclude: /\.svg$/i
        };
      }
      return rule; // Add this line to return the rule for other cases
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    config.module.rules.push(distCssLoaders(true));
  }

  return config;
};
