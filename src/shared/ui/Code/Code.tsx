import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Code.module.scss';
import React, { useCallback } from 'react';
import { Button, ThemeButton } from '../Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';

interface CodeProps {
  className?: string;
  text: string;
}
export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(classes.Code, {}, [className])}>
      <Button className={classes.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}>
        <CopyIcon className={classes.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};
