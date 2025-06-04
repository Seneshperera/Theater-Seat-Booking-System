import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset } from 'react-icons/fa';

const ContactSales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-black to-gray-900 py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Sales</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Have questions about group bookings, private screenings, or special events? 
            Our sales team is ready to help you create the perfect cinema experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-gray-300 mb-2">Inquiry Type</label>
                <select 
                  id="inquiry" 
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select an option</option>
                  <option value="group">Group Bookings</option>
                  <option value="private">Private Screenings</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-gray-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Sales Team Info */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Sales Team</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border border-yellow-400">
                      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Sales Representative" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Jessica Williams</h3>
                    <p className="text-gray-400">Corporate Events Manager</p>
                    <div className="flex items-center mt-1 text-yellow-400">
                      <FaPhone className="mr-2" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden border border-yellow-400">
                      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Sales Representative" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">David Kim</h3>
                    <p className="text-gray-400">Group Sales Coordinator</p>
                    <div className="flex items-center mt-1 text-yellow-400">
                      <FaPhone className="mr-2" />
                      <span>+1 (555) 987-6543</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 p-6">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaHeadset className="text-yellow-400 text-xl mr-4" />
                  <div>
                    <h3 className="text-white font-medium">General Sales Inquiries</h3>
                    <p className="text-gray-400">sales@cineplexexample.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-yellow-400 text-xl mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Sales Office Hours</h3>
                    <p className="text-gray-400">Monday-Friday: 9am-7pm</p>
                    <p className="text-gray-400">Saturday: 10am-5pm</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-yellow-400 text-xl mr-4" />
                  <div>
                    <h3 className="text-white font-medium">Visit Our Office</h3>
                    <p className="text-gray-400">123 Cinema Avenue</p>
                    <p className="text-gray-400">Entertainment District, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-red-500/50 p-6">
              <h2 className="text-xl font-semibold text-red-400 mb-2">For Urgent Matters</h2>
              <p className="text-gray-300 mb-4">For last-minute bookings or event emergencies outside office hours:</p>
              <div className="flex items-center">
                <FaPhone className="text-red-400 text-xl mr-3" />
                <span className="text-white font-bold">+1 (555) 789-0123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;