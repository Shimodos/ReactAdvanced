import { ArticleList } from '@/entities/Article';
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView
} from '../../model/selectors/articlePageSelectors';
import { getArticle } from '../../model/slices/ArticlePageSlice';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text/Text';

interface ArticleInfinitListProps {
  className?: string;
}
export const ArticleInfinitList = ({ className }: ArticleInfinitListProps) => {
  const { t } = useTranslation('article');
  const articles = useSelector(getArticle.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const error = useSelector(getArticlePageError);

  if (error) {
    return <Text size={TextSize.M} text={t('Error')} />;
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList isLoading={isLoading} view={view} articcle={articles} />
    </div>
  );
};
