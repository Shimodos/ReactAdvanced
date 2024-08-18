import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

export const ThemeDecorator = (theme: Theme): ((StoryComponent: StoryFn) => JSX.Element) => {
  const ThemedComponent = (StoryComponent: StoryFn): JSX.Element => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };

  ThemedComponent.displayName = `ThemeDecorator(${theme})`;

  return ThemedComponent;
};
