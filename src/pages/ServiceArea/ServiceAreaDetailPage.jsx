// pages/ServiceArea/ServiceAreaDetailPage.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  Shield,
  Clock,
  Award,
  Users,
} from 'lucide-react';
import ServiceAreaIntro from '@/components/view/ServiceArea/ServiceAreaIntro';
import AreaServices from '@/components/view/ServiceArea/AreaServices';
import AreaProblems from '@/components/view/ServiceArea/AreaProblems';
import AreaFAQ from '@/components/view/ServiceArea/AreaFAQ';
import AreaWhyChooseUs from '@/components/view/ServiceArea/AreaWhyChooseUs';
import AreaLandmarks from '@/components/view/ServiceArea/AreaLandmarks';
import AreaReviews from '@/components/view/ServiceArea/AreaReviews';
import AreaCTA from '@/components/view/ServiceArea/AreaCTA';
import ServiceAreaHero from '@/components/view/ServiceArea/ServiceAreaHero';
import { SiteConfig } from '@/config/site';




export default function ServiceAreaDetailPage({ area }) {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <ServiceAreaHero area={area} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <ServiceAreaIntro area={area} />

            {/* Services Section */}
            <AreaServices area={area} />

            {/* Common Problems Section */}
            <AreaProblems area={area} />

            {/* FAQ Section */}
            <AreaFAQ area={area} />
          </div>

          {/* Right Column - Sidebar (1/3 width) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Card - Sticky */}
            <div className="sticky top-24 space-y-6">
              {/* Why Choose Us - In Sidebar */}
              {/* <AreaWhyChooseUs area={area} /> */}

              {/* Landmarks */}
              {/* <AreaLandmarks area={area} /> */}

              {/* Map */}
              {/* <AreaMap area={area} /> */}

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Need Help Now?</h3>
                <div className="space-y-3">
                  <Link
                    href={SiteConfig?.numberCallLink}
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-200"
                  >
                    <Phone className="h-4 w-4" />
                    Call Mobile Mechanic
                  </Link>
                  <Link
                    href={SiteConfig?.whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-medium transition-colors shadow-lg shadow-green-200"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Link>
                </div>
                <p className="text-xs text-center text-slate-500 mt-3">
                  24/7 Emergency Service • 30 Min Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section - Full Width */}
      <AreaReviews area={area} />

      {/* CTA Section */}
      <AreaCTA area={area} />

      {/* Schema Markup - For SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": `24 Car Service Dubai - ${area?.name}`,
            "description": area?.meta?.description,
            "areaServed": {
              "@type": "City",
              "name": area?.name,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": area?.name,
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              }
            },
            "telephone": "+971XXXXXXXXX",
            "openingHours": "Mo-Su 00:00-24:00",
            "sameAs": [
              "https://www.facebook.com/24carservice",
              "https://www.instagram.com/24carservice"
            ]
          })
        }}
      />
    </main>
  );
}