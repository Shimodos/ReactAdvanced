import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentSlice';
import { articleDetailsRecommendationReducer } from './ArticleDetailsRecommendationSlice';

export const articleDetailsPageReducer = combineReducers({
  comments: articleDetailsCommentsReducer,
  recommendedArticles: articleDetailsRecommendationReducer
});
