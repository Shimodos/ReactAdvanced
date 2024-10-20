import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommetnList } from 'entities/Comment';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('ArtcicleNotFound')}</div>;
  }

  return (
    <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text size={TextSize.M} title={t('Comments')} />
      <CommetnList />
    </div>
  );
};

export default ArticleDetailsPage;
