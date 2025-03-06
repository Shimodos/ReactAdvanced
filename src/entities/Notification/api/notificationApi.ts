import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const NotificationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifacations: builder.query<Notification[], null>({
      query: () => ({
        url: '/notifications'
      })
    })
  })
});

export const useNotifacations = NotificationApi.useGetNotifacationsQuery;
