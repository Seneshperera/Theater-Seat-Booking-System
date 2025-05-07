import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to handle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-xl border-b border-white/20 py-2 px-4 shadow-lg fixed w-full z-50">
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
          <Link to="/about" className="hover:underline text-white">About</Link>
          <Link to="/Home" className="hover:underline text-white">Movies</Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 text-white text-sm font-normal">
          <button aria-label="Language" className="flex items-center space-x-1 hover:underline">
            <i className="fas fa-globe"></i>
            <span>EN</span>
          </button>
          <Link to="/contact" className="hover:underline text-white">Contact Sales</Link>
          <Link to="/login" className="hover:underline text-white">Login</Link>
          <Link to="/signup" className="bg-yellow-400 text-black rounded-full px-5 py-2 text-sm font-semibold hover:bg-yellow-500 transition">Sign up free →</Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4">
          <nav className="flex flex-col space-y-4 text-white">
            <Link to="/" className="hover:underline text-white py-2">Home</Link>
            <Link to="/about" className="hover:underline text-white py-2">About</Link>
            <Link to="/Home" className="hover:underline text-white py-2">Movies</Link>
            <Link to="/contact" className="hover:underline text-white py-2">Contact Sales</Link>
            <Link to="/login" className="hover:underline text-white py-2">Login</Link>
            <Link to="/signup" className="bg-yellow-400 text-black rounded-full px-5 py-2 text-sm font-semibold text-center">Sign up free →</Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Header;