import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AdminPanelPage: React.FC = () => {
  const { t } = useTranslation('about');

  return <Page>{t('Admin Panel')}</Page>;
};

export default AdminPanelPage;
