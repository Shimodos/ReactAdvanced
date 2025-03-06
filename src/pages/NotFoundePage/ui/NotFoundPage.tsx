import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Page className={classNames(classes.NotFoundePage, {}, [className])}>
      <h1>{t('NotFoundPage')}</h1>
    </Page>
  );
};
