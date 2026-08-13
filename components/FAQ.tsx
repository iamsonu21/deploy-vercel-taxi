'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do you calculate outstation fares?',
    answer: 'Outstation trips are billed per kilometer with a minimum running limit of 250 km per day. Tolls, state taxes, and driver allowance are calculated transparently before you book.'
  },
  {
    question: 'Are your cars safe for hill station driving?',
    answer: 'Yes. We maintain a fleet of Maruti Dzires and SUVs fitted with high-grip tires specifically for mountain roads. Our drivers are local experts experienced with hill driving.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No. The quote we provide on WhatsApp or over the phone includes fuel and driver charges. Tolls and parking are charged at actuals during the trip.'
  },
  {
    question: 'Do you provide airport pickup and drops?',
    answer: 'Yes, we provide 24/7 airport transfers. We track flight timings so your driver is waiting for you when you land.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-950 mb-8 text-center tracking-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between font-bold text-slate-900 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-amber-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}