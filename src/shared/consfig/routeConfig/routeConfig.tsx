import React from 'react';
import { AboutePage } from 'pages/AboutePage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundePage';
import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile',
  [AppRoute.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoute, AppRouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.about,
    element: <AboutePage />
  },
  [AppRoute.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoute.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
