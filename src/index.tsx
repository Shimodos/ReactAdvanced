import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvauder from './styles/theme/ThemeProvauder';

render(
  <BrowserRouter>
    <ThemeProvauder>
      <App />
    </ThemeProvauder>
  </BrowserRouter>,

  document.getElementById('root'),
);
