import React from 'react';

const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="flex items-center justify-between px-6 py-5 bg-[#F8F9FB] rounded-[1rem]">
      
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
          <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
        </div>
        
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[17px] font-bold text-gray-900 leading-none">{item.name}</h3>
          <p className="text-gray-400 font-medium text-sm">${Math.round(item.price)}</p>
        </div>
      </div>

      <button 
        onClick={() => handleRemoveFromCart(item.id)}
        className="text-[#FF4A6B] hover:text-red-600 font-medium text-[14px] transition-colors pr-2"
      >
        Remove
      </button>

    </div>
  );
};

export default CartItem;
