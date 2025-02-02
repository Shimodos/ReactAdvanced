import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleDetails.module.scss';
import {
  DynamicModuleLoder,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';
import { articleDetailsReducer } from '../../models/slice/articleDetailsSlice';
import { useCallback, useEffect } from 'react';
import { fetchArticleById } from '../../models/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticleData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from '../../models/selectors/articleDetails';
import { AlignText, Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../models/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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
  // const isLoading = true;
  const isLoading = useSelector(getArticleDetailsLoading);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} className={classes.block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} className={classes.block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent className={classes.block} block={block} />;
      default:
        return null;
    }
  }, []);

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
    content = (
      <>
        <div className={classes.avatarWrapper}>
          <Avatar size={200} src={article?.img} />
        </div>
        <Text
          align={AlignText.LEFT}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={classes.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text title={String(article?.views)} size={TextSize.M} />
        </div>
        <div className={classes.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text title={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
        {/* {article?.blocks.map((block) => (
          <div key={block.id}>{renderBlock(block)}</div>
        ))} */}
      </>
    );
  }

  return (
    <DynamicModuleLoder reducers={reducer} remmoveAfterUnmount={true}>
      <div className={classNames(classes.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoder>
  );
};
