import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const Input = memo(function Input(props: InputProps) {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [creatPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChengeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setCaretPosition((e.target as HTMLInputElement).selectionStart);
  };

  return (
    <div className={classNames(classes.InputWrapper, {}, [className])}>
      {placeholder && <div className={classes.placeholder}>{placeholder}</div>}
      <div className={classes.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChengeHandler}
          className={classes.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
          // className={className}
        />

        {isFocused && <div className={classes.caret} style={{ left: creatPosition + 'ch' }} />}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
