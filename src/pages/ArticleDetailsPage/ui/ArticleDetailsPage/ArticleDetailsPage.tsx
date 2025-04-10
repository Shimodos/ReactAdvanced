import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { Page } from '@/shared/ui/Page/Page';
import { articleDetailsPageReducer } from '../../../../pages/ArticleDetailsPage/model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleRcommendationList } from '@/features/articleRcommendationList';
import { ArticleDetailsComment } from '../ArticleDetailsComment/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';

interface ArticleDetailsPageProps {
  className?: string;
  articleId?: string;
}

const ArticleDetailsPage = ({ className, articleId }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  const reducers: ReducersList = {
    ArticleDetailsPage: articleDetailsPageReducer
  };

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <Page>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRcommendationList />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModuleLoder>
  );
};

export default ArticleDetailsPage;
