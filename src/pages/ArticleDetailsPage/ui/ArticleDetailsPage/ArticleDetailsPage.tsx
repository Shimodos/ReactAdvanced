import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { Page } from 'shared/ui/Page/Page';
import { articleDetailsPageReducer } from '../../../../pages/ArticleDetailsPage/model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRcommendationList } from 'features/articleRcommendationList';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page>{t('ArtcicleNotFound')}</Page>;
  }

  const reducers: ReducersList = {
    ArticleDetailsPage: articleDetailsPageReducer
  };

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRcommendationList />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModuleLoder>
  );
};

export default ArticleDetailsPage;
