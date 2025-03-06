import React, { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import classes from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { DropDowDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/Popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
}

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

export function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'up left'
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap={'4'}>
      {label && <span>{label + '>'}</span>}

      <HListbox
        as="div"
        className={classNames(classes.ListBox, {}, [className, popupCls.popup])}
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
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled
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
