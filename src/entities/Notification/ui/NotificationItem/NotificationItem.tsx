import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NotificationItem.module.scss';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}
export const NotificationItem = (props: NotificationItemProps) => {
  const { className, notification } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(classes.NotificationItem, {}, [className])}
    >
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification.href) {
    return (
      <a className={classes.link} target={'_blank'} rel="noreferrer" href={notification.href}>
        {content}
      </a>
    );
  }

  return content;
};
