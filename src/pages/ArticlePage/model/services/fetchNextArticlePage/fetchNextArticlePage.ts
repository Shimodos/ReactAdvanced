import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum
} from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

// interface FetchNextArticlePageProps {
//   page?: number;
// }

export const fetchNextArticlePage = createAsyncThunk<unknown, undefined, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlePage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePageNum(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticleList({}));
    }
  }
);
