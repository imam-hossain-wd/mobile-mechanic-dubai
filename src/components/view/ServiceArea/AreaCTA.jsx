// pages/ServiceArea/sections/AreaCTA.tsx
import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, Clock, Shield, Truck } from 'lucide-react';


export default function AreaCTA({ area }) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {area?.cta?.heading}
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {area?.cta?.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="tel:+971XXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <Phone className="h-5 w-5" />
              {area?.cta?.buttonText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="text-sm">24/7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span className="text-sm">30 Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Certified Mechanics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}