import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SeatGrid from '../BookingForm/SeatGrid';
import MovieDetails from '../BookingForm/MovieDetails';
import { movies } from '../data/MovieData.js';
import { SnackCartContext } from '../../context/SnackCartContext';

const SeatBooking = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { getTotalPrice: getSnackTotalPrice, cart } = useContext(SnackCartContext);
  
  useEffect(() => {
    const foundMovie = movies.find(m => m.id === parseInt(movieId));
    if (foundMovie) {
      setMovie(foundMovie);
    }
  }, [movieId]);

  const bookedSeats = [
    { row: 0, col: 3 },
    { row: 0, col: 4 },
    { row: 2, col: 5 },
    { row: 2, col: 6 },
    { row: 5, col: 7 },
    { row: 5, col: 8 }
  ];

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  // Handle time selection
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Handle seat selection
  const handleSeatSelection = (seats) => {
    setSelectedSeats(seats);
  };

  // Handle booking submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const snackTotal = getSnackTotalPrice();
    const ticketTotal = selectedSeats.length * movie.price;
    const totalPrice = ticketTotal + snackTotal;

    const bookingData = {
      movieId: movie.id,
      movieTitle: movie.title,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      seats: selectedSeats,
      snackOrder: cart,
      totalPrice: totalPrice
    };
    
    console.log('Booking data:', bookingData);
    
    // Navigate to confirmation with booking data
    navigate('/confirmation', { 
      state: { booking: bookingData, movie: movie } 
    });
  };

  if (!movie) {
    return (
      <div className="bg-gradient-to-br from-yellow-400 via-black to-gray-900 container mx-auto py-8 pt-32 text-center">
        <p>Loading movie details...</p>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-br from-yellow-400 via-black to-gray-900 container mx-auto pt-32 px-4 ">
      <MovieDetails movie={movie} />

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Tickets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 mb-2">Select Date</label>
            <input
              type="date"
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Select Time</label>
            <select
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Choose a time</option>
              {movie.showTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        
        {selectedTime ? (
          <>
            <h3 className="text-xl font-semibold mt-8 mb-4">Select Your Seats</h3>
            <SeatGrid 
              rows={6} 
              cols={10} 
              bookedSeats={bookedSeats} 
              onSeatSelection={handleSeatSelection}
            />
            
            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Selected Seats:</span>
                <span className="text-lg font-bold">
                  {selectedSeats.length > 0 
                    ? selectedSeats.map(seat => `${String.fromCharCode(65 + seat.row)}${seat.col + 1}`).join(', ')
                    : 'None'}
                </span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg">Total Price:</span>
                <span className="text-xl font-bold text-yellow-600">
                  ${(selectedSeats.length * movie.price + getSnackTotalPrice()).toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={selectedSeats.length === 0}
                className={`w-full py-3 px-4 rounded-md text-white font-medium 
                  ${selectedSeats.length > 0 
                    ? 'bg-yellow-400 hover:bg-yellow-600' 
                    : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Confirm Booking
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-10 text-gray-500">
            Please select a show time to view available seats
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatBooking;
