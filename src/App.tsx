import React from 'react';
import Counter from './components/Counter';
import './index.scss';

const App = () => {
  return (
    <div className="app">
      <div>React TypeScript Webpack Starter</div>
      <Counter initialValue={0} />
    </div>
  );
};

export default App;
