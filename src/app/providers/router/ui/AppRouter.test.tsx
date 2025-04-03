import { getRouteAbout } from '@/shared/consfig/routeConfig/routeConfig';
import AppRouter from './AppRouter';
import { componentRouter } from '@/shared/lib/tests/componentRouter/componentRouter';
import { screen } from '@testing-library/react';

// Roting test
describe('app/router/AppRouter', () => {
  test('Render page complite', async () => {
    componentRouter(<AppRouter />, {
      route: getRouteAbout()
    });

    const page = await screen.findByTestId('AboutePage');
    expect(page).toBeInTheDocument();
  });
});
