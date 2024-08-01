import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en');
  };

  return (
    <Button
      className={classNames(classes.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={changeLanguage}
    >
      {t('Lang')}
    </Button>
  );
};
