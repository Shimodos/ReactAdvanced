import 'app/styles/index.scss';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>
): ((StoryComponent: StoryFn) => JSX.Element) => {
  const WithStoreComponent = (StoryComponent: StoryFn): JSX.Element => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };

  WithStoreComponent.displayName = 'WithStoreComponent';

  return WithStoreComponent;
};
