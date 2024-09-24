import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(classes.ProfileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t('ProfilePage')} />
        <Button className={classes.editBtn} theme={ThemeButton.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
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
