import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { movies } from '../data/MovieData.js';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="text-6xl font-bold mb-8 text-center mt-10">
          <TypeAnimation
            sequence={[
              'Now Showing',
              1000,
              'Latest Releases',
              1000,
              'Featured Films',
              1000,
              'Popular Movies',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
            className="text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map(movie => (
            <div key={movie.id} className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1 text-white">{movie.title}</h2>
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{movie.duration}</span>
                  <span>{movie.genre}</span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-2">{movie.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-400">${movie.price.toFixed(2)}</span>
                  <Link 
                    to={`/booking/${movie.id}`} 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;