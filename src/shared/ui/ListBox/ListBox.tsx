import React, { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import classes from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
}

type DropDowDirection = 'up' | 'down';

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  readonly?: boolean;
  direction?: DropDowDirection;
}

const mapDirectionClass: Record<DropDowDirection, string> = {
  down: classes.optionDown,
  up: classes.optionUp
};

function Listbox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'up'
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap={'4'}>
      {label && <span>{label + '>'}</span>}

      <HListbox
        as="div"
        className={classNames(classes.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button className={classes.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(classes.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(classes.item, {
                    [classes.active]: active,
                    [classes.disabled]: item.disabled
                  })}
                >
                  {selected ? '' : ''}
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}

export default Listbox;
