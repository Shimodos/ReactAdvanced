import { FC, lazy } from 'react';
import { AddCommentFormProps } from './addCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  async () => await import('./addCommentForm')
);
