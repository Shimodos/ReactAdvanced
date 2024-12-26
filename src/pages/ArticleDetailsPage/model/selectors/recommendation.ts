import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
  state.ArticleDetailsPage?.recommendedArticles.isLoading;
export const getArticleRecommendationError = (state: StateSchema) =>
  state.ArticleDetailsPage?.recommendedArticles.error;
