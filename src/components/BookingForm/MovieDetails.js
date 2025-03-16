import SeatGrid from '../BookingForm/SeatGrid';

const MovieDetails = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={movie.image} 
            alt={movie.title} 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex gap-4 text-sm text-gray-500 mb-3">
            <span>{movie.duration}</span>
            <span>{movie.genre}</span>
            <span>{movie.rating}</span>
          </div>
          <p className="text-gray-600 mb-4">{movie.description}</p>
          <p className="text-lg font-semibold">Ticket Price: ${movie.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;