import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { AlignText, Text, ThemeText } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/type/profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, data, error, isLoading } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(classes.ProfileCard, { [classes.loafing]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(classes.ProfileCard, { [classes.error]: true }, [className])}>
        <Text
          theme={ThemeText.ERROR}
          title={t('Error')}
          text={t('Reload')}
          align={AlignText.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(classes.ProfileCard, {}, [className])}>
      <div className={classes.data}>
        <Input
          value={data?.first}
          placeholder={t('First name')}
          className={classes.input}
          onChange={() => {}}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Last name')}
          className={classes.input}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
