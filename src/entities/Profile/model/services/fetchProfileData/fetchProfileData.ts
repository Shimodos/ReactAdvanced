import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../type/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchByIdStatus',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (error) {
      console.log('Error: ', error);
      return rejectWithValue('error');
    }
  }
);

// export default fetchProfileData;
