import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommetnList } from 'entities/Comment';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback } from 'react';
import addCommentForArticle from 'pages/ArticleDetailsPage/model/services/sendCommentForArticle/addCommentForArticle';
import { Page } from 'shared/ui/Page/Page';
import { getArticleRecommendation } from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsRecommendationSlice';
import { getArticleRecommendationIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendation';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendation = useSelector(getArticleRecommendation.selectAll);
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationIsLoading = useSelector(getArticleRecommendationIsLoading) ?? false;

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

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
        <Text size={TextSize.L} title={t('Recommends')} />
        <ArticleList
          isLoading={recommendationIsLoading}
          articcle={recommendation}
          className={classes.recommendation}
          target="_blank"
        />
        <Text size={TextSize.M} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommetnList isLoading={commentIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoder>
  );
};

export default ArticleDetailsPage;
