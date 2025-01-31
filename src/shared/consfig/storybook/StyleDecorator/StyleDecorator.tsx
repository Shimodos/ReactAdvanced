import React from 'react';
import 'app/styles/index.scss';
import { Decorator, StoryFn } from '@storybook/react';

export const StyleDecorator: Decorator = (Story: StoryFn) => {
  return (
    <div>
      <Story />
    </div>
  );
};
