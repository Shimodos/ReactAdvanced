import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginShema';
import loginByUsername from '../services/loginByUsername/loginByUsername';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLogged: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = undefined;
        state.isLogged = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLogged = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLogged = false;
      });
  }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
