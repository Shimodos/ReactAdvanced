import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentcCard.module.scss';
import { Comment } from '../../models/type/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/consfig/routeConfig/routeConfig';

interface CommentcCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentcCard = (props: CommentcCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(classes.CommentcCard, {}, [className])}>
        <div className={classes.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={classes.username} />
        </div>
        <Skeleton width="100%" height={50} className={classes.text} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(classes.CommentcCard, {}, [className, classes.loading])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={classes.header}>
        {comment.user.avatar ? <Avatar size={40} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text className={classes.text} text={comment.text} />
    </div>
  );
};
