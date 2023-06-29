import React from 'react';
import 'daisyui/dist/full.css';
import Navbar from './components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';

const App = () => {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default App;