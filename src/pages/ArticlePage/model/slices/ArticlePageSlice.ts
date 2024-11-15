import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ARTICLE_VIEV_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticle = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.GRID
  }),

  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEV_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view =
        (localStorage.getItem(ARTICLE_VIEV_LOCALSTORAGE_KEY) as ArticleView) || ArticleView.GRID;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articlePageReducer, actions: articlesPageActions } = articlePageSlice;
