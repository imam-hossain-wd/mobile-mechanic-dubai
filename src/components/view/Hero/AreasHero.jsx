// components/view/AreasHero/AreasHero.tsx
import { Phone, MapPin, Navigation, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { hero, images } from "@/utils/assets";

export default function AreasHero() {
    return (
        <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
            {/* Background Image */}
             <div className="absolute inset-0">
                      <Image
                        src={hero.ServiceAreaHero}
                        alt="Mobile Mechanic Dubai Service Areas"
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
                        <MapPin className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium text-white">Rapid On-Site Coverage in Dubai</span>
                    </div>

                    {/* Heading - Updated for Brand Consistency */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Mobile Mechanic {" "}
                        <span ><span className="text-emerald-400">Service Areas</span> in Dubai</span>
                    </h1>

                    {/* Description - Updated for Specific Brand Services */}
                    <p className="text-base text-white/80 mb-5 max-w-xl leading-relaxed">
                      Car Repair Mobile Mechanic Dubai provides 24/7 expert roadside assistance across the city. 
                      From battery replacements in Dubai Marina to AC repairs in Deira, our certified mechanics 
                      bring professional garage services directly to your doorstep or location.
                    </p>

                    {/* Stats - Coverage metrics */}
                    <div className="flex flex-wrap items-center gap-5 mb-5">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Navigation className="h-4 w-4 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white">Dubai Wide</span>
                                <span className="text-xs text-white/60 ml-1">Coverage</span>
                            </div>
                        </div>

                        <div className="w-px h-5 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Clock className="h-4 w-4 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white">24/7</span>
                                <span className="text-xs text-white/60 ml-1">Availability</span>
                            </div>
                        </div>

                        <div className="w-px h-5 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Star className="h-4 w-4 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white">4.9/5</span>
                                <span className="text-xs text-white/60 ml-1">Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}