import { classNames } from 'shared/lib/classNames/classNames';
import classes from './notificationButton.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popup';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';

interface notificationButtonProps {
  className?: string;
}
export const NotificationButton = ({ className }: notificationButtonProps) => {
  return (
    <Popover
      className={classNames(classes.notificationButton, {}, [className])}
      trigger={
        <Button theme={ThemeButton.CLEAR}>
          <Icon Svg={NotificationIcon} />
        </Button>
      }
    >
      <NotificationList className={classes.notifications} />
    </Popover>
  );
};
