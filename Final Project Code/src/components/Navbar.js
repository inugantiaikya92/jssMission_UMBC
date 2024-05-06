import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Img/nav-jss-logo.png'; 
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white md:py-2 fixed w-full top-0 z-10">
      <div className="container mx-auto md:px-5">
        <div className="flex justify-between items-center">
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 text-xl focus:outline-none">
              {isOpen ? 'Close' : <>&#9776;</>}
            </button>
          </div>
          <div className={` ml-32 md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className={`navtext mx-4 md:mx-8 navsection ${isActive('/') ? 'active' : ''}`}>POOJA REQUEST</Link>
            <Link to="/CateringForm" className={`navtext mx-5 md:mx-8 navsection ${isActive('/CateringForm') ? 'active' : ''}`}>CATERING FORM</Link>
            {/* Hide the logo on small screens */}
            <div className="hidden md:block md:mx-4">
              <div className="logo-container items-center border rounded-full bg-white logobox"></div>
            </div>
            <Link to="/Yoga" className={`navtext mx-5 md:mx-8 navsection ${isActive('/Yoga') ? 'active' : ''}`}>YOGA</Link>
            <Link to="/CatringReq" className={`navtext mx-5 md:mx-8 navsection ${isActive('/CatringReq') ? 'active' : ''}`}>CATERING REQUEST FORM</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
