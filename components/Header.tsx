'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { routesData } from '../data/routesData'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDestOpen, setIsMobileDestOpen] = useState(false);
  
  const phoneNumber = '+919876543210';
  // Convert our routesData object into an array so we can map over it
  const routes = Object.values(routesData);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with your actual logo image path if you have one */}
          <div className="font-extrabold text-2xl tracking-tight text-slate-900">
            Negi<span className="text-amber-500">Taxi</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <Link href="/fleet" className="hover:text-amber-500 transition-colors">Fleet</Link>
          
          {/* Desktop Destinations Dropdown (Hover) */}
          <div className="relative group py-8">
            <button className="flex items-center gap-1 hover:text-amber-500 transition-colors">
              Destinations <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden transform origin-top group-hover:scale-100 scale-95">
              <div className="py-2 max-h-96 overflow-y-auto">
                {routes.map((route) => (
                  <Link
                    key={route.slug}
                    href={`/routes/${route.slug}`}
                    className="block px-5 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 font-semibold border-b border-slate-50 last:border-0"
                  >
                    {route.from} to {route.to}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
        </nav>

        {/* Desktop Call Button */}
        <div className="hidden md:block">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-xl text-sm font-extrabold transition-all active:scale-95 shadow-md shadow-amber-500/20"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call Us</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <nav className="flex flex-col p-4 text-base font-bold text-slate-700 space-y-2">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-slate-50 rounded-xl"
            >
              Home
            </Link>
            <Link 
              href="/fleet" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-slate-50 rounded-xl"
            >
              Fleet
            </Link>
            
            {/* Mobile Destinations Accordion */}
            <div className="bg-slate-50 rounded-xl overflow-hidden">
              <button 
                onClick={() => setIsMobileDestOpen(!isMobileDestOpen)}
                className="w-full flex items-center justify-between px-4 py-3"
              >
                <span>Destinations</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileDestOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileDestOpen && (
                <div className="flex flex-col px-4 pb-3 space-y-1">
                  {routes.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/routes/${route.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-amber-600 rounded-lg"
                    >
                      • {route.from} to {route.to}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-slate-50 rounded-xl"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 bg-slate-50 rounded-xl"
            >
              Contact
            </Link>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 px-4 py-3.5 rounded-xl text-base font-extrabold mt-4"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              <span>{phoneNumber}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}