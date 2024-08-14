import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/consfig/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/consfig/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouteDecorator } from '../../src/shared/consfig/storybook/RouteDecorator/RouteDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator]
};

export default preview;
