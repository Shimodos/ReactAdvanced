import React, { Suspense } from 'react';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutePageAsync } from './pages/AboutePage/AboutePage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

const App = () => {
  return (
    <div className="app">
      {/* <div>React TypeScript Webpack Starter</div> */}
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>AboutePage</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutePageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
