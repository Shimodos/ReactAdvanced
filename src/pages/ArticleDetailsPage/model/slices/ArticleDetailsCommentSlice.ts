import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsCommentSchema } from '../../model/types/ArticleDetailsCommentSchema';
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
const commentsAdapter = createEntityAdapter<Comment, string>({
  selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.ArticleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
