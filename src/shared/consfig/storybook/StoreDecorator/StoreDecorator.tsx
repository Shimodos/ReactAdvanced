import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { StoryFn } from '@storybook/react';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { ReducersList } from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { articleDetailsReducer } from 'entities/Article/models/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  AddCommentForm: addCommentFormReducer,
  ArticleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers: ReducersList
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
