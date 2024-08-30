// import { BugButton } from 'app/providers/ErrorBoundery';
import { Counter } from 'app/entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
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
