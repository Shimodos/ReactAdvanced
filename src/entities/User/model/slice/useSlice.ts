import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UserSchema = {
  authData: {
    id: 0,
    username: ''
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

export const { actions: userActions, reducer: userReducer } = userSlice;
