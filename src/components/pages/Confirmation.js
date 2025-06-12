import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { booking, movie } = location.state || {};

  if (!booking || !movie) {
    return (
      <div className="container mx-auto py-16 px-4 text-center ">
        <h1 className="text-2xl font-bold mb-4">No booking information found</h1>
        <p className="mb-6">Please start a new booking</p>
        <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Return to Home
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className=" bg-gradient-to-br from-yellow-400 via-black to-gray-900 container mx-auto pt-32 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">Your tickets have been booked successfully</p>
        </div>

        <div className="border-t border-b py-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">{formatDate(booking.date)}</p>
            </div>
            <div>
              <p className="text-gray-500">Time</p>
              <p className="font-medium">{booking.time}</p>
            </div>
            <div>
              <p className="text-gray-500">Seats</p>
              <p className="font-medium">
                {booking.seats.map(seat => 
                  `${String.fromCharCode(65 + seat.row)}${seat.col + 1}`
                ).join(', ')}
              </p>
            </div>
            {booking.snackOrder && booking.snackOrder.length > 0 && (
              <div>
                <p className="text-gray-500">Snacks</p>
                <ul className="font-medium list-disc list-inside">
                  {booking.snackOrder.map(item => (
                    <li key={item.id}>
                      {item.name} x{item.quantity} (${(item.price * item.quantity).toFixed(2)})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="text-gray-500">Total Amount</p>
              <p className="font-bold text-blue-600">${booking.totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-semibold mb-2">Important Information:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Please arrive 15 minutes before the show time</li>
            <li>• Bring an ID for verification</li>
            <li>• No outside food or beverages allowed</li>
            <li>• This confirmation will be sent to your email</li>
          </ul>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
            Print Ticket
          </button>
          <Link to="/" className="bg-yellow-400 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
