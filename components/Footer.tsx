import React from 'react';
import { MapPin, Phone, MessageCircle, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-xl tracking-tight mb-4">
            <Car className="w-6 h-6 text-amber-500" />
            <span>Negi Taxi</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Reliable local and outstation taxi fleet based in Dehradun. Fixed fares, well-maintained cars, and verified drivers for safe hill travel.
          </p>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">Contact Details</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 
              <span>Dehradun, Uttarakhand<br/>Available for local & outstation</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" /> 
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-amber-500 shrink-0" /> 
              <span>WhatsApp Available 24/7</span>
            </li>
          </ul>
        </div>

        {/* Quick Routing Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">Popular Routes</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Dehradun to Mussoorie</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Dehradun Airport (DED) Drops</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Tehri & Lansdowne Tours</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Local City Hourly Rentals</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 font-medium">
        &copy; {new Date().getFullYear()} Negi Taxi Service. All rights reserved.
      </div>
    </footer>
  );
}