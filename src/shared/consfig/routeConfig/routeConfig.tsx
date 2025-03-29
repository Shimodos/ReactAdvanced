import React from 'react';
import { AboutePage } from '@/pages/AboutePage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundePage';
import { RouteProps } from 'react-router-dom';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticleCreatePage } from '@/pages/ArticleCreatePage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  role?: UserRole[];
};

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  NOT_FOUND = 'not_found',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden'
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteNotFound = () => '*';
export const getRouteAdminPanel = () => '/admin_panel';
export const getRouteForbidden = () => '/forbidden';

// export const RoutePath: Record<AppRoute, string> = {
//   [AppRoute.MAIN]: getRouteMain(),
//   [AppRoute.ABOUT]: getRouteAbout(),
//   [AppRoute.PROFILE]: getRouteProfile(':id'), // + id
//   [AppRoute.ARTICLES]: getRouteArticles(),
//   [AppRoute.ARTICLE_CREATE]: getRouteArticleCreate(),
//   [AppRoute.ARTICLE_EDIT]: getRouteArticleEdit(':id'), // + id
//   [AppRoute.ARTICLE_DETAILS]: getRouteArticleDetails(':id'), // + id
//   [AppRoute.NOT_FOUND]: getRouteNotFound(),
//   [AppRoute.ADMIN_PANEL]: getRouteAdminPanel(),
//   [AppRoute.FORBIDDEN]: getRouteForbidden()
// };

export const routeConfig: Record<AppRoute, AppRouteProps> = {
  [AppRoute.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoute.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutePage />
  },
  [AppRoute.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoute.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlePage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoute.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />
  },
  [AppRoute.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    role: [UserRole.ADMIN, UserRole.MANAGER]
  },
  [AppRoute.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />
  }
};
