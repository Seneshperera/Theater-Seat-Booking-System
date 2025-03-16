import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-xl border-b border-white/20 py-2 px-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold flex items-center gap-2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Movie Theater</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="relative px-3 py-1.5 text-black text-sm rounded-xl hover:bg-white/15 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
          </Link>
          
          <Link 
            to="/login" 
            className="relative px-4 py-1.5 text-black text-sm rounded-xl border border-white/30 hover:bg-white/15 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Login</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
          </Link>
          
          <Link 
            to="/register" 
            className="relative px-4 py-1.5 text-white text-sm rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;