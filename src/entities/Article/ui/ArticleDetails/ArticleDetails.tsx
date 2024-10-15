import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetails.module.scss';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { articleDetailsReducer } from 'entities/Article/models/slice/articleDetailsSlice';
import { useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/models/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticleData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from 'entities/Article/models/selectors/articleDetails';
import { AlignText, Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducer: ReducersList = {
  articleDetails: articleDetailsReducer
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = true;
  // const isLoading = useSelector(getArticleDetailsLoading);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={classes.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={classes.title} width={300} height={32} />
        <Skeleton className={classes.sceleton} width={600} height={24} />
        <Skeleton className={classes.sceleton} width="100" height={200} />
        <Skeleton className={classes.sceleton} width="100" height={200} />
      </div>
    );
  } else if (error) {
    content = <Text align={AlignText.CENTER} title={t('ArticleDetailsErrorTitle')} />;
  } else {
    content = <div>ArticleDetails</div>;
  }

  return (
    <DynamicModuleLoder reducers={reducer} remmoveAfterUnmount={true}>
      <div className={classNames(classes.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoder>
  );
};
