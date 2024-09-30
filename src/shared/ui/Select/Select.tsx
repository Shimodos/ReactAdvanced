import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';

export interface SelectOptions {
  value: string;
  constent: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}
export const Select = (props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;

  const optionList = useMemo(() => {
    return (
      options?.map((opt) => (
        <option className={classes.option} key={opt.value} value={opt.value}>
          {opt.constent}
        </option>
      )) || []
    );
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const mods = {};

  return (
    <div className={classNames(classes.Wrapper, mods, [className])}>
      {label && <span className={classes.lable}>{`${label}>`}</span>}
      <select
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
};
