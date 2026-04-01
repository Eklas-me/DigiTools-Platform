import React from 'react';

const Steps = () => {
  const stepData = [
    {
      num: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#8247FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#8247FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#8247FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5L21 3m-7.5 7.5L3 21m10.5-10.5l-4.5 4.5m4.5-4.5l4.5-4.5m-15 15h3.75l10.5-10.5L15.75 6.75 5.25 17.25V21H9z" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-24 bg-[#F8F9FA]">
      <div className="text-center max-w-2xl mx-auto px-4 mb-14">
        <h2 className="text-[2.5rem] font-bold text-[#111827] mb-3">Get Started In 3 Steps</h2>
        <p className="text-[#9CA3AF] text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stepData.map((step, index) => (
          <div key={index} className="bg-white border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-[1.5rem] p-10 relative flex flex-col items-center text-center">
            
            <span className="absolute top-6 right-6 bg-[#8247FF] text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold shadow-sm">
              {step.num}
            </span>
            
            <div className="w-20 h-20 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
              {step.icon}
            </div>
            
            <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
            <p className="text-[#9CA3AF] text-[13px] leading-relaxed max-w-[250px]">{step.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
