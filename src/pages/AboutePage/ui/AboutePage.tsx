import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutePage: React.FC = () => {
  const { t } = useTranslation('about');

  return <div>{t('AboutPage')}</div>;
};

export default AboutePage;
