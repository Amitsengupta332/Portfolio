import React from 'react';
import 'daisyui/dist/full.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
    </div>
  );
};

export default App;