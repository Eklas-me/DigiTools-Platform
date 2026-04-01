import React from 'react';

const Pricing = () => {
  const features = ["500+ UI Components", "Lifetime Updates", "Community Support", "Commercial License", "1-on-1 Expert Help"];

  return (
    <div className="py-24 bg-[#F8F9FB]">
      <div className="text-center max-w-2xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 text-base">
          Choose the plan that best fits your workflow. No hidden fees or surprises.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Starter Plan */}
        <div className="bg-white border text-left border-gray-100 shadow-sm rounded-[2rem] p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p className="text-gray-500 text-sm mb-8">Perfect for individuals starting out.</p>
          <div className="mb-10 flex items-baseline gap-1">
            <span className="text-[3rem] font-extrabold text-gray-900 leading-none">$19</span>
            <span className="text-gray-400 font-medium">/Month</span>
          </div>
          <ul className="flex flex-col gap-4 mb-10">
            {features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600 font-medium text-[15px]">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 mt-auto bg-gray-50 text-gray-900 hover:bg-[#8247FF] hover:text-white font-bold rounded-full transition-all duration-300">
            Get Starter
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#8247FF] shadow-[0_10px_40px_-10px_rgba(130,71,255,0.5)] rounded-[2.5rem] p-12 transform md:-translate-y-4 relative">
          <span className="absolute top-8 right-8 bg-[#FFF7ED] text-[#EA580C] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm">
            Most Popular
          </span>
          <h3 className="text-3xl font-bold text-white mb-2">Professional</h3>
          <p className="text-white/80 text-sm mb-8">For serious creators and teams.</p>
          <div className="mb-10 flex items-baseline gap-1">
            <span className="text-[3.5rem] font-extrabold text-white leading-none">$49</span>
            <span className="text-white/70 font-medium">/Month</span>
          </div>
          <ul className="flex flex-col gap-4 mb-10">
            {features.slice(0, 4).map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-medium text-[15px]">
                <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 mt-auto bg-white hover:bg-gray-50 text-[#8247FF] font-black text-[15px] rounded-full transition-colors shadow-lg shadow-black/10">
            Get Professional
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white border text-left border-gray-100 shadow-sm rounded-[2rem] p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
          <p className="text-gray-500 text-sm mb-8">For large-scale organizations.</p>
          <div className="mb-10 flex items-baseline gap-1">
            <span className="text-[3rem] font-extrabold text-gray-900 leading-none">$99</span>
            <span className="text-gray-400 font-medium">/Month</span>
          </div>
          <ul className="flex flex-col gap-4 mb-10">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-600 font-medium text-[15px]">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 mt-auto bg-gray-50 text-gray-900 hover:bg-[#8247FF] hover:text-white font-bold rounded-full transition-all duration-300">
            Get Enterprise
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
