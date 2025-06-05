import React, { useState } from 'react';
import frameImage from '../assets/bg1.png';
import ReactPlayer from 'react-player';

console.log('Image path:', frameImage);

const Hero = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="relative min-h-screen bg-black pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={frameImage} 
          alt="Movie wall with characters from a film, slightly darkened"
          className="w-full h-full object-cover brightness-50"
          loading="lazy"
        />
      </div>

      <main className="px-6 pt-12 max-w-7xl mx-auto">
        <section className="max-w-4xl text-white">
          <h1 className="text-6xl leading-tight mb-2 font-bold" style={{ fontFamily: "'Baloo 2', cursive" }}>
            වාලම්පුරි
          </h1>
          <h2 className="text-3xl mb-6" style={{ fontFamily: "'Baloo 2', cursive" }}>
            හෙටත් හිත හතවාරක්
          </h2>
          <div className="flex items-center space-x-2 mb-4 text-xs font-normal text-gray-300">
            <span className="bg-yellow-400 text-black font-bold px-1.5 rounded text-xs flex items-center">IMDb</span>
            <span>8.2 (12,827)</span>
            <span>•</span>
            <span>2021</span>
            <span>•</span>
            <span>1 hour 55 minutes</span>
            <span>•</span>
            <span>Sci-fi</span>
          </div>
          <p className="text-gray-300 text-sm max-w-xl mb-6 leading-relaxed">
            Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu felis. Id ultricies diam turpis mi tincidunt. Ut morbi sed urna tempor imperdiet eu scelerisque egestas. Interdum mi orci suspendisse in s...
            <span className="text-yellow-400 cursor-pointer"> See more</span>
          </p>
          <div className="flex space-x-4 mb-12">
            <button 
              onClick={() => setShowTrailer(true)}
              className="flex items-center border border-gray-500 text-gray-300 text-sm rounded px-4 py-2 hover:border-white hover:text-white transition"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.8L14.8 10l-8.5 7.2c-.6.5-1.5.4-2-.2s-.4-1.5.2-2L11 10 4.5 5c-.6-.5-.7-1.4-.2-2s1.4-.7 2-.2z"/>
              </svg>
              Watch trailer
            </button>
            <button className="bg-yellow-400 text-black text-sm rounded px-4 py-2 font-semibold hover:bg-yellow-500 transition">
              ▶ Book Ticket
            </button>
          </div>
        </section>

        {/* Trailer Modal */}
        {showTrailer && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={() => setShowTrailer(false)}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-yellow-400"
              >
                ✕
              </button>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=bOz69Hgk8RY" 
                width="100%"
                height="100%"
                controls={true}
                playing={true} 
              />
            </div>
          </div>
        )}

        <section className="flex space-x-4 overflow-x-auto pb-6 -mx-6 px-6">
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <img
              key={index}
              src={`/api/placeholder/120/180?text=Movie${index}`}
              alt={`Movie poster ${index}`}
              className="w-28 rounded-lg flex-shrink-0"
              loading="lazy"
              width={120}
              height={180}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Hero;