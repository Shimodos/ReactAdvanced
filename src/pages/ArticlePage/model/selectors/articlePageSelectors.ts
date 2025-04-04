import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';

export const getArticlePageIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading || false;

export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;

export const getArticlePageView = (state: StateSchema) =>
  state.articlePage?.view || ArticleView.GRID;

export const getArticlePageNum = (state: StateSchema) => state.articlePage?.page || 1;

export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 4;

export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.haseMore || false;

export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited || false;

export const getArticlePageOrder = (state: StateSchema) => state.articlePage?.order || 'asc';

export const getArticlePageSort = (state: StateSchema) =>
  state.articlePage?.sort ?? ArticleSortField.CREATED_AT;

export const getArticlePageSearch = (state: StateSchema) => state.articlePage?.search || '';

export const getArticlePageType = (state: StateSchema) =>
  state.articlePage?.type || ArticleType.ALL;
