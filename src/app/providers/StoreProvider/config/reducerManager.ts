import {
  AnyAction,
  combineReducers,
  Reducer,
  ReducersMapObject,
  UnknownAction
} from '@reduxjs/toolkit';
import { MountedReducers, ReducerManager, StateSchema, StateSchemaKeys } from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };

  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);

  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: StateSchemaKeys[] = [];
  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,

    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state: StateSchema | undefined, action: UnknownAction) => {
      // Если state не определен, используйте undefined для инициализации
      if (state === undefined) {
        return combinedReducer(undefined, action);
      }

      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        const nextState = { ...state };
        keysToRemove.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete nextState[key];
        });
        keysToRemove = [];
        state = nextState;
      }

      // Delegate to the combined reducer
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return combinedReducer(state as any, action);
    },

    // Adds a new reducer with the specified key
    add: (key: StateSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      // Add the reducer to the reducer mapping
      reducers[key] = reducer;
      mountedReducers[key] = true;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    remove: (key: StateSchemaKeys) => {
      if (!key || !reducers[key]) {
        return;
      }

      // Remove it from the reducer mapping
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];

      // Add the key to the list of keys to clean up
      keysToRemove.push(key);
      mountedReducers[key] = false;

      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    }
  };
}
