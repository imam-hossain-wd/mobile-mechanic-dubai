'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';
import { images } from '@/utils/assets';
import { SiteConfig } from '@/config/site';



export default function ServiceAreaHero({ area }) {
  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={images?.service}
          alt={area?.hero?.heading}
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {area?.hero?.heading}
          </h1>

          {/* Subheading */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {area?.hero?.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href={SiteConfig?.numberCallLink}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/30"
            >
              <Phone className="h-5 w-5" />
              Call Mobile Mechanic
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href={SiteConfig?.whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-green-600/30"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}