import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

// interface FetchNextArticlePageProps {
//   page?: number;
// }

export const initArticlesPage = createAsyncThunk<unknown, undefined, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlePageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(
        fetchArticleList({
          // page: 1
        })
      );
    }
  }
);
