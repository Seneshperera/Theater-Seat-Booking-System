import React, { useContext } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SnackCartContext } from '../../context/SnackCartContext';

const MovieSnacks = () => {
  const { cart, addToCart, removeFromCart, getTotalPrice, getItemQuantity } = useContext(SnackCartContext);
  const navigate = useNavigate();

  // List of snacks (you can replace this with API data)
  const snacks = [
    {
      id: 1,
      name: "Popcorn",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Coca Cola",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Nachos",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Candy",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Candy",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Nachos",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Pepsi",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Popcorn",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=200&h=200&fit=crop"
    }
  ];

  const handleAddSnacksToOrder = () => {
    // Navigate to seat booking page or any other logic
    // For example, navigate to home or booking page
    navigate('/'); // Adjust the path as needed
  };

  return (
    <div className="max-w-4xl  mx-auto p-6 pt-32">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Movie Snacks</h2>
      
      {/* Snacks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {snacks.map(snack => (
          <div key={snack.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Snack Image */}
            <img 
              src={snack.image} 
              alt={snack.name}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            
            {/* Snack Name */}
            <h3 className="font-semibold text-lg mb-2">{snack.name}</h3>
            
            {/* Price */}
            <p className="text-yellow-400 font-bold text-xl mb-3">${snack.price}</p>
            
            {/* Add/Remove Buttons */}
            <div className="flex items-center justify-between">
              {getItemQuantity(snack.id) === 0 ? (
                // Show "Add to Cart" button if item not in cart
                <button
                  onClick={() => addToCart(snack)}
                  className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-100 flex items-center gap-2"
                >
                  <Plus size={16} />
                  Add
                </button>
              ) : (
                // Show quantity controls if item is in cart
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeFromCart(snack.id)}
                    className="bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="font-semibold text-lg">{getItemQuantity(snack.id)}</span>
                  
                  <button
                    onClick={() => addToCart(snack)}
                    className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ShoppingCart size={24} />
            Your Snacks Order
          </h3>
          
          {/* Cart Items */}
          <div className="space-y-3 mb-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600">x{item.quantity}</span>
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-yellow-400">${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
          
          {/* Add to Main Order Button */}
          <button 
            onClick={handleAddSnacksToOrder}
            className="w-full bg-yellow-400 text-white py-3 rounded-md font-bold text-lg mt-4 hover:bg-yellow-100"
          >
            Add Snacks to My Order
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSnacks;
