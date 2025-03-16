import { RatingCard } from '@/entities/RatingCard';
import { useTranslation } from 'react-i18next';
import { useArticleRating, useRateArticle } from '../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useCallback } from 'react';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}
const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useArticleRating({ userId: userData?.id ?? '', articleId });

  const [rateArticleMutation] = useRateArticle();

  const handleReteArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      if (starsCount) {
        handleReteArticle(starsCount);
      }
      handleReteArticle(0);
    },
    [handleReteArticle]
  );
  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleReteArticle(starsCount, feedback);
    },
    [handleReteArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height={120} border="8px" />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв')}
      hasFeedback
    />
  );
};

export default ArticleRating;
