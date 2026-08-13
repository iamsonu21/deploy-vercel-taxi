'use client';

import React from 'react';
import { MapPin, Clock, ArrowRight, Compass, MessageCircle } from 'lucide-react';

const destinations = [
  {
    id: 'mussoorie',
    name: 'Mussoorie',
    tagline: 'Queen of Hills Sightseeing & Day Tours',
    distance: '35 km',
    duration: '1.5 Hours',
    startingFare: '₹1,800',
    popularSpots: ['Mall Road', 'Kempty Falls', 'Lal Tibba'],
    badge: 'Popular Route',
  },
  {
    id: 'lansdowne',
    name: 'Lansdowne',
    tagline: 'Peaceful Pine Hills & Military Town Weekend',
    distance: '160 km',
    duration: '4.5 Hours',
    startingFare: '₹3,500',
    popularSpots: ['Tip In Top', 'Bhulla Lake', 'War Memorial'],
    badge: 'Weekend Getaway',
  },
  {
    id: 'tehri',
    name: 'Tehri Jheel',
    tagline: 'Water Sports & Scenic Dam Views',
    distance: '90 km',
    duration: '3 Hours',
    startingFare: '₹2,800',
    popularSpots: ['Tehri Dam', 'Jet Skiing', 'Dobra Chanti Bridge'],
    badge: 'Adventure Special',
  },
  {
    id: 'chandrashila',
    name: 'Chandrashila / Chopta',
    tagline: 'Mini Switzerland & Mountain Trek Base',
    distance: '200 km',
    duration: '6.5 Hours',
    startingFare: '₹5,200',
    popularSpots: ['Tungnath Temple', 'Chopta Meadows', 'Peak View'],
    badge: 'Trekker Choice',
  },
];

export default function PopularDestinations() {
  const whatsappNumber = '919876543210';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Top Outstation & Sightseeing Routes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Popular Destinations & Fixed Rates
          </h2>
          <p className="text-slate-600 text-base">
            Hassle-free hill station cabs, mountain-experienced drivers, and fixed transparent fares with no unexpected toll surcharges.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => {
            const message = encodeURIComponent(`Hello! I want to inquire about a taxi for ${dest.name}.`);
            
            return (
              <div
                key={dest.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-amber-400"
              >
                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {dest.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">One-way / Roundtrip</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                    {dest.tagline}
                  </p>

                  {/* Distance & Time Details */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs mb-4">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{dest.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{dest.duration}</span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Sightseeing Points:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {dest.popularSpots.map((spot, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>{spot}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-slate-500 font-medium">Starting from</span>
                    <span className="text-lg font-extrabold text-slate-950">{dest.startingFare}</span>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-sm active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Inquire for {dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}