import { Button } from 'shared/ui/Button/Button';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton: React.FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
