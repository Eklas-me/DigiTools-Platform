import React from 'react';

const Stats = () => {
  return (
    <div className="bg-[#7A33FF] w-full mt-4">
      <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row justify-around items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20">
        
        <div className="flex flex-col items-center w-full py-8 md:py-0">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">50K+</h2>
          <p className="text-white/90 text-lg font-medium">Active Users</p>
        </div>

        <div className="flex flex-col items-center w-full py-8 md:py-0">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">200+</h2>
          <p className="text-white/90 text-lg font-medium">Premium Tools</p>
        </div>

        <div className="flex flex-col items-center w-full py-8 md:py-0">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">4.9</h2>
          <p className="text-white/90 text-lg font-medium">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
