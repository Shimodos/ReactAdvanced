import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/lib/classNames/classNames';
import { rtkApi } from 'shared/api/rtkApi';

interface ArticleRcommendationListProps {
  className?: string;
}

const recomendationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRecommendationList: builder.query({
      query: (limit) => ({
        url: '/article',
        params: {
          _limit: limit
        },
        method: 'GET'
      })
    })
  })
});

const useArticleRecommendationList = recomendationApi.useGetArticleRecommendationListQuery;

export const ArticleRcommendationList = memo((props: ArticleRcommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data } = useArticleRecommendationList(3);

  return (
    <VStack gap={'8'} className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Recommends')} />
      <ArticleList isLoading articcle={[]} target="_blank" />
    </VStack>
  );
});

ArticleRcommendationList.displayName = 'ArticleRcommendationList';
