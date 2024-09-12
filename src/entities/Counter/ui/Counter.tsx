// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  className?: string;
}
export const Counter = ({ className }: CounterProps): JSX.Element => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {t('counter.value')}
        {counterValue}
      </h1>
      <Button onClick={decrement} data-testid="decrement-btn">
        -
      </Button>
      <Button onClick={increment} data-testid="increment-btn">
        +
      </Button>
    </div>
  );
};
