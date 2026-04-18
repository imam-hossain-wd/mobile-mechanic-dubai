// components/who-we-are.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Shield,
  Users,
  Award,
  CheckCircle,
  Battery,
  Wrench,
  Car,
  ChevronRight,
  Target,
  Heart,
  Sparkles,
  Compass
} from "lucide-react";

import { images } from "@/utils/assets";

export default function WhoWeAre() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[10%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[20%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[30%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[40%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[50%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[60%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[70%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[80%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[90%]" />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-[#007A55]/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-[#00943B]/10 rounded-full" />

        {/* Diagonal Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #007A55 0px, #007A55 2px, transparent 2px, transparent 20px)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Identifier */}
        <div className="flex items-center gap-4 mb-10 lg:mb-16">
          <div className="w-12 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />
          <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">Est. 2009</span>
          <div className="w-12 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">

          {/* Image Section - Left Side */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Container - Architectural Frame */}
            <div className="relative border border-gray-200 bg-gray-50">
              <Image
                src={images?.whoweare}
                alt="Saiful Car Repair & Battery Fixing Dubai team"
                width={600}
                height={700}
                className="w-full h-[400px] md:h-[500px] lg:h-[580px] object-cover"
                priority
              />

              {/* Overlay Gradient - Minimal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Corner Frames */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/60" />
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/60" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/60" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/60" />
            </div>

            {/* Floating Element - Location Badge */}
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-white border border-gray-200 p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#007A55] flex items-center justify-center">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Headquarters</p>
                    <p className="text-sm font-semibold text-gray-900">Al Mankhool, Dubai</p>
                    <p className="text-xs text-gray-500 mt-1">Serving all Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element - Rating Card */}
            <div className="absolute -top-6 -right-6 hidden lg:block">
              <div className="bg-white border border-gray-200 p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-light text-[#007A55]">4.9</div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-[#007A55]" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div>
                    <p className="text-xs font-medium text-gray-900">500+ Reviews</p>
                    <p className="text-xs text-gray-500">Google Verified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Year Stamp */}
            <div className="absolute bottom-8 right-8 hidden lg:block">
              <div className="text-right">
                <span className="text-7xl font-light text-white/30">15</span>
                <span className="text-sm text-white/60 ml-1">years</span>
              </div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Section Label */}
            <div>
              <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase block mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                24 Car Service Dubai{' '}
                <span className="font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent block mt-2">
                  Mobile Mechanic
                </span>
              </h2>
            </div>

            {/* Divider Line */}
            <div className="w-24 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />

            {/* Description */}
            <div className="space-y-4 text-gray-600">
              <p className="text-base leading-relaxed">
                24 Car Service Dubai Mobile Mechanic stands as a trusted name in the UAE’s automotive service industry. Based in Al Mankhool, we have redefined mobile car repair by delivering fast, reliable, and high-quality vehicle maintenance services across Dubai.

                Our certified and experienced technicians bring the workshop directly to your location—whether you are stranded on Sheikh Zayed Road, parked at home in Jumeirah, or at your office or parking area anywhere in Dubai. We specialize in providing convenient on-site car repair solutions designed to save you time and eliminate the stress of visiting a traditional garage.
              </p>
              <p className="text-base leading-relaxed">
                From emergency car battery replacement and jump start services to advanced engine diagnostics, car AC repair, alternator repair, and complete vehicle servicing, our team is equipped with modern tools and expertise to handle every situation efficiently.

                At 24 Car Service Dubai Mobile Mechanic, our mission is simple: to provide dependable, professional, and fast mobile auto repair services whenever and wherever you need them. With 24/7 roadside assistance and same-day service, we ensure that help is always just a call away.
              </p>
            </div>

            {/* Stats Grid - Minimal Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5000+", label: "Vehicles", icon: Car, suffix: "Repaired" },
                { value: "24/7", label: "Emergency", icon: Clock, suffix: "Support" },
                { value: "15+", label: "Experts", icon: Users, suffix: "Certified" },
              ].map((stat, index) => (
                <div key={index} className="border border-gray-200 p-4 text-center">
                  <stat.icon className="h-5 w-5 text-[#007A55] mx-auto mb-3" />
                  <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                  <div className="text-[10px] text-gray-400 mt-1">{stat.suffix}</div>
                </div>
              ))}
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 gap-3 py-2">
              {[
                { icon: Battery, text: "Battery Replacement" },
                { icon: Wrench, text: "AC & Alternator" },
                { icon: Shield, text: "24-Month Warranty" },
                { icon: Clock, text: "30min Response" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#007A55]/10 flex items-center justify-center">
                    <item.icon className="h-3 w-3 text-[#007A55]" />
                  </div>
                  <span className="text-xs text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Service Areas - Grid */}
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Service Locations
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  "Al Mankhool", "Al Jafiliya", "Al Raffa", "Al Satwa",
                  "Deira", "Jumeirah", "Marina", "Downtown"
                ].map((area, index) => (
                  <div key={index} className="border border-gray-200 px-3 py-2 text-center">
                    <span className="text-xs text-gray-600">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <Button
                className="bg-[#007A55] hover:bg-[#00943B] text-white h-14 px-8 text-sm font-medium tracking-wider rounded-none flex-1"
              >
                <Phone className="mr-2 h-4 w-4" />
                +971 54 569 5980
                <span className="ml-2 text-xs text-white/60">24/7 Hotline</span>
              </Button>

              <Button
                variant="outline"
                className="border-[#007A55] text-[#007A55] hover:bg-[#007A55]/5 h-14 px-8 text-sm font-medium tracking-wider rounded-none flex-1"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Al Mankhool, Dubai
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-between pt-2">
              {[
                { icon: Award, text: "RTA Approved" },
                { icon: Shield, text: "Fully Insured" },
                { icon: CheckCircle, text: "Certified" },
                { icon: Heart, text: "Client Favorite" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <item.icon className="h-3 w-3 text-[#007A55]" />
                  <span className="text-[10px] text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400 tracking-wider">
            DUBAI'S PREMIER MOBILE MECHANIC • ESTABLISHED 2009 • AL MANKHOOL HEADQUARTERS
          </p>
        </div>
      </div>
    </section>
  );
}