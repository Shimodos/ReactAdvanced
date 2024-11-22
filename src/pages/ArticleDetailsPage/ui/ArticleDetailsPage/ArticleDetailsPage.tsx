import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommetnList } from 'entities/Comment';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback } from 'react';
import addCommentForArticle from 'pages/ArticleDetailsPage/model/services/sendCommentForArticle/addCommentForArticle';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);
  const navigate = useNavigate();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return <Page>{t('ArtcicleNotFound')}</Page>;
  }

  const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
  };

  return (
    <DynamicModuleLoder reducers={reducers} remmoveAfterUnmount>
      <Page>
        <Button theme={ThemeButton.OUTLINE} className={classes.buttonBack} onClick={onBack}>
          {t('Back')}
        </Button>
        <ArticleDetails id={id} />
        <Text size={TextSize.M} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommetnList isLoading={commentIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoder>
  );
};

export default ArticleDetailsPage;
// function dispatch(arg0: any) {
//   throw new Error('Function not implemented.');
// }
