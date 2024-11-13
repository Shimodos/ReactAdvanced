import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleListItem.module.scss';
import { ArticleView } from 'entities/Article/models/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}
export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <Skeleton width={30} height={30} border={'50%'} />
            <Skeleton width={150} height={20} className={classes.username} />
            <Skeleton width={150} height={20} className={classes.date} />
          </div>
          <Skeleton width={250} height={24} className={classes.title} />
          <Skeleton height={200} className={classes.img} />
          <div className={classes.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div
      className={classNames(classes.ArticleListItem, {}, [className, view ? classes[view] : ''])}
    >
      <Card className={classes.card}>
        <div className={classes.imageWrapper}>
          <Skeleton width={200} height={200} className={classes.img} />
        </div>
        <div className={classes.infoWrapper}>
          <Skeleton width={150} height={20} className={classes.title} />
        </div>
        <Skeleton width={150} height={20} className={classes.username} />
      </Card>
    </div>
  );
};
