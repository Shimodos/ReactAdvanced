import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from 'pages/ArticlePage/model/selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/ArticlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';

// interface FetchNextArticlePageProps {
//   page?: number;
// }

export const initArticlesPage = createAsyncThunk<unknown, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlePageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }
      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }
      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }

      dispatch(articlesPageActions.initState());
      dispatch(
        fetchArticleList({
          // page: 1
        })
      );
    }
  }
);
