import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Login successful! Welcome ' + data.username);
        // Redirect or update UI accordingly
        navigate('/');
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto bg-gradient-to-br from-yellow-400 via-black to-gray-900 pt-32">
   
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 pt-20">
      
      <div className="w-full md:w-1/2 max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account? <Link to="/register" className="text-yellow-500 hover:underline">Register here</Link>
          </p>
        </div>
      </div>
      
      <div className="w-full  bg-black md:w-1/2 flex justify-center">
        <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/api/placeholder/500/400" 
            alt="Login illustration" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
