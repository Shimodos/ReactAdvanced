import { Popover as HPopover } from '@headlessui/react';
import { DropDowDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/const';
import classes from './Popover.module.scss';
import popupCls from '../../styles/Popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PopoverProps {
  className?: string;
  trigger?: React.ReactNode;
  direction?: DropDowDirection;
  children?: React.ReactNode;
}
export function Popover(props: PopoverProps) {
  const { className, direction = 'down left', trigger, children } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(classes.Popover, {}, [className, popupCls.popup])}>
      <HPopover.Button as={'div'} className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(classes.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
