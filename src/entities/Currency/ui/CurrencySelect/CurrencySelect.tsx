import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}
export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const options = [
      { value: Currency.EUR, constent: 'EUR' },
      { value: Currency.USD, constent: 'USD' },
      { value: Currency.UAH, constent: 'UAH' }
    ];

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <Select
        className={classNames('', {}, [className])}
        label={t('Currency')}
        options={options}
        value={value}
        onChange={onChangeHandler}
        readonly={readonly}
      ></Select>
    );
  }
);

CurrencySelect.displayName = 'CurrencySelect';
