import { Decorator, StoryFn } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator: Decorator = (Story: StoryFn) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
