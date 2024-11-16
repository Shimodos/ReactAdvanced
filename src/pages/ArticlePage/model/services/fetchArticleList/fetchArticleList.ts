import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from 'pages/ArticlePage/model/selectors/articlePageSelectors';

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticleList', async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const { page = 1 } = props;
  const limit = getArticlePageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles/', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit
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
