// components/view/AboutHero/AboutHero.tsx
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { hero, images } from "@/utils/assets";

const aboutHero = images.about
export default function AboutHero() {
  return (
    <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image - Same as contact/blog page */}
          <div className="absolute inset-0">
            <Image
              src={hero.AboutHero}
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
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4 w-fit">
            <span className="text-sm font-medium text-white">Trusted Since 2010</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
           About 24 Car Service Dubai –{" "}
            <span className="text-emerald-400">Trusted Mobile Car Repair & Mechanic Service</span>
          </h1>

          {/* About 24 Car Service Dubai – Trusted Mobile Car Repair & Mechanic Service */}

          {/* Subheading */}
          <p className="text-base text-white/80 mb-5 max-w-xl leading-relaxed">
            Immediate response ∙ Certified technicians ∙ Transparent pricing
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-5">
            <Button className="px-6 py-3 bg-emerald-500 text-white hover:bg-emerald-600 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all">
              Book Instant Service
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-3 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-sm font-medium rounded-xl transition-all"
            >
              <Phone className="w-4 h-4 mr-2" /> 800-24CAR
            </Button>
          </div>

          {/* Trust indicators */}
          {/* <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>100+ Certified Techs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>12-Month Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>90% Same-Day</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}