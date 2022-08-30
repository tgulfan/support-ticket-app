import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route element={<Home />} exact path='/' />
            <Route element={<Login />} path='/login' />
            <Route element={<Register />} path='/register' />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
