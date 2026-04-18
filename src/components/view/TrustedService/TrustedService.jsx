import Image from "next/image";
import {
  BadgeCheck, Zap, DollarSign,
  Shield, ChevronRight,
  Star, Award, Users, CheckCircle,
  Gem, Heart, Target, Wrench, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/utils/assets";
import { cn } from "@/lib/utils";

export function TrustedService() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[15%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[30%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[45%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[60%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[75%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[90%]" />
        </div>

        {/* Horizontal Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#007A55] to-transparent absolute top-[20%]" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00943B] to-transparent absolute top-[40%]" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#007A55] to-transparent absolute top-[60%]" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00943B] to-transparent absolute top-[80%]" />
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#007A55]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-[#00943B]/20 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Minimalist Header with Brand Accents */}
        <div className="text-center mb-16 md:mb-20">
          {/* Brand Monogram */}
          <div className="inline-flex items-center justify-center gap-1 mb-6">
            <div className="w-8 h-px bg-[#007A55]" />
            <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">24CS</span>
            <div className="w-8 h-px bg-[#00943B]" />
          </div>

          {/* Main Title - Geometric Typography */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            <span className="block">Dubai's</span>
            <span className="font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent inline-block mt-2">
              Automotive Excellence
            </span>
          </h2>

          {/* Divider Line */}
          <div className="w-24 h-px bg-gradient-to-r from-[#007A55] to-[#00943B] mx-auto my-6" />

          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto tracking-wide">
            Since 2009 • Dubai's Most Trusted Mobile Mechanic • 24/7 Premium Service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Visual Story */}
          <div className="space-y-8">
            {/* Main Image - Gallery Style */}
            <div className="relative">
              {/* Image Frame */}
              <div className="relative bg-gray-100 border border-gray-200">
                <Image
                  src={images.whychoosedubai}
                  width={600}
                  height={400}
                  alt="Premium car service in Dubai"
                  className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/60" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/60" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/60" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/60" />

                {/* Year Badge */}
                <div className="absolute bottom-6 right-6 bg-white px-4 py-2">
                  <span className="text-2xl font-light text-[#007A55]">15</span>
                  <span className="text-xs text-gray-500 ml-1">YEARS</span>
                </div>
              </div>

              {/* Floating Stats - Minimal Cards */}
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="bg-white border border-gray-200 p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#007A55]/10 flex items-center justify-center">
                      <Award className="h-5 w-5 text-[#007A55]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Rating</p>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-semibold text-gray-900">4.9</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-[#007A55]" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Floating Card */}
              <div className="absolute -top-4 -right-4 hidden md:block">
                <div className="bg-white border border-gray-200 p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#00943B]/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-[#00943B]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Satisfied Clients</p>
                      <p className="text-sm font-semibold text-gray-900">10,000+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid - Minimal */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years", value: "15+", icon: Award },
                { label: "Services", value: "50+", icon: Wrench },
                { label: "Areas", value: "25+", icon: MapPin },
              ].map((stat, idx) => (
                <div key={idx} className="border border-gray-200 p-4 text-center">
                  <stat.icon className="h-4 w-4 text-[#007A55] mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial Highlight */}
            <div className="border-l-4 border-[#007A55] pl-6 py-2">
              <p className="text-sm text-gray-500 italic mb-3">
                "Exceptional service quality and professionalism. They've maintained my fleet for over a decade."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#007A55]/10 rounded-full flex items-center justify-center">
                  <span className="text-xs text-[#007A55] font-semibold">A</span>
                </div>
                <span className="text-xs font-medium text-gray-900">Ahmed Al Maktoum</span>
                <span className="text-xs text-gray-400">• Fleet Owner</span>
              </div>
            </div>
          </div>

          {/* Right Column - Value Propositions */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase block mb-2">
                Why Choose Us
              </span>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900">
                Precision. Speed.
                <span className="block font-medium text-[#007A55] mt-1">Uncompromising Quality</span>
              </h3>
            </div>

            {/* Features Grid - Architectural Cards */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: BadgeCheck,
                  title: "Master Technicians",
                  desc: "ASE & manufacturer certified",
                  color: "text-[#007A55]",
                  bgColor: "bg-[#007A55]/5"
                },
                {
                  icon: Zap,
                  title: "30min Response",
                  desc: "Rapid deployment across Dubai",
                  color: "text-[#00943B]",
                  bgColor: "bg-[#00943B]/5"
                },
                {
                  icon: Shield,
                  title: "24-Month Warranty",
                  desc: "Parts & labor guaranteed",
                  color: "text-[#007A55]",
                  bgColor: "bg-[#007A55]/5"
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  desc: "Fixed rates, no surprises",
                  color: "text-[#00943B]",
                  bgColor: "bg-[#00943B]/5"
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group border border-gray-200 p-5 hover:border-[#007A55] transition-colors"
                >
                  <div className={cn("w-10 h-10 flex items-center justify-center mb-4", feature.bgColor)}>
                    <feature.icon className={cn("h-5 w-5", feature.color)} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Premium Service Highlight */}
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#007A55] to-[#00943B] flex items-center justify-center flex-shrink-0">
                  <Gem className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Concierge Service</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    Dedicated account manager, priority scheduling, and complimentary vehicle health reports.
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-xs font-medium text-[#007A55] hover:text-[#00943B]"
                  >
                    Learn More <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Contact Strip */}
            <div className="flex items-center justify-between py-4 border-t border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#007A55]" />
                <span className="text-xs text-gray-500">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#00943B]" />
                <span className="text-xs text-gray-500">Premium Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#007A55]" />
                <span className="text-xs text-gray-500">Dubai Wide</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              className="w-full h-14 bg-[#007A55] hover:bg-[#00943B] text-white rounded-none text-sm font-medium tracking-wider"
            >
              Schedule Premium Service
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { icon: CheckCircle, text: "RTA Approved" },
              { icon: Shield, text: "Fully Insured" },
              { icon: Users, text: "10K+ Clients" },
              { icon: Heart, text: "98% Retention" },
              { icon: Target, text: "Precision Work" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-[#007A55]" />
                <span className="text-xs text-gray-500">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}