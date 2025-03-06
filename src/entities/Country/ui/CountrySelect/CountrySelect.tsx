import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/Country';
import { ListBox } from '@/shared/ui/Popup';

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
      <ListBox
        className={classNames('', {}, [className])}
        defaultValue={t('Country')}
        value={value}
        onChange={onChangeHandler}
        items={options}
        readonly={readonly}
        label={t('Country')}
        direction={'up right'}
      ></ListBox>
    );
  }
);

CountrySelect.displayName = 'CurrencySelect';
