import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeaturesFlags } from '@/shared/features';
// import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UserSchema = {
  _inited: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      if (action.payload.features) {
        setFeaturesFlags(action.payload.features);
      }
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        const json = JSON.parse(user) as User;
        state.authData = json;

        if (json.features) {
          setFeaturesFlags(json.features);
        }
      }
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
});

// Action creators are generated for each case reducer function
// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

export const { actions: userActions, reducer: userReducer } = userSlice;
