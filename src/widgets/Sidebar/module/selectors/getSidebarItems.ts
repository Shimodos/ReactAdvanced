import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from '@/shared/consfig/routeConfig/routeConfig';
import MaineIcone from '@/shared/assets/icons/maine.svg';
import AboutIcone from '@/shared/assets/icons/about.svg';
import ProfileIcone from '@/shared/assets/icons/profile.svg';
import ArticleIcone from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      text: 'Main',
      Icon: MaineIcone
    },
    {
      path: getRouteAbout(),
      text: 'About',
      Icon: AboutIcone
    }
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData?.id),
        text: 'Profile',
        Icon: ProfileIcone,
        authOnly: true
      },
      {
        path: getRouteArticles(),
        text: 'Articles',
        Icon: ArticleIcone,
        authOnly: true
      }
    );
  }

  return sidebarItemList;
});
