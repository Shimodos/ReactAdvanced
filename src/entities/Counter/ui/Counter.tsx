// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { counterActions, useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps): JSX.Element => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { decrement, increment, add } = useCounterActions();

  const handleIncrement = (): void => {
    increment();
  };

  const handleDecrement = (): void => {
    decrement();
  };

  const handleAdd = (): void => {
    add(10);
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {t('counter.value')}
        {counterValue}
      </h1>
      <Button onClick={handleDecrement} data-testid="decrement-btn">
        -
      </Button>
      <Button onClick={handleIncrement} data-testid="increment-btn">
        +
      </Button>
      <Button onClick={handleAdd} data-testid="add-btn">
        Add 10
      </Button>
    </div>
  );
};
