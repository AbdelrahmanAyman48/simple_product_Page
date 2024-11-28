import React from 'react';
import { addToCart } from '../stores/cart';
import { useDispatch } from 'react-redux';
const QuickViewModal = ({ productDetails, isOpen, onClose, addCart }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null; // Don't render if modal is closed

  const { id, name, price, description, image } = productDetails;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center  bg-gradient-to-t from-black via-transparent to-black bg-opacity-70l">
      {/* Modal content */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Image Section */}
        <div className="sm:w-1/3 w-full flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Content Section */}
        <div className="sm:w-2/3 w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {description}
          </p>
          <p className="text-lg font-bold text-green-600 mb-4">${price}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
