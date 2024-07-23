import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutePageAsync } from './pages/AboutePage/AboutePage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './styles/theme/ThemeContext';
import { useTheme } from './styles/theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Theme</button>
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
