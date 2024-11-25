import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view?: ArticleView;
  page: number;
  limit?: number;
  haseMore: boolean;

  _inited: boolean;
}
