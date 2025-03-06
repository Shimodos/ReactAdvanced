import { Menu } from '@headlessui/react';
import classes from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Fragment } from 'react';
import { DropDowDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/Popup.module.scss';

interface DropdownItem {
  disabled?: boolean;
  content?: React.ReactNode;
  label?: string;
  onClick: () => void;
  href?: string;
}
interface DropdownProps {
  className?: string;
  items?: DropdownItem[];
  trigger?: React.ReactNode;
  direction?: DropDowDirection;
}

export function MyDropdown(props: DropdownProps) {
  const { className, items, trigger, direction = 'down left' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as={'div'} className={classNames(classes.dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(classes.items, {}, menuClasses)}>
        {items?.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              className={classNames(classes.item, { [classes.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} key={index} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
