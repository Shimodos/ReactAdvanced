import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
// import { loginReducer } from 'features/AuthByUsername';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
    // loginForm: loginReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });

  // @ts-expect-error - store is extended
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
