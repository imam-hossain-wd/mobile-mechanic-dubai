'use client'

import React from "react";
import {
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  MapPin,
  Phone,
  Wrench,
  Gauge,
  Award,
  Users,
  ThumbsUp
} from "lucide-react";
import { WhatsAppButton } from "@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton";
import { CallNowButton } from "@/components/ui/shared/Buttons/CallNowButton/CallNowButton";
import { hero } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/config/site";

const trustFeatures = [
  {
    icon: CheckCircle2,
    text: "No Hidden Fees",
    value: "100% Transparent",
    highlight: "Guaranteed"
  },
  {
    icon: Clock,
    text: "Fast Response",
    value: "30 min average",
    highlight: "Rapid"
  },
  {
    icon: Shield,
    text: "Service Warranty",
    value: "12 months",
    highlight: "Covered"
  }
];

const stats = [
  { label: "Happy Clients", value: "5,000+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Service Areas", value: "25+", icon: MapPin },
];

const serviceHighlights = [
  { icon: Wrench, label: "Battery Service", bgColor: "bg-amber-50", textColor: "text-amber-700", borderColor: "border-amber-200" },
  { icon: Gauge, label: "Mobile Mechanic", bgColor: "bg-blue-50", textColor: "text-blue-700", borderColor: "border-blue-200" },
  { icon: Zap, label: "Emergancy Service", bgColor: "bg-emerald-50", textColor: "text-emerald-700", borderColor: "border-emerald-200" },
];

export default function HomeHero() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Professional Background with Subtle Overlay */}
      <div className="absolute inset-0">
        <Image
          src={hero.HomeHero}
          alt="Premium Car Service Dubai"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 L0 30 L30 60 L60 30 L30 0' stroke='white' stroke-width='0.2' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[90vh] lg:min-h-[85vh] py-16 lg:py-0">

          {/* Left Column - Main Content */}
          <div className="w-full lg:w-[55%] space-y-4 text-center lg:text-left">

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <Zap className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                24/7 Emergency Mobile Mechanic
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none">
              Premium{' '}
              <span className="relative">
                <span className="relative text-emerald-400">
                  Car Repair
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400/30 rounded-full"></span>
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl text-white/90">
                Mobile Mechanic in Dubai
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Fast, reliable, and professional onsite car repair service at your
              home, office, or anywhere in Dubai. Available 24/7 for emergencies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CallNowButton className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 transition-colors" />
              <WhatsAppButton className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-colors" />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {trustFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="p-1 bg-emerald-500/10 rounded-lg">
                      <Icon className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-white font-medium">{feature.text}</span>
                      <p className="text-xs text-white/60">{feature.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Professional Card */}
          <div className="w-full lg:w-[40%] mt-16 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div key={index} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                          <Icon className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                          <div className="text-lg font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-white/60">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Service Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Popular Services</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {serviceHighlights.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={index}
                            className="text-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-colors"
                          >
                            <div className={`w-8 h-8 mx-auto ${service.bgColor} rounded-lg flex items-center justify-center mb-1`}>
                              <Icon className={`h-4 w-4 ${service.textColor}`} />
                            </div>
                            <span className="text-xs text-white/80">{service.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-2">
                    <Link
                      href={SiteConfig.whatsappCallLink}
                      target="_blank"
                      className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500 rounded-lg">
                          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">WhatsApp Us</p>
                          <p className="text-xs text-white/60">Instant response</p>
                        </div>
                      </div>
                      <span className="text-xs text-emerald-400">Chat →</span>
                    </Link>

                    <Link
                      href={SiteConfig.numberCallLink}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <Phone className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Call Now</p>
                          <p className="text-xs text-white/60">{SiteConfig.displayNumber}</p>
                        </div>
                      </div>
                      <span className="text-xs text-white/40">24/7</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Quick Info */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4 text-emerald-400" />
              <span className="text-white/80">RTA Approved Mechanics</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span className="text-white/80">Genuine Parts Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span className="text-white/80">Serving All Dubai Areas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}