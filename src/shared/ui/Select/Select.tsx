import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';
import { ChangeEvent, useMemo } from 'react';

export interface SelectOptions<T extends string> {
  value: T;
  constent: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/array-type
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}
export const Select = <T extends string>(props: SelectProps<T>) => {
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
    onChange?.(e.target.value as T);
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
