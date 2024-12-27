import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetailsPageHeader.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { fetchRecommendationArticle } from 'pages/ArticleDetailsPage/model/services/fetchRecommendationArticle/fetchRecommendationArticle';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { getUserAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}
export const ArticleDetailsPageHeader = ({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(getUserAuthData);
  const article = useSelector(getArticleData);
  const canEdit = useSelector(getCanEditArticle);

  const onBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchRecommendationArticle());
  });

  return (
    <div className={classNames(classes.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ThemeButton.OUTLINE} className={classes.buttonBack} onClick={onBack}>
        {t('Back')}
      </Button>
      {!canEdit && (
        <Button theme={ThemeButton.OUTLINE} className={classes.editBtn} onClick={onBack}>
          {t('Edit')}
        </Button>
      )}
    </div>
  );
};
