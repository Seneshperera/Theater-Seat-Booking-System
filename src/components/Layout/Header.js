import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to handle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg fixed w-full z-50">
      <header className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-70">
        {/* Logo with link to home */}
        <Link to="/" className="flex items-center space-x-1">
          <span className="text-yellow-400 font-bold text-xl">Cine</span>
          <span className="text-white font-bold text-xl">Max</span>
          <span className="text-white text-xl">.lk</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white text-sm font-normal">
          <Link to="/" className="hover:underline text-white">Home</Link>
          <Link to="/Movies" className="hover:underline text-white">Movies</Link>
          <Link to="/Snack" className="hover:underline text-white">Snack</Link>
          <Link to="/About" className="hover:underline text-white">About</Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 text-white text-sm font-normal">
          <button aria-label="Language" className="flex items-center space-x-1 hover:underline">
            <i className="fas fa-globe"></i>
            <span>EN</span>
          </button>
          <Link to="/Contact" className="hover:underline text-white">Contact Sales</Link>
          <Link to="/login" className="hover:underline text-white">Login</Link>
          <Link to="/signup" className="bg-yellow-400 text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-yellow-500 transition">Sign up free →</Link>
        </div>
        
        
      </header>
    </nav>
  );
};

export default Header;