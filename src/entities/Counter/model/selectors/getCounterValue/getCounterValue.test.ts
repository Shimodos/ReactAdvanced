// describe('getCounter', () => {
//   test('should return the counter', () => {
//     expect().toEqual();
//   });
// });

import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue', () => {
  test('should return the counter', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 5 } };
    expect(getCounterValue(state as StateSchema)).toEqual(5);
  });
});
