import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

interface DynamicModuleLoderProps {
  reducers: ReducersList;
  remmoveAfterUnmount?: boolean;
}

export const DynamicModuleLoder: FC<DynamicModuleLoderProps> = (props) => {
  const { children, reducers, remmoveAfterUnmount = true } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const isMounted = mountedReducers[name as StateSchemaKeys];
      // добавляем редьюсер если его нет в списке
      if (!isMounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });
    return () => {
      if (remmoveAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispatch({ type: `@DESTROU ${name} reducer` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
