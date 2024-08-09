import { AboutePage } from 'pages/AboutePage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: RoutePath.about,
    element: <AboutePage />
  },
  [AppRoute.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};