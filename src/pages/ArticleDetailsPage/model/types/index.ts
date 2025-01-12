import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { ArticleDetailsRecommendationSchema } from './ArticleDetailsRecommendationSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommendedArticles: ArticleDetailsRecommendationSchema;
}
