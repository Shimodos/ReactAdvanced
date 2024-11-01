import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article/models/selectors/articleDetails';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      });
      if (!response.data) {
        throw new Error('No data');
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      console.log('Error: ', error);
      return rejectWithValue('error');
    }
  }
);

export default addCommentForArticle;
// function dispatch(arg0: any) {
//   throw new Error('Function not implemented.');
// }
