import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './CommetnList.module.scss';
import { Comment } from '../../models/type/comment';
import { Text } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentcCard } from '../CommentcCard/CommentcCard';

interface CommetnListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}
export const CommetnList = (props: CommetnListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(classes.CommetnList, {}, [className])}>
        <CommentcCard isLoading />
        <CommentcCard isLoading />
        <CommentcCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(classes.CommetnList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentcCard
            isLoading={isLoading}
            className={classes.comment}
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t('no comments')} />
      )}
    </div>
  );
};
