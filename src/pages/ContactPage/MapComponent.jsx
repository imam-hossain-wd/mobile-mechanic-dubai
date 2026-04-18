// components/ui/shared/Map/MapComponent.tsx
'use client'

import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, MessageSquareText, Clock, Star } from 'lucide-react';
import Link from 'next/link';

const MapComponent = () => {
  // Coordinates for Saiful Car Repair & Battery Fixing Dubai
  const latitude = 25.2430387;
  const longitude = 55.2964023;
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.818319831845!2d55.29382737437848!3d25.243043529844122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x618e2df114dbe2ed%3A0xbbb3ac95640ff0da!2sSaiful%20Car%20Repair%20%26%20Battery%20Fixing%20Dubai!5e0!3m2!1sen!2sbd!4v1769782114563!5m2!1sen!2sbd";
  const directionUrl = "https://www.google.com/maps/dir/Saiful+Car+Repair+%26+Battery+Fixing+Dubai,+Al+Mankhool+-+Dubai+-+United+Arab+Emirates/@25.2430387,55.2964023,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x618e2df114dbe2ed:0xbbb3ac95640ff0da!2m2!1d55.2964023!2d25.2430387?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Map Section */}
      <div className="relative h-[350px] md:h-[450px] w-[90%] lg:w-full mx-auto rounded-t-2xl overflow-hidden shadow-lg">
        <iframe
          title="Saiful Car Repair & Battery Fixing Dubai Location"
          src={mapUrl}
          width="100%"
          height="100%"
          className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Business Card */}
        <div className="absolute bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-80 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl">
          <div className="flex items-start gap-3">
            <div className="bg-[#007A55] p-2 rounded-lg flex-shrink-0">
              <MapPin className="text-white w-5 h-5" />
            </div>
            <div>
              <h3 className="text-md font-bold text-gray-900">Saiful Car Repair & Battery Fixing Dubai</h3>
              <p className="text-gray-600 text-xs">(24 Car Service Dubai)</p>
              <p className="text-gray-600 text-sm mt-1">Al Mankhool, Dubai - UAE</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-medium">4.9</span>
                </div>
                <span className="text-xs text-gray-500">• 500+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Directions Button */}
      <div className="px-4 py-4 bg-gradient-to-r from-gray-50 to-white">
        <Link
          href={directionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-3 bg-[#007A55] hover:bg-[#00943B] text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-base font-semibold">Get Directions to Our Location</span>
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-4 gap-2 px-4 mb-3 bg-white">
        <Link
          href="tel:+971545695980"
          className="flex flex-col items-center justify-center gap-1 p-3 bg-white border border-gray-200 hover:border-[#007A55] rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-[#007A55]/10 rounded-full">
            <Phone className="w-4 h-4 text-[#007A55]" />
          </div>
          <span className="text-xs font-medium">Call</span>
        </Link>

        <Link
          href="https://wa.me/971545695980"
          className="flex flex-col items-center justify-center gap-1 p-3 bg-white border border-gray-200 hover:border-[#007A55] rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-[#007A55]/10 rounded-full">
            <MessageSquareText className="w-4 h-4 text-[#007A55]" />
          </div>
          <span className="text-xs font-medium">WhatsApp</span>
        </Link>

        <Link
          href="mailto:24carservicedubai@gmail.com"
          className="flex flex-col items-center justify-center gap-1 p-3 bg-white border border-gray-200 hover:border-[#007A55] rounded-xl transition-all hover:shadow-md"
        >
          <div className="p-2 bg-[#007A55]/10 rounded-full">
            <Mail className="w-4 h-4 text-[#007A55]" />
          </div>
          <span className="text-xs font-medium">Email</span>
        </Link>

        <div className="flex flex-col items-center justify-center gap-1 p-3 bg-[#007A55] rounded-xl">
          <Clock className="w-4 h-4 text-white" />
          <span className="text-xs font-medium text-white">24/7</span>
        </div>
      </div>

      {/* Business Hours Note */}
      <div className="text-center text-xs text-gray-500 mt-2">
        <span className="font-medium">Open 24 Hours</span> — Saturday to Friday
      </div>
    </div>
  );
};

export default MapComponent;