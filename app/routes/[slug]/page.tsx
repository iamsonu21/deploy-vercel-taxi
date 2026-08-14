'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routesData, RouteInfo } from '@/data/routesData';
import { destinationPlaces } from '@/data/placesData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  Car, 
  ArrowRight,
  Compass,
  Navigation,
  Info
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DynamicRoutePage({ params }: PageProps) {
  const resolvedParams = use(params);
  const route: RouteInfo | undefined = routesData[resolvedParams.slug];

  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!route) {
    notFound();
  }
  const autoImageName = route.to
    .toLowerCase()
    .split('/')[0]
    .trim()
    .replace(/[^a-z0-9]+/g, '-');
    
  const finalImagePath = route.image || `/routes/${autoImageName}.jpg`;
  const autoPlaces = destinationPlaces[route.to] || [];
  // ------------------------------

  const phoneNumber = '+919876543210';
  const whatsappNumber = '919876543210';
  const callHref = `tel:${phoneNumber}`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello! I would like to book a cab from ${route.from} to ${route.to}.`
  )}`;

  // Default Places to Visit in Destination City
  const nearbyPlaces = route.highlights.length > 0 
    ? route.highlights 
    : ['Main Town Center', 'Popular Local Temples', 'Scenic Viewpoints & Ghats', 'Local Market & Food Hubs'];

  // Route FAQs
  const routeFaqs = [
    {
      question: `What is the taxi fare from ${route.from} to ${route.to}?`,
      answer: `Our fixed one-way sedan fare for ${route.from} to ${route.to} starts at ${route.sedanPrice}. Family SUVs start at ${route.suvPrice}, and Innova Crysta starts at ${route.innovaPrice}.`
    },
    {
      question: `How long does it take to travel from ${route.from} to ${route.to}?`,
      answer: `The approximate road distance is ${route.distance}, which takes around ${route.duration} depending on hill traffic and weather conditions.`
    },
    {
      question: `Are toll taxes and driver allowance included?`,
      answer: `Yes, we provide transparent all-inclusive fares. ${route.tollInfo}`
    },
    {
      question: `Can I schedule a night or early morning pickup?`,
      answer: `Absolutely! We operate 24/7 cabs with verified drivers experienced in mountain and night driving.`
    }
  ];

  // Reviews
  const routeReviews = [
    {
      name: 'Pankaj Sharma',
      date: 'Recent Trip',
      rating: 5,
      text: `Booked a cab for ${route.from} to ${route.to}. Driver was on time at 5 AM, car was fresh and spotless, and drove very safely on mountain curves.`
    },
    {
      name: 'Ritu Chaudhry',
      date: 'Family Vacation',
      rating: 5,
      text: `Clean Ertiga provided for our family trip from ${route.from} to ${route.to}. Exact price as promised on WhatsApp with no extra hidden charges.`
    },
    {
      name: 'Aman Verma',
      date: 'Weekend Tour',
      rating: 5,
      text: `Polite driver who knew all shortcut routes and sightseeing spots around ${route.to}. Will definitely book again!`
    }
  ];

  // Related City to City Routes
  const relatedRoutes = Object.values(routesData)
    .filter((r) => r.slug !== route.slug)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      
      {/* ====================================================
          1. Hero Section with H1 & Image Box
         ==================================================== */}
      <section className="relative bg-gradient-to-b from-amber-50/50 via-white to-slate-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Verified Driver • 24/7 Available</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {route.from} to {route.to} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Taxi Service
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {route.description}
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm max-w-xl">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase block">Distance</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900">{route.distance}</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase block">Est. Time</span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900">{route.duration}</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase block">Starts From</span>
                <span className="text-sm sm:text-base font-extrabold text-amber-600">{route.sedanPrice}</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={callHref}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Now</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

{/* Right Image Box Frame */}
<div className="lg:col-span-5">
  <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-900">
      
   {/* Automatically uses /routes/SLUG.jpg if no explicit image is provided */}
<Image
  src={finalImagePath}
  alt={`${route.from} to ${route.to} Taxi`}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
  priority
/>

      {/* Dark Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10" />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-20 bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-full shadow-md">
        Popular Route
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 text-white space-y-1">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
          <Navigation className="w-3.5 h-3.5" />
          <span>Direct Door-to-Door Pickup</span>
        </div>
        <p className="text-lg font-bold flex items-center gap-2">
          <span>{route.from}</span>
          <ArrowRight className="w-4 h-4 text-amber-400 inline" />
          <span>{route.to}</span>
        </p>
        <p className="text-xs text-slate-300">Clean Commercial Vehicles • Mountain Expert Drivers</p>
      </div>

    </div>
  </div>
</div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-12">
        
        {/* ====================================================
            2. Route Information Section
           ==================================================== */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
            <Info className="w-4 h-4" />
            <span>Trip Details & Inclusions</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-950 mb-4">
            Route Overview for {route.from} to {route.to}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            We provide prompt one-way and roundtrip cabs connecting {route.from} to {route.to}. Whether you need an early morning station pickup, airport transfer, or a scenic mountain highway ride, our commercial cabs are equipped with verified drivers and Fastag for non-stop travel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Verified Hill Drivers</h4>
                <p className="text-xs text-slate-500 mt-0.5">Drivers trained specifically for Uttarakhand mountain roads and steep hairpin bends.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Clean & Sanitized Fleet</h4>
                <p className="text-xs text-slate-500 mt-0.5">Regularly serviced AC vehicles with working seatbelts and spacious luggage boot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================
            3. Taxi Fare / Pricing - Taxi Options / Fleet
           ==================================================== */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Taxi Fare & Fleet Options
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {route.tollInfo} Choose the best cab for your budget and group size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sedan */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Economy Sedan</span>
                <h3 className="text-xl font-extrabold text-slate-950">Maruti Dzire / Etios</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">4 Passengers + 2 Large Bags</p>

                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Air Conditioned & Clean Interiors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Ideal for Small Families & Couples</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Fastag Highway Toll Enabled</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-slate-400 font-medium">One-Way Fare</span>
                  <span className="text-2xl font-black text-slate-950">{route.sedanPrice}</span>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Book Sedan</span>
                </a>
              </div>
            </div>

            {/* SUV */}
            <div className="bg-white border-2 border-amber-500 rounded-3xl p-6 shadow-md relative flex flex-col justify-between">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </span>

              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Family SUV</span>
                <h3 className="text-xl font-extrabold text-slate-950">Ertiga / Carens</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">6 Passengers + 4 Bags</p>

                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Extra Legroom & High Ground Clearance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Best for Hill Station Family Trips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Rear AC Vents for Comfort</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-slate-400 font-medium">One-Way Fare</span>
                  <span className="text-2xl font-black text-slate-950">{route.suvPrice}</span>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 rounded-xl text-xs transition-all shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Book Family SUV</span>
                </a>
              </div>
            </div>

            {/* Innova */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">Premium Luxury</span>
                <h3 className="text-xl font-extrabold text-slate-950">Innova Crysta</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">7 Passengers + Maximum Luxury</p>

                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Captain Seats & Smooth Suspension</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Top Choice for Long Mountain Routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>Ample Storage for Heavy Luggage</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs text-slate-400 font-medium">One-Way Fare</span>
                  <span className="text-2xl font-black text-slate-950">{route.innovaPrice}</span>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Book Innova</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ====================================================
    LOCAL SIGHTSEEING / TOP PLACES SECTION
========================================= */}
<div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 mb-12">
  
  <div className="flex items-center gap-2 text-amber-600 mb-2">
    <MapPin className="w-4 h-4 font-bold" />
    <span className="text-xs font-bold uppercase tracking-wider">Local Sightseeing</span>
  </div>
  
  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
    Top Places to Visit in {route.to}
  </h2>
  
  <p className="text-slate-600 font-medium mb-8">
    Explore these popular attractions around {route.to}. We offer custom full-day taxi packages for local sightseeing.
  </p>

 {/* DYNAMIC PLACES GRID */}
  {autoPlaces.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {autoPlaces.map((place, index) => (
        <div 
          key={index} 
          className="flex items-center gap-3 bg-slate-50 hover:bg-amber-50 p-4 rounded-2xl border border-slate-100 transition-colors group"
        >
          <div className="p-2 bg-white rounded-xl shadow-sm text-amber-500 group-hover:text-amber-600 group-hover:scale-110 transition-all">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="font-bold text-slate-800 group-hover:text-amber-700">
            {place}
          </span>
        </div>
      ))}
    </div>
  ) : (
    // Fallback if the city isn't in your dictionary yet
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
      <p className="text-slate-500 font-medium">
        Popular sightseeing destinations for {route.to} will be updated soon. Contact us for custom tour packages!
      </p>
    </div>
  )}

</div>

        {/* ====================================================
            5. FAQ's Section
           ==================================================== */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-950 mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 max-w-3xl mx-auto">
            {routeFaqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-900 text-sm focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-3 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================
            6. Book Now CTA's Banner
           ==================================================== */}
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-slate-950 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 font-medium mt-1">
              Get an instant fixed fare quote for {route.from} to {route.to} on WhatsApp or Call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={callHref}
              className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 98765 43210</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </section>

        {/* ====================================================
            7. Reviews Section
           ==================================================== */}
        <section>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-extrabold text-slate-950">Customer Reviews</h2>
            <p className="text-xs text-slate-500 mt-1">Real rider experiences for {route.from} to {route.to}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routeReviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">{rev.name}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====================================================
            8. Route Section (City to City Links Grid)
           ==================================================== */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
            <Car className="w-4 h-4" />
            <span>Inter-City Network</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-950 mb-6">
            Other Popular Taxi Routes from {route.from}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedRoutes.map((relRoute) => (
              <Link
                key={relRoute.slug}
                href={`/routes/${relRoute.slug}`}
                className="group p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-400 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
                    {relRoute.from} to {relRoute.to}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {relRoute.distance} • Starts {relRoute.sedanPrice}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}