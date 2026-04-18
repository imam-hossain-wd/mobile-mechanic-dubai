// components/view/AboutHero/AboutHero.tsx
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { hero, images } from "@/utils/assets";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image - Optimized Alt Text for SEO */}
      <div className="absolute inset-0">
        <Image
          src={hero.AboutHero}
          alt="Professional Mobile Mechanic in Dubai - Car Repair Services"
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
          {/* Trust badge - Connects to your SEO story */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4 w-fit">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">Dubai's #1 Rated Mobile Mechanic</span>
          </div>

          {/* Main heading - H1 is critical for SEO. Includes Brand + Main Keywords + Location */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            About Car Repair {" "}
            <span className="text-emerald-400">Mobile Mechanic Dubai</span>
          </h1>

          {/* Subheading - Includes Latent Semantic Indexing (LSI) Keywords */}
          <p className="text-base text-white/80 mb-6 max-w-xl leading-relaxed">
            We are a premier 24/7 on-site automotive service provider. Our certified 
            technicians specialize in **emergency roadside assistance**, **car battery replacement**, 
            and **expert diagnostics** across all Dubai neighborhoods.
          </p>

          {/* Buttons - Including your specific contact number */}
          <div className="flex flex-wrap gap-3 mb-5">
            <Link href="tel:+971552330721">
              <Button className="px-6 py-6 bg-emerald-500 text-white hover:bg-emerald-600 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                Call for Emergency Repair
              </Button>
            </Link>
            
            <Link href="https://wa.me/971552330721" target="_blank">
              <Button 
                variant="outline" 
                className="px-6 py-6 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-sm font-bold rounded-xl transition-all"
              >
                <Phone className="w-4 h-4 mr-2 text-emerald-400" /> +971 55 233 0721
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}