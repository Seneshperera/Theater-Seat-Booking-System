import React from 'react';
import { FaFilm, FaTicketAlt, FaStar, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="pt-32 min-h-screen bg-gradient-to-br from-yellow-400 via-black to-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">About Our Cinema</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8 mb-12">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Our Story</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Founded in 2010, our cinema has been the premier destination for movie lovers in the community. 
            What started as a single-screen theater has now grown into a state-of-the-art multiplex with 
            the latest projection technology and immersive sound systems.
          </p>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            We're passionate about bringing people together through the magic of cinema. Our carefully curated 
            selection includes blockbuster hits, indie gems, and classic films - ensuring there's something 
            for every taste.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Beyond just movies, we've created a space where film enthusiasts can gather, discuss, and celebrate 
            the art of storytelling through motion pictures.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 text-center">
            <FaFilm className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">10+ Screens</h3>
            <p className="text-gray-400">State-of-the-art digital projection</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 text-center">
            <FaTicketAlt className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">50,000+ Tickets</h3>
            <p className="text-gray-400">Sold every month to happy customers</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 text-center">
            <FaStar className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Premium Experience</h3>
            <p className="text-gray-400">Luxury seating and Dolby Atmos sound</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 text-center">
            <FaHeart className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community Focused</h3>
            <p className="text-gray-400">Supporting local filmmakers and events</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden border-2 border-yellow-400">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Sarah Johnson</h3>
              <p className="text-yellow-400 mb-2">Founder & CEO</p>
              <p className="text-gray-400">Film enthusiast with 20+ years in the industry</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden border-2 border-yellow-400">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Michael Chen</h3>
              <p className="text-yellow-400 mb-2">Operations Manager</p>
              <p className="text-gray-400">Ensuring your cinema experience is flawless</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden border-2 border-yellow-400">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white">Emma Rodriguez</h3>
              <p className="text-yellow-400 mb-2">Head of Programming</p>
              <p className="text-gray-400">Curating the perfect selection of films</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;