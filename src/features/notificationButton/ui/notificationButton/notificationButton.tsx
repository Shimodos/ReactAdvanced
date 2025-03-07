import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './notificationButton.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popup';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { useCallback, useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

interface notificationButtonProps {
  className?: string;
}
export const NotificationButton = ({ className }: notificationButtonProps) => {
  const [isOpen, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
      <Icon Svg={NotificationIcon} />
    </Button>
  );

  console.log('isMobile:', isMobile);
  console.log('isBrowser:', isBrowser);

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(classes.notificationButton, {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={classes.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
};
