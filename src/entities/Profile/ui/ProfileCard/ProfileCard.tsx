import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { AlignText, Text, ThemeText } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/type/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { HStack, VStack } from 'shared/ui/Stack';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(classes.ProfileCard, { [classes.loafing]: true }, [className])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(classes.ProfileCard, { [classes.error]: true }, [className])}
      >
        <Text
          theme={ThemeText.ERROR}
          title={t('Error')}
          text={t('Reload')}
          align={AlignText.CENTER}
        />
      </HStack>
    );
  }

  const mods = {
    [classes.editing]: !readonly
  };

  return (
    <VStack gap="8" max className={classNames(classes.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max className={classes.avatarWrapper}>
          <Avatar src={data?.avatar} alt={data?.username} className={classes.avatar} />
        </HStack>
      )}

      <Input
        value={data?.first}
        placeholder={t('First name')}
        className={classes.input}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('Last name')}
        className={classes.input}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t('Age')}
        className={classes.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t('City')}
        className={classes.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('Username')}
        className={classes.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('Avatar')}
        className={classes.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={classes.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={classes.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
