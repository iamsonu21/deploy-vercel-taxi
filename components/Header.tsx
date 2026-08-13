'use client';

import React from 'react';
import Image from 'next/image'; // <-- 1. Import Next.js Image
import { Phone, Menu } from 'lucide-react'; // Removed 'Car'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo Section */}
        <div className="flex items-center gap-2">
          {/* 2. Add your custom image here */}
          <Image 
            src="/haridwar-taxi-logo.png" 
            alt="Negi Taxi Logo" 
            width={70} 
            height={70} 
            className="w-auto h-8 sm:h-10 object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Fleet</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Destinations</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
        </nav>

        {/* Call CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+919876543210" 
            className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-extrabold transition-all active:scale-95 shadow-sm"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call Us</span>
          </a>
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
}