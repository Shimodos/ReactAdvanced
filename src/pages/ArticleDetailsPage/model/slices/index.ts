import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentSlice';
import { articleDetailsRecommendationReducer } from './ArticleDetailsRecommendationSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendedArticles: articleDetailsRecommendationReducer
});
