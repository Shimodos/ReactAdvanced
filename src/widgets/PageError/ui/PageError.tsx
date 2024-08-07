import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps): JSX.Element => {
  const { t } = useTranslation();

  const onReload = (): void => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <p>{t('unexpectedError')}</p>
      <Button onClick={onReload}>{t('reload')}</Button>
    </div>
  );
};
