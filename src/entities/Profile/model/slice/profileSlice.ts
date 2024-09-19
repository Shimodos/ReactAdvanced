import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../type/profile';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
