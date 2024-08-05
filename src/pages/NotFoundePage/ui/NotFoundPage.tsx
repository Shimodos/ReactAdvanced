import { classNames } from 'shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={classNames(classes.NotFoundePage, {}, [className])}>
      <h1>{t('NotFoundPage')}</h1>
    </div>
  );
};
