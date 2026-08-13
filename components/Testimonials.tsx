import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Rahul M.',
    route: 'Dehradun to Mussoorie',
    text: 'Booked a Dzire for a weekend trip. The car was spotless, reached my hotel on time, and the driver drove very safely on the curves. Solid service.'
  },
  {
    name: 'Anjali S.',
    route: 'Airport Drop',
    text: 'Had an early morning flight. The cab arrived 10 minutes before the scheduled time. Completely hassle-free booking over WhatsApp.'
  },
  {
    name: 'Vikram P.',
    route: 'Chandrashila Trek Drop',
    text: 'Fares were exactly as quoted, no haggling at the end of the trip. Driver was polite and knew the mountain routes well. Highly recommended.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight mb-3">
            Customer Reviews
          </h2>
          <p className="text-slate-600 font-medium">Real feedback from recent rides.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div>
                <p className="text-sm font-bold text-slate-950">{review.name}</p>
                <p className="text-xs font-medium text-slate-500 mt-0.5">Route: {review.route}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}