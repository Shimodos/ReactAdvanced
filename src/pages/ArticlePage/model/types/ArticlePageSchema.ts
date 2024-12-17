import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article/models/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view?: ArticleView;
  page: number;
  limit?: number;
  haseMore: boolean;

  // filter
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;
  _inited: boolean;
}
