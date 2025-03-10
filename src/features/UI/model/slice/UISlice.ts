import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '@/features/UI';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UISchema = {
  scroll: {}
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    }
  }
});

export const { actions: UIActions, reducer: UIReducer } = UISlice;
