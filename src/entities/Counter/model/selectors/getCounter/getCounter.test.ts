import { getCounter } from './getCounter';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounter', () => {
  test('should return the counter', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 5 } };
    expect(getCounter(state as StateSchema)).toEqual({ value: 5 });
  });
});
