import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentcCard.module.scss';
import { Comment } from '../../models/type/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

interface CommentcCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}
export const CommentcCard = (props: CommentcCardProps) => {
  const { className, comment, isLoading } = props;
  return (
    <div className={classNames(classes.CommentcCard, {}, [className])}>
      <div className={classes.header}>
        {comment.user.avatar ? <Avatar size={40} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </div>
      <Text className={classes.text} text={comment.text} />
    </div>
  );
};
