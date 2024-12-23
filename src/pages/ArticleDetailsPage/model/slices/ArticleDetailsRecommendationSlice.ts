import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema';
import { Article } from 'entities/Article';
import { fetchRecommendationArticle } from '../services/fetchRecommendationArticle/fetchRecommendationArticle';

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticleRecommendation = recommendationAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsRecommendation || recommendationAdapter.getInitialState()
);

const articleDetailsRecommendationSlice = createSlice({
  name: 'articleDetailsRecommendationSlice',
  initialState: recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendationArticle.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecommendationArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationAdapter.setAll(state, action.payload);
      })
      .addCase(fetchRecommendationArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;
