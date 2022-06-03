import React from 'react';
import Home from './pages/Home';
import {BrowserRouter ,  Routes  , Route } from "react-router-dom"
import About from './pages/About';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/'  element={<Home/>} />
          <Route  path='/about' element={<About/>} />
          <Route path ="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;