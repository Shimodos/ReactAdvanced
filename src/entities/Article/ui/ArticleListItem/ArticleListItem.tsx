import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleListItem.module.scss';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView
} from 'entities/Article/models/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
}
export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [navigate, article.id]);

  const types = <Text text={article.type.join(', ')} className={classes.types} />;
  const views = <Text text={article.views.toString()} className={classes.views} />;

  if (view === ArticleView.LIST) {
    const textBlocks = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;
    return (
      <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={classes.username} />
            <Text text={article.createdAt} className={classes.date} />
          </div>
          <Text title={article.title} text={article.title} className={classes.title} />
          {types}
          <img src={article.img} alt={article.title} className={classes.img} />
          {textBlocks && (
            <ArticleTextBlockComponent block={textBlocks} className={classes.textBlock} />
          )}
          <div className={classes.footer}>
            <Button theme={ThemeButton.OUTLINE} onClick={onOpenArticle}>
              {t('readMore')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div
      className={classNames(classes.ArticleListItem, {}, [className, view ? classes[view] : ''])}
    >
      <Card className={classes.card} onClick={onOpenArticle}>
        <div className={classes.imageWrapper}>
          <img src={article.img} alt={article.title} className={classes.img} />
          <Text text={article.createdAt} className={classes.date} />
        </div>
        <div className={classes.infoWrapper}>
          {types}
          {views}
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={classes.title} />
      </Card>
    </div>
  );
};
