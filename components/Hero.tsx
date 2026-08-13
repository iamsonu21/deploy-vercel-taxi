'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, ShieldCheck, Clock, MapPin, Car, Sparkles, Navigation, ArrowRight, User } from 'lucide-react';

export default function Hero() {
  const [tripType, setTripType] = useState('outstation');
  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';
  const defaultMessage = encodeURIComponent('Hello! I would like to book a taxi.');

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
      
      {/* Base Website Background (Dots & Soft Glows) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-slate-100/50 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* =========================================
            LEFT COLUMN: Image Box & Features
        ========================================= */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* THE HIGHLIGHTED IMAGE BOX */}
          <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 shadow-xl border border-slate-200 bg-white">
            
            {/* Box Background Image */}
            <Image
              src="/haridwar-taxi-service.png"
              alt="Haridwar Taxi Service"
              fill
              className="object-cover object-right"
              priority
            />
            {/* White Fade Overlay: Keeps text highly readable on the left, shows car on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/10" />

            {/* Box Content */}
            <div className="relative z-10 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-amber-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-900 shadow-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Instant Dispatch • 24/7 Service</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
                24/7 Haridwar <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Taxi Service
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-800 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Clean cabs, experienced drivers, transparent per-km rates, and no hidden fees. Local city travel, airport transfers, or outstation tours.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl text-base shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#25D366]/30 transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Feature Highlights (Sitting below the Image Box) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-slate-700 text-[11px] sm:text-sm font-bold pt-2">
            <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/60 p-2 rounded-xl border border-slate-200">
              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Verified Drivers</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/60 p-2 rounded-xl border border-slate-200">
              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <span>Clean Cabs</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/60 p-2 rounded-xl border border-slate-200">
              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Fixed Fare Quote</span>
            </div>
          </div>

        </div>

        {/* =========================================
            RIGHT COLUMN: Booking Form
        ========================================= */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xl shadow-slate-200/60">
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Quick Fare Estimate</h2>
                <p className="text-xs text-slate-500 mt-0.5">Get instant availability & quotes</p>
              </div>
              <div className="p-2 rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Pill Tabs */}
            <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1.5 rounded-xl mb-6 border border-slate-200">
              {['outstation', 'local', 'airport'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTripType(type)}
                  className={`py-2 text-xs font-semibold rounded-lg capitalize transition-all ${
                    tripType === type
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-extrabold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-600" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp Field */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Phone / WhatsApp No.
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-600" />
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Pickup Location
                </label>
                <div className="relative">
                  <Navigation className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-600" />
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Drop Destination */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Drop Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-600" />
                  <input
                    type="text"
                    placeholder="Enter destination"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Vehicle Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Vehicle Type
                </label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium">
                  <option value="dzire">Maruti Dzire / Etios (Sedan - 4 Seater)</option>
                  <option value="ertiga">Ertiga / Carens (6 Seater)</option>
                  <option value="innova">Innova Crysta (Premium 7 Seater)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Check Fare & Availability</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}