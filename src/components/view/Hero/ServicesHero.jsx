// components/view/ServicesHero/ServicesHero.tsx
import React from "react";
import { Wrench, Clock, Shield, Star, Search } from "lucide-react";
import Image from "next/image";
import { hero, images } from "@/utils/assets";



export default function ServicesHero() {
  return (
    <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image - Same as contact/blog page */}
      <div className="absolute inset-0">
        <Image
          src={hero.ServiceHero}
          alt="Car Service Background"
          fill
          className="object-cover object-center scale-110"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full mx-auto px-4">
        <div className="flex h-full flex-col justify-center max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4 w-fit">
            <Wrench className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">
              Professional Car Repair Services in Dubai
            </span>
          </div>

          {/* Expert Car Repair Services Dubai | Mobile Mechanic & Roadside Assistance */}

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            Expert{" "}
            <span className="text-emerald-400">Car Repair & Mobile </span>{" "}
            Mechanic Services Dubai
          </h1>
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Expert{" "}
            <span className="text-emerald-400">Car Repair</span>{" "}
            & Maintenance
          </h1> */}

          {/* Description */}
          <p className="text-base text-white/80 mb-5 max-w-xl leading-relaxed">
            From emergency roadside assistance to complete diagnostics,
            our certified technicians deliver quality service 24/7 across Dubai.
          </p>

          {/* Quick Stats - Compact row like blog */}
          <div className="flex flex-wrap items-center gap-5 mb-5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                <Clock className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="text-sm text-white/90">24/7 Emergency</span>
            </div>

            <div className="w-px h-5 bg-white/20"></div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                <Shield className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="text-sm text-white/90">Certified Experts</span>
            </div>

            <div className="w-px h-5 bg-white/20"></div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                <Star className="h-4 w-4 text-emerald-400" />
              </div>
              <span className="text-sm text-white/90">4.9/5 Rating</span>
            </div>
          </div>

          {/* Service Categories - Quick filters like blog search */}
          <div className="flex flex-wrap gap-2">
            {["Emergency", "Onsite", "Roadsite", "Professional Mechanic"].map((service, index) => (
              <button
                key={index}
                className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/70 hover:text-white hover:bg-white/10 hover:border-emerald-400/30 transition-colors"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}