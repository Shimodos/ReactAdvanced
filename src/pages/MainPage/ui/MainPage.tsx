// import { BugButton } from 'app/providers/ErrorBoundery';
import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <BugButton /> */}
      {t('MainPage')}
      <Counter />
    </div>
  );
};

export default MainPage;
