import React from 'react';
import Navbar from '../Components/Navbar';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Main = () => {
  return (
    
    <div className=" bg-custom-gradient min-h-screen lg:max-w-7xl p-1 mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-179px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
 
  );
};

export default Main;
