import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvauder } from '@/app/providers/ThemeProvider';
import '@/app/styles/index.scss';

import '@/shared/consfig/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundery';
import { StoreProvider } from '@/app/providers/StoreProvider';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');

if (!container) {
  throw new Error('Container not found');
}

const root = createRoot(container);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvauder>
          <App />
        </ThemeProvauder>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
