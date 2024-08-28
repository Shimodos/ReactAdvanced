import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvauder } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

import 'shared/consfig/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundery';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvauder>
        <App />
      </ThemeProvauder>
    </ErrorBoundary>
  </BrowserRouter>,

  document.getElementById('root')
);
