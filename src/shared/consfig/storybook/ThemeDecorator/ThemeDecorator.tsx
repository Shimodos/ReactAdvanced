import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
