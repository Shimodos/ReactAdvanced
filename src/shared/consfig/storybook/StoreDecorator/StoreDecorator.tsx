import 'app/styles/index.scss';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';

export const StoreDecorator = (
  state: DeepPartial<StateSchema>
): ((StoryComponent: StoryFn) => JSX.Element) => {
  const WithStoreComponent = (StoryComponent: StoryFn): JSX.Element => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };

  WithStoreComponent.displayName = 'WithStoreComponent';

  return WithStoreComponent;
};
