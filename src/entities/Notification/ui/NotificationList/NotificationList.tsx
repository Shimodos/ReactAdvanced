import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './NotificationList.module.scss';
import { useNotifacations } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface NotificationListProps {
  className?: string;
}
export const NotificationList = (props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifacations(null, { pollingInterval: 10000 });

  if (isLoading) {
    return (
      <VStack className={classNames(classes.NotificationList, {}, [className])}>
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
      </VStack>
    );
  }

  return (
    <VStack className={classNames(classes.NotificationList, {}, [className])}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>
      )}
    </VStack>
  );
};
