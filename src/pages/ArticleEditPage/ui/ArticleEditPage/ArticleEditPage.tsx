import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleEditPage.module.scss';
import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
interface ArticleEditPageProps {
  className?: string;
}
const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
      <h1>{isEdit ? t('EditArticle') + id : t('CreateNewArticle')} </h1>
    </Page>
  );
};

export default ArticleEditPage;
