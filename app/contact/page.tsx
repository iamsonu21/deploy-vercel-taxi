import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Negi Taxi Service',
  description: 'Get in touch for reliable local sightseeing, airport transfers, and outstation mountain treks.',
};

export default function ContactPage() {
  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';
  const defaultMessage = encodeURIComponent('Hello! I want to inquire about a taxi booking.');

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Get in <span className="text-amber-500">Touch</span>
          </h1>
          <p className="text-slate-600 text-lg font-medium">
            Whether you need a quick airport transfer or are planning an outstation mountain trek, our team is ready to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* =========================================
              LEFT COLUMN: Contact Information
          ========================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us Directly</h3>
                  <a href={`tel:${phoneNumber}`} className="text-xl font-bold text-slate-900 hover:text-amber-500 transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-slate-500 mt-1 font-medium flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-500" /> 24/7 Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#25D366]/10 text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">WhatsApp Us</h3>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-slate-900 hover:text-[#25D366] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                  <p className="text-sm text-slate-500 mt-1 font-medium">Instant replies for fare quotes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</h3>
                  <a href="mailto:booking@negitaxi.com" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    booking@negitaxi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Office Location</h3>
                  <p className="text-base font-bold text-slate-900">
                    Jolly Grant Airport Area
                  </p>
                  <p className="text-sm text-slate-600 mt-0.5 font-medium">
                    Dehradun, Uttarakhand
                  </p>
                </div>
              </div>

            </div>

            {/* Trust Badge */}
            <div className="bg-amber-500 text-slate-950 rounded-2xl p-6 flex items-center gap-4 shadow-lg shadow-amber-500/20">
               <ShieldCheck className="w-10 h-10 shrink-0" />
               <div>
                 <h4 className="font-extrabold text-lg">Verified & Trusted</h4>
                 <p className="text-sm font-semibold opacity-90">100% clean cabs and professional local drivers.</p>
               </div>
            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: Contact Form
          ========================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50">
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              <form className="space-y-5" action="#">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Subject / Trip Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium">
                    <option value="airport">Airport Transfer Booking</option>
                    <option value="outstation">Outstation / Mountain Trek Booking</option>
                    <option value="local">Local City Sightseeing</option>
                    <option value="other">General Inquiry / Other</option>
                  </select>
                </div>

                {/* Message Box */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your trip details, travel dates, or any special requests..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-4 rounded-xl text-base transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}