import { classNames } from '@/shared/lib/classNames/classNames';
// import classes from './ArticleDetailsComment.module.scss';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommetnList } from '@/entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { Suspense, useCallback } from 'react';
import addCommentForArticle from '../../model/services/sendCommentForArticle/addCommentForArticle';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentProps {
  className?: string;
  id: string;
}
export const ArticleDetailsComment = ({ className, id }: ArticleDetailsCommentProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <div className={classNames('', {}, [className])}>
      <Text size={TextSize.M} title={t('Comments')} />
      <Suspense fallback={<div>Loading...</div>}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>

      <CommetnList isLoading={commentIsLoading} comments={comments} />
    </div>
  );
};
