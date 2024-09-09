import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error('No data');
      }

      const userData: User = response.data.user;

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(userData));

      return response.data;
    } catch (error) {
      console.log('Error: ', error);
      return thunkAPI.rejectWithValue('Error');
    }
  }
);

export default loginByUsername;
