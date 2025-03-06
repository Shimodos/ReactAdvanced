import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recomendationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRecommendationList: builder.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        },
        method: 'GET'
      })
    })
  })
});

export const useArticleRecommendationList = recomendationApi.useGetArticleRecommendationListQuery;
