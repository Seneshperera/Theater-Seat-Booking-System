import React from 'react';
import { Link } from 'react-router-dom';
import wolfman from '../../assets/wolfman.png';
import karatekid from '../../assets/karatekid.jpg';
import avatar from '../../assets/avatar.jpg';
import jaguar from '../../assets/jaguar.jpg';
import deva from '../../assets/deva.png';
import companion from '../../assets/companion.jpg';

const Movies = () => {
  const ongoingMovies = [
    {
      id: 1,
      title: "Wolfman",
      image: wolfman, // Use the imported image variable
      duration: "2h 15m",
      genre: "Action/Adventure",
      price: 12.99,
    },
    {
      id: 2,
      title: "The Karete Kid",
      image: karatekid,
      duration: "1h 54m",
      genre: "Romance/Drama",
      price: 10.50,
    },
    {
      id: 3,
      title: "Avatar",
      image: avatar,
      duration: "2h 32m",
      genre: "Sci-Fi/Action",
      price: 14.99,
    },
    {
      id: 4,
      title: "Jaguar",
      image: jaguar,
      duration: "1h 48m",
      genre: "Thriller/Mystery",
      price: 11.25,
    },
    {
      id: 5,
      title: "Deva",
      image: deva,
      duration: "1h 42m",
      genre: "Comedy",
      price: 9.99,
    },
    {
      id: 6,
      title: "Companion 2025",
      image: companion,
      duration: "2h 05m",
      genre: "Horror",
      price: 12.50,
    }
  ];

  return (
    <div className=" pt-32 min-h-screen bg-gradient-to-br from-yellow-400 via-black to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-white">
          Ongoing Movies
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingMovies.map(movie => (
            <div 
              key={movie.id} 
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">{movie.title}</h2>
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span>{movie.duration}</span>
                  <span>{movie.genre}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-blue-400">${movie.price.toFixed(2)}</span>
                  <Link 
                    to={`/booking/${movie.id}`}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-lg hover:from-yellow-400 hover:to-gray-600 transition-all duration-300"
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

export default Movies;