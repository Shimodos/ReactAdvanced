import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { useArticleRecommendationList } from '../../api/ArticleRcommendationApp';

interface ArticleRcommendationListProps {
  className?: string;
}

export const ArticleRcommendationList = memo((props: ArticleRcommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap={'8'} className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Recommends')} />
      <ArticleList isLoading={isLoading} articcle={articles} target="_blank" virtualized={false} />
    </VStack>
  );
});

ArticleRcommendationList.displayName = 'ArticleRcommendationList';
