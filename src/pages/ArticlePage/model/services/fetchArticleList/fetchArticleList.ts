import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType
} from '@/pages/ArticlePage/model/selectors/articlePageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticleListProps {
  replace?: boolean;
  page?: number;
}

export const fetchArticleList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticleList', async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  // const { page = 1 } = props;
  const limit = getArticlePageLimit(getState());
  const order = getArticlePageOrder(getState());
  const sort = getArticlePageSort(getState());
  const search = getArticlePageSearch(getState());
  const page = getArticlePageNum(getState());
  const type = getArticlePageType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type: type.toString(),
      page: props.page?.toString(),
      limit: limit.toString()
    });
    const response = await extra.api.get<Article[]>('/articles/', {
      params: {
        _expand: 'user',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleType.ALL ? undefined : type
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
