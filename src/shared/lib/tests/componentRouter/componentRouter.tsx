import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/consfig/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface componentRouterProps {
  route?: string;
}

export function componentRouter(
  component: ReactNode,
  options: componentRouterProps = {}
): RenderResult {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
