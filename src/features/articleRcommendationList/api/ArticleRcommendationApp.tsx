import { rtkApi } from 'shared/api/rtkApi';

const recomendationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRecommendationList: builder.query({
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
