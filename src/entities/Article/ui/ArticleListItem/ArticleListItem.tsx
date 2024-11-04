import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleListItem.module.scss';
import { Article, ArticleVirw } from 'entities/Article/models/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticleVirw;
}
export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props;

  if (view === ArticleVirw.LIST) {
    return (
      <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
        {article.title}
      </div>
    );
  }
  return (
    <div
      className={classNames(classes.ArticleListItem, {}, [className, view ? classes[view] : ''])}
    >
      <div className={classes.card}>
        <div className={classes.imageWrapper}>
          <img src={article.img} alt={article.title} className={classes.img} />
          <Text text={article.createdAt} className={classes.date} />
        </div>
        <div className={classes.infoWrapper}>
          <Text text={article.type.join(', ')} className={classes.types} />
          <Text text={article.views.toString()} className={classes.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={classes.title} />
      </div>
    </div>
  );
};
