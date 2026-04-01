import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col-reverse lg:flex-row items-center gap-12 bg-white">
      
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <div className="inline-block px-4 py-1.5 text-xs font-semibold text-[#7A33FF] bg-[#7A33FF]/10 rounded-full">
          🟣 New: AI-Powered Tools Available
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.15]">
          Supercharge Your <br className="hidden md:block"/> Digital Workflow
        </h1>
        
        <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
          Discover the ultimate marketplace for premium digital tools, templates, and courses. Elevate your productivity and take your business to the next level today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button className="px-8 py-3.5 text-base font-semibold text-white bg-[#7A33FF] rounded-full hover:bg-purple-700 transition shadow-lg shadow-purple-500/30">
            Explore Products
          </button>
          <button className="px-8 py-3.5 text-base font-semibold text-[#7A33FF] bg-transparent border-2 border-[#7A33FF] rounded-full hover:bg-purple-50 transition flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative w-full flex justify-center lg:justify-end">
        <img 
          src="assets/banner.png" 
          alt="Digital Tools Dashboard Mockup" 
          className="w-full max-w-[550px] rounded-3xl object-cover shadow-2xl shadow-indigo-500/10"
        />
      </div>

    </div>
  );
};

export default Banner;
