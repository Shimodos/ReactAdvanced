import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPageSchema } from '../types/userPageSchema';

const initialState: UserPageSchema = {
  id: '',
  name: '',
  email: '',
  age: undefined,
  isLoading: false,
  error: undefined,
  readonly: false,
  formData: {
    id: '',
    name: '',
    email: '',
    age: undefined
  }
};

export const userPageSlice = createSlice({
  name: 'userPage',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {}
  }
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: userPageActions } = userPageSlice;
export const { reducer: userPageReducer } = userPageSlice;
