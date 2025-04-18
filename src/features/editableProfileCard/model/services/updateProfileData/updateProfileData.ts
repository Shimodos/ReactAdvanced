import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { validateProfileDataError } from '../../consts/const';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined,
  ThunkConfig<validateProfileDataError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const forData: Profile = getProfileForm(getState());

  const errors = validateProfileData(forData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(`/profile/${forData.id}`, forData);

    if (!response.data) {
      throw new Error('No data');
    }

    return response.data;
  } catch (error) {
    console.log('Error: ', error);
    return rejectWithValue([validateProfileDataError.SERVER_ERROR]);
  }
});
