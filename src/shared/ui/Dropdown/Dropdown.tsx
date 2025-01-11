import { Menu } from '@headlessui/react';
import classes from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment } from 'react';

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
}

const trigger = <button className={classes.trigger}>Trigger</button>;

function MyDropdown(props: DropdownProps) {
  const { className, items, trigger } = props;
  return (
    <Menu as={'div'} className={classNames(classes.dropdown, {}, [className])}>
      <Menu.Button className={classes.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classes.items}>
        {items?.map((item, index) => {
          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {({ active }) => (
                <button
                  type="button"
                  className={classNames(classes.item, { [classes.active]: active })}
                  onClick={item.onClick}
                >
                  {item.content}
                </button>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;
