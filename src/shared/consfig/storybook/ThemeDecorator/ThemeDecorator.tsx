import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvauder } from 'app/providers/ThemeProvider';
import React from 'react';

export const ThemeDecorator = (theme: Theme): ((StoryComponent: StoryFn) => JSX.Element) => {
  const ThemedComponent = (StoryComponent: StoryFn): JSX.Element => {
    return (
      <ThemeProvauder initiTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvauder>
    );
  };

  ThemedComponent.displayName = `ThemeDecorator(${theme})`;

  return ThemedComponent;
};
