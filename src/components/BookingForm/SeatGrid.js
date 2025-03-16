import React, { useState } from 'react';

const SeatGrid = ({ rows = 6, cols = 10, bookedSeats = [], onSeatSelection }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Check if a seat is already booked
  const isSeatBooked = (row, col) => {
    return bookedSeats.some(seat => seat.row === row && seat.col === col);
  };

  // Check if a seat is selected
  const isSeatSelected = (row, col) => {
    return selectedSeats.some(seat => seat.row === row && seat.col === col);
  };

  // Handle seat click
  const toggleSeat = (row, col) => {
    if (isSeatBooked(row, col)) return; // Can't select booked seats

    const seatIndex = selectedSeats.findIndex(seat => seat.row === row && seat.col === col);
    
    let newSelectedSeats;
    if (seatIndex > -1) {
      // Deselect the seat
      newSelectedSeats = [...selectedSeats];
      newSelectedSeats.splice(seatIndex, 1);
    } else {
      // Select the seat
      newSelectedSeats = [...selectedSeats, { row, col }];
    }

    setSelectedSeats(newSelectedSeats);
    
    // Notify parent component about selection change
    if (onSeatSelection) {
      onSeatSelection(newSelectedSeats);
    }
  };

  // Choose seat color based on status
  const getSeatColor = (row, col) => {
    if (isSeatBooked(row, col)) return 'bg-gray-400 cursor-not-allowed'; // Booked
    if (isSeatSelected(row, col)) return 'bg-green-500 hover:bg-green-600'; // Selected
    return 'bg-blue-400 hover:bg-blue-500'; // Available
  };

  return (
    <div className="mb-8">
      <div className="w-full bg-gray-800 text-white text-center p-4 mb-8 rounded">SCREEN</div>
      
      <div className="grid grid-cols-10 gap-2 max-w-3xl mx-auto">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          // For each row
          Array.from({ length: cols }).map((_, colIndex) => (
            // For each column/seat
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`${getSeatColor(rowIndex, colIndex)} w-10 h-10 rounded-md flex items-center justify-center text-white font-bold`}
              onClick={() => toggleSeat(rowIndex, colIndex)}
              disabled={isSeatBooked(rowIndex, colIndex)}
            >
              {`${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`}
            </button>
          ))
        ))}
      </div>

      <div className="mt-6 flex justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-400 rounded mr-2"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatGrid;