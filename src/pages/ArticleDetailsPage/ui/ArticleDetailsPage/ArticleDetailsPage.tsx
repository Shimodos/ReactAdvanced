import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  return (
    <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
      {t('ArticleDetailsPage')}
    </div>
  );
};

export default ArticleDetailsPage;
