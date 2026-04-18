// 'use client'

// import React from 'react';
// import { MapPin, Phone, Mail, ChevronRight, MessageSquareText } from 'lucide-react';
// import Link from 'next/link';

// const MapComponent = () => {
//   // Coordinates for 24 Car Service Dubai
//   const latitude = 25.2430387;
//   const longitude = 55.2964023;
//   const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.818319831845!2d55.29382737437848!3d25.243043529844122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x618e2df114dbe2ed%3A0xbbb3ac95640ff0da!2sSaiful%20Car%20Repair%20%26%20Battery%20Fixing%20Dubai!5e0!3m2!1sen!2sbd!4v1769782114563!5m2!1sen!2sbd";
//   const directionUrl= "https://www.google.com/maps/dir/Saiful+Car+Repair+%26+Battery+Fixing+Dubai,+Al+Mankhool+-+Dubai+-+United+Arab+Emirates/@25.2430387,55.2964023,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x618e2df114dbe2ed:0xbbb3ac95640ff0da!2m2!1d55.2964023!2d25.2430387?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       {/* Map Section */}
//       <div className="relative h-[350px] md:h-[500px] w-[90%] lg:w-full mx-auto rounded-t-2xl overflow-hidden shadow-lg">
//         <iframe
//           title="24 Car Service Dubai Location"
//           src={mapUrl}
//           width="100%"
//           height="100%"
//           className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />

//         {/* Floating Contact Card */}
//         <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl max-w-md">
//           <div className="flex items-start justify-center gap-2">
//             <div className="bg-red-100 mt-1 p-1 rounded-full">
//               <MapPin className="text-red-500 w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="text-md font-bold text-gray-900">24 Car Service Dubai</h3>
//               <p className="text-gray-600 text-sm">Al Mankhool , Dubai - UAE</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Get Directions Button */}
//       <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
//         <Link
//           href={directionUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center gap-3 px-6 py-2 bg-primary hover:bg-green-600 text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg"
//         >
//           <MapPin className="w-6 h-6 text-red-400" />
//           <span className="text-lg font-semibold">Get Directions</span>
//           <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
//         </Link>
//       </div>

//       {/* Quick Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 px-6 mb-3 bg-white">
//         <Link
//           href="tel:+971545695980"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-blue-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-blue-100 rounded-full">
//             <Phone className="w-5 h-5 text-blue-500" />
//           </div>
//           <span className="text-sm font-medium">Call Now</span>
//         </Link>

//         <Link
//           href="https://wa.me/971545695980"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-green-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-green-100 rounded-full">
//             <MessageSquareText className="w-5 h-5 text-green-500" />
//           </div>
//           <span className="text-sm font-medium">WhatsApp</span>
//         </Link>

//         <Link
//           href="mailto:24carservicedubai@gmail.com"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-purple-100 rounded-full">
//             <Mail className="w-5 h-5 text-purple-500" />
//           </div>
//           <span className="text-sm font-medium">Email Us</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

'use client'

import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, MessageSquareText, Navigation, Clock, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MapComponent = () => {
  // Coordinates for 24 Car Service Dubai
  const latitude = 25.2430387;
  const longitude = 55.2964023;
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.818319831845!2d55.29382737437848!3d25.243043529844122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x618e2df114dbe2ed%3A0xbbb3ac95640ff0da!2sSaiful%20Car%20Repair%20%26%20Battery%20Fixing%20Dubai!5e0!3m2!1sen!2sbd!4v1769782114563!5m2!1sen!2sbd";
  const directionUrl = "https://www.google.com/maps/dir/Saiful+Car+Repair+%26+Battery+Fixing+Dubai,+Al+Mankhool+-+Dubai+-+United+Arab+Emirates/@25.2430387,55.2964023,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x618e2df114dbe2ed:0xbbb3ac95640ff0da!2m2!1d55.2964023!2d25.2430387?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";

  return (
    <div className="w-full max-w-7xl mx-auto bg-white">
      {/* Section Header */}
      <div className="mb-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />
          <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">
            Visit Our Workshop
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-4">
          Located in the Heart of
          <span className="block font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent">
            Al Mankhool, Dubai
          </span>
        </h2>
      </div>

      {/* Map Container - Architectural Frame */}
      <div className="relative border border-gray-200 bg-gray-50 mx-4 sm:mx-6 lg:mx-8">
        {/* Corner Frames */}
        <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-[#007A55]/30 z-10" />
        <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#007A55]/30 z-10" />
        <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#007A55]/30 z-10" />
        <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-[#007A55]/30 z-10" />

        {/* Map */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full">
          <iframe
            title="24 Car Service Dubai Location"
            src={mapUrl}
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: 0, filter: 'grayscale(20%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Brand Overlay */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-gray-200">
            <span className="text-xs font-mono text-[#007A55] tracking-wider">24CS</span>
          </div>

          {/* Distance Badge */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 border border-gray-200">
            <div className="flex items-center gap-2">
              <Navigation className="h-3 w-3 text-[#007A55]" />
              <span className="text-xs text-gray-600">Central Dubai • 5min from Metro</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mt-8 mx-4 sm:mx-6 lg:mx-8 border border-gray-200 bg-white">
        {/* Location Details - 2 columns */}
        <div className="lg:col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#007A55]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-[#007A55]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">
                  Workshop Location
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  24 Car Service Dubai<br />
                  Al Mankhool, Bur Dubai<br />
                  Dubai - United Arab Emirates
                </p>
                <Link 
                  href={directionUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1 mt-3 text-xs text-[#007A55] hover:text-[#00943B]"
                >
                  Get Directions
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Landmark</div>
                <div className="text-sm text-gray-900">Near Al Fahidi Metro</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Parking</div>
                <div className="text-sm text-gray-900">Free Customer Parking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours - 1.5 columns */}
        <div className="lg:col-span-1.5 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00943B]/10 flex items-center justify-center">
                <Clock className="h-4 w-4 text-[#00943B]" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Hours
              </h3>
            </div>
            
            <div className="space-y-2">
              {[
                { day: "Saturday - Thursday", hours: "8:00 AM - 10:00 PM" },
                { day: "Friday", hours: "2:00 PM - 10:00 PM" },
                { day: "Emergency", hours: "24/7 Available", highlight: true }
              ].map((schedule, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className={schedule.highlight ? "text-[#007A55] font-medium" : "text-gray-500"}>
                    {schedule.day}
                  </span>
                  <span className={schedule.highlight ? "text-[#007A55] font-medium" : "text-gray-900"}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Methods - 1.5 columns */}
        <div className="lg:col-span-1.5 p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#007A55]/10 flex items-center justify-center">
                <Phone className="h-4 w-4 text-[#007A55]" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Contact
              </h3>
            </div>

            <div className="space-y-3">
              <Link 
                href="tel:+971545695980"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-gray-50 flex items-center justify-center group-hover:bg-[#007A55]/10 transition-colors">
                  <Phone className="h-4 w-4 text-gray-500 group-hover:text-[#007A55]" />
                </div>
                <div>
                  <span className="text-sm text-gray-900 group-hover:text-[#007A55]">+971 54 569 5980</span>
                  <span className="block text-xs text-gray-400">24/7 Hotline</span>
                </div>
              </Link>

              <Link 
                href="https://wa.me/971545695980"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-gray-50 flex items-center justify-center group-hover:bg-[#007A55]/10 transition-colors">
                  <MessageSquareText className="h-4 w-4 text-gray-500 group-hover:text-[#007A55]" />
                </div>
                <div>
                  <span className="text-sm text-gray-900 group-hover:text-[#007A55]">WhatsApp</span>
                  <span className="block text-xs text-gray-400">Fast Response</span>
                </div>
              </Link>

              <Link 
                href="mailto:24carservicedubai@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 bg-gray-50 flex items-center justify-center group-hover:bg-[#007A55]/10 transition-colors">
                  <Mail className="h-4 w-4 text-gray-500 group-hover:text-[#007A55]" />
                </div>
                <div>
                  <span className="text-sm text-gray-900 group-hover:text-[#007A55]">Email Us</span>
                  <span className="block text-xs text-gray-400">24carservicedubai@gmail.com</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-0 mx-4 sm:mx-6 lg:mx-8 border border-t-0 border-gray-200">
        <Link
          href={directionUrl}
          target="_blank"
          className="group flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors border-b md:border-b-0 md:border-r border-gray-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#007A55] flex items-center justify-center">
              <Navigation className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 block">Get Directions</span>
              <span className="text-xs text-gray-500">Open in Google Maps</span>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#007A55] group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/book-appointment"
          className="group flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#00943B] flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-900 block">Book Appointment</span>
              <span className="text-xs text-gray-500">Free vehicle inspection</span>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#00943B] group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8 px-4 sm:px-6 lg:px-8">
        {[
          { icon: MapPin, text: "Central Location" },
          { icon: Clock, text: "24/7 Emergency" },
          { icon: Shield, text: "RTA Approved" },
          { icon: Star, text: "4.9 ★ Rating" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#007A55]/10 flex items-center justify-center">
              <item.icon className="h-3 w-3 text-[#007A55]" />
            </div>
            <span className="text-xs text-gray-500">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;