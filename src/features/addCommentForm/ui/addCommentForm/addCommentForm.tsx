import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './addCommentForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '@/features/addCommentForm/model/selectors/addCommentFormSelectors';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from '@/features/addCommentForm';
import {
  DynamicModuleLoder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoder/DynamicModuleLoder';

export interface AddCommentFormProps {
  className?: string;
  onSendComment?: (text: string) => void;
}

const reducers: ReducersList = { AddCommentForm: addCommentFormReducer };

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment?.(text || '');
    onCommentTextChange('');
  }, [onSendComment, text, onCommentTextChange]);

  return (
    <DynamicModuleLoder reducers={reducers}>
      <div className={classNames(classes.addCommentForm, {}, [className])}>
        <Input
          className={classNames(classes.addCommentFormInput)}
          placeholder={t('Enter your comment')}
          type="text"
          value={text}
          onChange={onCommentTextChange}
          // error={error}
        />
        <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
          {t('Add comment')}
        </Button>
      </div>
    </DynamicModuleLoder>
  );
};

export default AddCommentForm;
