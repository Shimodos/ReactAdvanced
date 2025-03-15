import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/RatingCard';

const ArticleRatingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRating: builder.query<Rating[], { userId: string; articleId: string }>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        userId,
        articleId
      })
    })
  })
});

export const useArticleRating = ArticleRatingApi.useGetArticleRatingQuery;
