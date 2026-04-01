import React from 'react';

const Pricing = () => {
  return (
    <div className="py-24 bg-white font-sans">
      
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-20">
        <h2 className="text-[2.5rem] font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-[#9CA3AF] text-[15px]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
        
        {/* Starter Plan */}
        <div className="bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] rounded-3xl p-10 flex flex-col text-left">
          
          <h3 className="text-[1.3rem] font-bold text-gray-900 mb-1">Starter</h3>
          <p className="text-[#9CA3AF] text-[13px] mb-6">Perfect for getting started</p>
          
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-[3.2rem] font-bold text-gray-900 leading-none">$0</span>
            <span className="text-[#9CA3AF] font-medium text-sm">/Month</span>
          </div>
          
          <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
            {[
              "Access to 10 free tools",
              "Basic templates",
              "Community support",
              "1 project per month"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-500 text-[14px]">
                <svg className="w-[18px] h-[18px] text-[#22C55E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 bg-[#8247FF] hover:bg-purple-700 text-white font-bold text-[14px] rounded-full transition-colors mt-auto">
            Get Started Free
          </button>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="bg-[#8247FF] shadow-[0_10px_40px_-5px_rgba(130,71,255,0.4)] rounded-3xl p-10 transform md:scale-105 relative flex flex-col text-left z-10 border border-[#8247FF]">
          
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-5 py-1.5 rounded-full text-[12px] font-bold tracking-wide whitespace-nowrap shadow-sm">
            Most Popular
          </span>
          
          <h3 className="text-[1.3rem] font-bold text-white mb-1 mt-1">Pro</h3>
          <p className="text-[#E9D5FF] text-[13px] mb-6">Best for professionals</p>
          
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-[3.2rem] font-bold text-white leading-none">$29</span>
            <span className="text-[#E9D5FF] font-medium text-sm">/Month</span>
          </div>
          
          <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
            {[
              "Access to all premium tools",
              "Unlimited templates",
              "Priority support",
              "Unlimited projects",
              "Cloud sync",
              "Advanced analytics"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-white text-[14px]">
                <svg className="w-[18px] h-[18px] text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 bg-white hover:bg-gray-50 text-[#8247FF] font-bold text-[14px] rounded-full transition-colors mt-auto">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] rounded-3xl p-10 flex flex-col text-left">
          
          <h3 className="text-[1.3rem] font-bold text-gray-900 mb-1">Enterprise</h3>
          <p className="text-[#9CA3AF] text-[13px] mb-6">For teams and businesses</p>
          
          <div className="mb-6 flex items-baseline gap-1">
            <span className="text-[3.2rem] font-bold text-gray-900 leading-none">$99</span>
            <span className="text-[#9CA3AF] font-medium text-sm">/Month</span>
          </div>
          
          <ul className="flex flex-col gap-3.5 mb-10 flex-grow">
            {[
              "Everything in Pro",
              "Team collaboration",
              "Custom integrations",
              "Dedicated support",
              "SLA guarantee",
              "Custom branding"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-500 text-[14px]">
                <svg className="w-[18px] h-[18px] text-[#22C55E] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 bg-[#8247FF] hover:bg-purple-700 text-white font-bold text-[14px] rounded-full transition-colors mt-auto">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
