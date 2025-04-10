import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';

export interface ArticleDetailsRecommendationSchema extends EntityState<Article, string> {
  isLoading: boolean;
  error?: string;
  // data?: Comment[];
}
