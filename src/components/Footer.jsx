import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Top CTA Banner */}
      <div className="bg-[#8247FF] py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-8">Ready to supercharge your workflow?</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="px-10 py-4 bg-white text-[#8247FF] font-bold rounded-full hover:bg-gray-100 transition shadow-lg shadow-black/10">
            Explore Products
          </button>
          <button className="px-10 py-4 bg-transparent border-[2.5px] border-white text-white font-bold rounded-full hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#0B0F19] pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h3 className="text-3xl font-black text-white mb-6">DigiTools</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-sm">
              The ultimate marketplace for premium digital assets, templates, and UI kits. Build faster and better with our hand-crafted tools designed to elevate your creative projects.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 hover:bg-[#8247FF] transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer text-white">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 bg-white/5 hover:bg-[#8247FF] transition-all duration-300 rounded-full flex items-center justify-center cursor-pointer text-white">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>

          {/* Links Cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">UI Kits & Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Notion Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Design Assets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Web Plugins</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Contact Support</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Community Forum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#8247FF] transition-colors text-[15px]">Affiliate Program</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-[#1C2333] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[14px]">© 2026 DigiTools. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-[14px] transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
