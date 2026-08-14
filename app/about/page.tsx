import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Map, Clock, HeartHandshake, CheckCircle2, CarFront } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Negi Taxi Service',
  description: 'Learn more about Negi Taxi Service, your trusted partner for airport transfers, sightseeing, and mountain treks in Dehradun and Uttarakhand.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-amber-800 mb-6">
            <CarFront className="w-4 h-4" />
            <span>Serving Uttarakhand with Pride</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-6 leading-tight">
            Your Trusted Travel Partner in <span className="text-amber-500">Dehradun</span>
          </h1>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            At Negi Taxi Service, we believe that the journey should be as beautiful as the destination. Based in the heart of Uttarakhand, we specialize in providing safe, comfortable, and highly reliable transportation across the region.
          </p>
        </div>

        {/* Two-Column Story & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          
          {/* Left: Our Story Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Driven by Reliability & Comfort
            </h2>
            <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
              <p>
                Whether you are arriving at Jolly Grant Airport, exploring local city sights, or embarking on a long outstation mountain trek, our fleet is rigorously maintained to ensure maximum safety and fuel efficiency for every kilometer traveled.
              </p>
              <p>
                We understand that clear communication and punctuality are everything. That is why we offer transparent, fixed per-km rates with absolutely zero hidden fees. From comfortable sedans like the Maruti Dzire to spacious SUVs, our verified local drivers know these mountain roads better than anyone.
              </p>
            </div>

            <ul className="space-y-3 pt-4">
              {[
                'Jolly Grant Airport Transfers',
                'Local Dehradun Sightseeing',
                'Outstation & Mountain Treks',
                '24/7 Instant Dispatch'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-800 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start gap-4">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Verified Drivers</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Experienced locals who prioritize your safety.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start gap-4 sm:translate-y-6">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <Map className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Expert Navigation</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Mastery of challenging mountain and outstation routes.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Always on Time</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">Punctual pickups for stress-free airport transfers.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-start gap-4 sm:translate-y-6">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-xl">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Transparent Rates</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">No hidden fees, just honest per-km pricing.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to start your journey?</h2>
            <p className="text-slate-300 mb-8 font-medium">
              Get an instant fare estimate and book your clean, comfortable cab today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-amber-500/20"
              >
                Contact Us Now
              </Link>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 backdrop-blur-sm"
              >
                View Fleet & Fares
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}