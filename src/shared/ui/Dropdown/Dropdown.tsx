import { Menu } from '@headlessui/react';
import classes from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment } from 'react';
import { DropDowDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

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

const mapDirectionClass: Record<DropDowDirection, string> = {
  'down left': classes.optionDownLeft,
  'up left': classes.optionUpLeft,
  'down right': classes.optionDownRight,
  'up right': classes.optionUpRight
};

function MyDropdown(props: DropdownProps) {
  const { className, items, trigger, direction = 'down left' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as={'div'} className={classNames(classes.dropdown, {}, [className])}>
      <Menu.Button className={classes.btn}>{trigger}</Menu.Button>
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

export default MyDropdown;
