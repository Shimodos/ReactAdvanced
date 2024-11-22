// import { BugButton } from 'app/providers/ErrorBoundery';
import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {/* <BugButton /> */}
      {t('MainPage')}
      <Counter />
    </Page>
  );
};

export default MainPage;
