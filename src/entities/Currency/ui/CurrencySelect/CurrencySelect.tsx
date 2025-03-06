import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select/Select';
import { Currency } from '../../../../entities/Currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popup';

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
      { value: Currency.EUR, content: 'EUR' },
      { value: Currency.USD, content: 'USD' },
      { value: Currency.UAH, content: 'UAH' }
    ];

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <ListBox
        className={classNames('', {}, [className])}
        defaultValue={t('Currency')}
        value={value}
        onChange={onChangeHandler}
        items={options}
        readonly={readonly}
        label={t('Currency')}
        direction={'up right'}
      ></ListBox>
    );
  }
);

CurrencySelect.displayName = 'CurrencySelect';
