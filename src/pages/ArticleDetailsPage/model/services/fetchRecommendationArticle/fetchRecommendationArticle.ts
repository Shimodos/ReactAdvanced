import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchRecommendationArticle = createAsyncThunk<
  Article[],
  undefined,
  ThunkConfig<string>
>('articlesDetailsPage/fetchRecommendationArticle', async (props, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Article[]>('/articles/', {
      params: {
        _limit: 4
      }
    });

    if (!response.data) {
      throw new Error('No data');
    }

    return response.data;
  } catch (error) {
    console.log('Error: ', error);
    return rejectWithValue('error');
  }
});
