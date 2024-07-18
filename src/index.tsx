import { render } from 'react-dom';
import Counter from './components/Counter';

render(
  <>
    <Counter initialValue={0} />
    <Counter initialValue={10} />
  </>,
  document.getElementById('root'),
);
