import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country';
import Listbox from 'shared/ui/ListBox/ListBox';

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
      { value: Country.France, content: 'FR' },
      { value: Country.Germany, content: 'DE' },
      { value: Country.Spain, content: 'ES' },
      { value: Country.USA, content: 'US' },
      { value: Country.Ukraine, content: 'UA' }
    ];

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Listbox
        className={classNames('', {}, [className])}
        defaultValue={t('Country')}
        value={value}
        onChange={onChangeHandler}
        items={options}
        readonly={readonly}
        label={t('Country')}
        direction={'up'}
      ></Listbox>
    );
  }
);

CountrySelect.displayName = 'CurrencySelect';
