import { classNames } from 'shared/lib/classNames/classNames';
import classes from './CommentcCard.module.scss';
import { Comment } from '../../models/type/comment';

interface CommentcCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}
export const CommentcCard = (props: CommentcCardProps) => {
  const { className, comment, isLoading } = props;
  return (
    <div className={classNames(classes.CommentcCard, {}, [className])}>
      <div>{comment}</div>
    </div>
  );
};
