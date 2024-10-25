import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AddCommentFormSchema = {
  text: '',
  error: ''
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  }

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLogged = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLogged = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action.payload;
  //       state.isLogged = false;
  //     });
  // }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

export const { actions: addCommentFormActions, reducer: addCommentFormReducer } =
  addCommentFormSlice;
