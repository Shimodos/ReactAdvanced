import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../type/counterSchema';

describe('counterSlice.test', () => {
  test('decriment', () => {
    const state: CounterSchema = { value: 5 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
  });

  test('incriment', () => {
    const state: CounterSchema = { value: 5 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
  });

  test('empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
