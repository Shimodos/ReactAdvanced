import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlePage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticlePage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  return <div className={classNames(classes.ArticlePage, {}, [className])}>{t('ArticlePage')}</div>;
};

export default ArticlePage;
