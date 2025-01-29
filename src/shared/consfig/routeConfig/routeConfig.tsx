import React from 'react';
import { AboutePage } from 'pages/AboutePage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundePage';
import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticleCreatePage } from 'pages/ArticleCreatePage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { UserRole } from 'entities/User';
import { ForbiddenPage } from 'pages/ForbiddenPage';

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

export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile/', // + id
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.ARTICLE_CREATE]: '/articles/new',
  [AppRoute.ARTICLE_EDIT]: '/articles/:id/edit/', // + id
  [AppRoute.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoute.NOT_FOUND]: '*', // 404
  [AppRoute.ADMIN_PANEL]: '/admin_panel',
  [AppRoute.FORBIDDEN]: '/forbidden'
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
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoute.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlePage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [AppRoute.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoute.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  },
  [AppRoute.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    role: [UserRole.ADMIN, UserRole.MANAGER]
  },
  [AppRoute.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />
  }
};
