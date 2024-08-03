import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvauder } from 'app/providers/ThemeProvider';

import 'shared/consfig/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvauder>
      <App />
    </ThemeProvauder>
  </BrowserRouter>,

  document.getElementById('root')
);
