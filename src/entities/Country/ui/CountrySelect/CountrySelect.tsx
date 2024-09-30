import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}
export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const options = [
      { value: Country.France, constent: 'FR' },
      { value: Country.Germany, constent: 'DE' },
      { value: Country.Spain, constent: 'ES' },
      { value: Country.USA, constent: 'US' },
      { value: Country.Ukraine, constent: 'UA' }
    ];

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        label={t('Country')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      ></Select>
    );
  }
);

CountrySelect.displayName = 'CurrencySelect';
