
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xl">t</span>
          </div>
          <span className="font-bold text-xl tracking-tight">time2book.me</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-black transition-colors flex items-center gap-1">
            Product <span className="text-[10px]">▼</span>
          </a>
          <a href="#" className="hover:text-black transition-colors flex items-center gap-1">
            Business types <span className="text-[10px]">▼</span>
          </a>
          <a href="#" className="hover:text-black transition-colors">Pricing</a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium flex items-center gap-1">
            EN <span className="text-[10px]">▼</span>
          </button>
          <button className="text-sm font-medium px-4 py-2">Sign in</button>
          <button className="text-sm font-medium bg-black text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
            Sign up →
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-6 border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 text-lg font-medium">
            <a href="#">Product</a>
            <a href="#">Business types</a>
            <a href="#">Pricing</a>
            <div className="h-px bg-slate-100 my-2" />
            <button className="text-left py-2">Sign in</button>
            <button className="bg-black text-white px-6 py-3 rounded-full text-center">Sign up →</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
