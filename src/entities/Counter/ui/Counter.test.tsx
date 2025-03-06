import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRouter } from '@/shared/lib/tests/componentRouter/componentRouter';
// import { userEvent } from '@storybook/test';

describe('Counter', () => {
  test('test render', () => {
    componentRouter(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  // test('increment', () => {
  //   componentRouter(<Counter />, {
  //     initialState: { counter: { value: 10 } }
  //   });
  //   userEvent.click(screen.getByTestId('increment-btn'));
  //   expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  // });

  // test('decrement', () => {
  //   componentRouter(<Counter />, {
  //     initialState: { counter: { value: 10 } }
  //   });
  //   userEvent.click(screen.getByTestId('decrement-btn'));
  //   expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  // });
});
