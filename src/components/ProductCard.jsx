import React, { useState } from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const getBadgeStyle = (tagType) => {
    const type = tagType?.toLowerCase() || '';
    if (type.includes('best seller')) {
      return 'bg-amber-100 text-amber-600';
    } else if (type.includes('new')) {
      return 'bg-emerald-100 text-emerald-500';
    } else if (type.includes('popular')) {
      return 'bg-indigo-100 text-indigo-500';
    } else {
      return 'bg-gray-100 text-gray-500';
    }
  };

  const handleClick = () => {
    handleAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col hover:shadow-lg transition-shadow">
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center p-3">
          <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
        </div>
        
        {product.tag && (
          <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${getBadgeStyle(product.tagType)}`}>
            {product.tag}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
      <p className="text-gray-500 text-[13px] leading-relaxed mb-6 h-[60px]">{product.description}</p>

      <div className="mb-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-xs font-medium">/{product.period}</span>
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {product.features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-2.5 text-gray-500 text-[13px] font-medium">
            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button 
        onClick={handleClick}
        className={`w-full py-3.5 text-white font-semibold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2
          ${isAdded 
            ? 'bg-emerald-500 hover:bg-emerald-600' 
            : 'bg-[#8247FF] hover:bg-purple-700'
          }`}
      >
        {isAdded ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Added to Cart!
          </>
        ) : (
          'Buy Now'
        )}
      </button>
      
    </div>
  );
};

export default ProductCard;
