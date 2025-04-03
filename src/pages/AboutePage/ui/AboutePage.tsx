import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';

const AboutePage: React.FC = () => {
  const { t } = useTranslation('about');

  return <Page data-testid={'AboutePage'}>{t('AboutPage')}</Page>;
};

export default AboutePage;
