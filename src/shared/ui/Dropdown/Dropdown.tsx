import { Menu } from '@headlessui/react';
import classes from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface DropdownProps {
  className?: string;
  children: React.ReactNode;
}

function MyDropdown(props: DropdownProps) {
  const { children, className } = props;
  return (
    <Menu as={'div'} className={classNames(classes.dropdown, {}, [className])}>
      <Menu.Button className={classes.btn}>More</Menu.Button>
      <Menu.Items className={classes.items}>
        <Menu.Item as={'div'} className={classes.item}>
          {({ active }) => (
            <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
              Account settings
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default MyDropdown;
