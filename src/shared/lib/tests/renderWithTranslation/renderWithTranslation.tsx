import { ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/shared/consfig/i18n/i18nForTests';

export function renderWithTranslation(component: ReactNode): RenderResult {
  return render(<I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>);
}
