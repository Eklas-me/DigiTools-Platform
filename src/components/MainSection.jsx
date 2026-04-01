import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartItem from './CartItem';

const MainSection = ({ products, cart, handleAddToCart, handleRemoveFromCart, handleCheckout }) => {
  const [activeTab, setActiveTab] = useState('products');
  const cartCount = cart.length;

  return (
    <div className="py-16 bg-white">
      
      {/* Header text */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500 text-base">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-2 p-1.5 border border-gray-100 rounded-full shadow-sm bg-white">
          <button 
            onClick={() => setActiveTab('products')}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'products' 
                ? 'bg-[#8247FF] text-white' 
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'cart' 
                ? 'bg-[#8247FF] text-white' 
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6">
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full">
            {cartCount === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500">Go back to the Products tab to add items.</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-10 border border-gray-200">
                
                {/* Cart Header */}
                <h2 className="text-xl font-bold text-gray-900 mb-8 text-left">
                  Your Cart
                </h2>
                
                {/* Cart Items List */}
                <div className="flex flex-col gap-4 mb-12">
                  {cart.map(item => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      handleRemoveFromCart={handleRemoveFromCart} 
                    />
                  ))}
                </div>

                {/* Cart Summary & Checkout */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-8 px-2">
                    <p className="text-sm text-gray-400 font-medium">Total:</p>
                    <p className="text-[22px] font-extrabold text-gray-900">
                      ${Math.round(cart.reduce((total, item) => total + item.price, 0))}
                    </p>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full py-3.5 bg-[#8247FF] hover:bg-purple-700 text-white font-semibold text-[15px] rounded-full transition-colors tracking-wide"
                  >
                    Proceed To Checkout
                  </button>
                </div>

              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};

export default MainSection;
