import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/RatingCard';

interface GetRateArticleProps {
  userId: string;
  articleId: string;
}

interface RateArticleProps {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const ArticleRatingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRating: builder.query<Rating[], GetRateArticleProps>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    rateArticle: builder.mutation<unknown, RateArticleProps>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg
      })
    })
  })
});

export const useArticleRating = ArticleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = ArticleRatingApi.useRateArticleMutation;
