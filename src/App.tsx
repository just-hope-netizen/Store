import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}

export default App;
