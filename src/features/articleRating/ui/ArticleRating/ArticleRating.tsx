import { RatingCard } from '@/entities/RatingCard';
import { useTranslation } from 'react-i18next';

interface ArticleRatingProps {
  className?: string;
}
export const ArticleRating = ({ className }: ArticleRatingProps) => {
  const { t } = useTranslation();

  return (
    <RatingCard
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв')}
      hasFeedback
    />
  );
};
