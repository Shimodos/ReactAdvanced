import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRouter } from '@/shared/lib/tests/componentRouter/componentRouter';

describe('Sidebar', () => {
  test('with only first param', () => {
    componentRouter(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRouter(<Sidebar />);
    const toggleBtn = screen.getByTestId('sodebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
