'use client';
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingMobileCTA() {
  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';
  const defaultMessage = encodeURIComponent('Hello! I would like to book a taxi.');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 lg:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}