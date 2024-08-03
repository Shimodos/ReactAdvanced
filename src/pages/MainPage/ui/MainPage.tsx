import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t('MainPage')}</div>;
};

export default MainPage;
