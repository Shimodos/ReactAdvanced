import React, { ReactNode } from 'react';
import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (story: () => StoryFn): ReactNode => {
  return <BrowserRouter>{story()}</BrowserRouter>;
};
