import { RatingCard } from '@/entities/RatingCard';
import { useTranslation } from 'react-i18next';
import { useArticleRating } from '../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}
export const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const { data, isLoading } = useArticleRating({ userId: userData?.id ?? '', articleId });

  if (isLoading) {
    return <Skeleton width="100%" height={120} border="8px" />;
  }

  return (
    <RatingCard
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв')}
      hasFeedback
    />
  );
};
