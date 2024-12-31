import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="flex items-center justify-between h-20 w-full bg-green-300">
        <h2 className="pl-5 font-poppins font-semibold text-3xl text-purple-700 md:pl-9">wallify</h2>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-20 pr-28">
          <Link to={"/"}><h1
           
            className="text-green-700 text-xl font-poppins font-medium border-b-2 border-transparent hover:border-rose-500 transition-all duration-300"
          >
            Home
          </h1></Link>
         <Link to={'/anime'}><h1
            
            className="text-green-700 text-xl font-poppins font-medium border-b-2 border-transparent hover:border-rose-500 transition-all duration-300"
          >
            Anime
          </h1></Link> 
          <Link to={'/nature'}><h1
            
            className="text-green-700 text-xl font-poppins font-medium border-b-2 border-transparent hover:border-rose-500 transition-all duration-300"
          >
            Nature
          </h1></Link>

        
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white cursor-pointer text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`bg-green-200 pt-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
       <Link to={'/'}><h1  className="block px-4 py-2 text-green-700  border-b-2 border-transparent hover:border-green-700 transition-all duration-300">
          Home
        </h1></Link> 
       <Link to={'/anime'}> <h1  className="block px-4 py-2 text-green-700 border-b-2 border-transparent hover:border-green-700 transition-all duration-300">
          Anime
        </h1></Link>
        <Link to={'/nature'}> <h1  className="block px-4 py-2 text-green-700 border-b-2 border-transparent hover:border-green-700 transition-all duration-300">
          Nature
        </h1></Link>
      
      </div>
    </>
  );
};

export default Navbar;
