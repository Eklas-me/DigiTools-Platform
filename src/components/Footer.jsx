import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-[#6C35F9] to-[#A63EF8] py-28 px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-[2.75rem] font-bold text-white mb-4">Ready To Transform Your Workflow?</h2>
        
        <p className="text-white/90 text-lg leading-relaxed mb-10 max-w-2xl">
          Join thousands of professionals who are already using Digitools to work smarter.<br/>
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="px-8 py-3.5 bg-white text-[#8247FF] font-semibold text-[15px] rounded-full hover:bg-gray-50 transition shadow-sm w-full sm:w-auto">
            Explore Products
          </button>
          <button className="px-8 py-3.5 bg-transparent border border-white text-white font-semibold text-[15px] rounded-full hover:bg-white/10 transition w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="text-white/70 text-sm font-medium tracking-wide">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0B0F19] pt-20 pb-10 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 mb-16 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
            <h3 className="text-[2rem] font-bold text-white mb-5 tracking-wide">DigiTools</h3>
            <p className="text-[#9CA3AF] text-[15px] leading-[1.6]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Col */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-[16px] font-medium mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Features</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Pricing</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Templates</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Integrations</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-[16px] font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">About</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Blog</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Careers</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Press</a></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-[16px] font-medium mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Documentation</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Help Center</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Community</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-[#8247FF] transition-colors text-[14px]">Contact</a></li>
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white text-[16px] font-medium mb-6">Social Links</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <div className="w-10 h-10 bg-white hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center cursor-pointer text-[#0B0F19]">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              {/* Facebook */}
              <div className="w-10 h-10 bg-white hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center cursor-pointer text-[#0B0F19]">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </div>
              {/* X / Twitter */}
              <div className="w-10 h-10 bg-white hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center cursor-pointer text-[#0B0F19]">
                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[14px]">© 2026 Digitools. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
