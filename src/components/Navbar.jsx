import React from 'react';

const Navbar = ({ cartCount = 0 }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] transition-all">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="text-2xl font-black text-[#8247FF] cursor-pointer">
          DigiTools
        </div>

        {/* Nav Links (Center) */}
        <ul className="hidden lg:flex gap-8 text-sm font-semibold text-slate-700">
          <li className="hover:text-[#8247FF] cursor-pointer transition-colors">Products</li>
          <li className="hover:text-[#8247FF] cursor-pointer transition-colors">Features</li>
          <li className="hover:text-[#8247FF] cursor-pointer transition-colors">Pricing</li>
          <li className="hover:text-[#8247FF] cursor-pointer transition-colors">Testimonials</li>
          <li className="hover:text-[#8247FF] cursor-pointer transition-colors">FAQ</li>
        </ul>

        {/* Actions (Right) */}
        <div className="flex items-center gap-6">
          
          {/* Cart Icon */}
          <div className="indicator cursor-pointer mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-700 hover:text-[#8247FF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="badge badge-sm indicator-item bg-[#8247FF] border-none text-white font-bold">{cartCount}</span>
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-4 ml-4">
            <span className="text-sm font-semibold text-slate-700 cursor-pointer hover:text-[#8247FF] transition-colors">Login</span>
            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#8247FF] rounded-full hover:bg-purple-700 transition-colors shadow-md">
              Get Started
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
