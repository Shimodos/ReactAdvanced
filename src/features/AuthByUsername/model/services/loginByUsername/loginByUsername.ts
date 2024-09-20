import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post('/login', authData);
      if (!response.data) {
        throw new Error('No data');
      }

      const userData: User = response.data.user;

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(userData));
      extra.navigate?.('/');

      return response.data;
    } catch (error) {
      console.log('Error: ', error);
      return rejectWithValue('error');
    }
  }
);

export default loginByUsername;
