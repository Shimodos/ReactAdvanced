import React from 'react';
import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn): React.ReactNode => {
  return (
    <div>
      <Story />
    </div>
  );
};
