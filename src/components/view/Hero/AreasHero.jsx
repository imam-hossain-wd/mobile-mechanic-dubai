// components/view/AreasHero/AreasHero.tsx
import { Phone, MapPin, Navigation, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { hero, images } from "@/utils/assets";

const areaHero = images.areas
export default function AreasHero() {
    return (
        <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
            {/* Background Image - Same as contact/blog page */}
             <div className="absolute inset-0">
                      <Image
                        src={hero.ServiceAreaHero}
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
                        <MapPin className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium text-white">Coverage Across Dubai</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Mobile Car Repair {" "}
                        <span ><span className="text-emerald-400">Service Areas</span> in Dubai</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base text-white/80 mb-5 max-w-xl leading-relaxed">
                      24 Car Service Dubai offers professional mobile car repair and mechanic services across multiple areas in Dubai. Our expert technicians provide fast onsite diagnostics, battery replacement, oil change, brake repair, and emergency roadside assistance wherever you are in Dubai.
                    </p>

                    {/* Stats - Coverage metrics */}
                    <div className="flex flex-wrap items-center gap-5 mb-5">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Navigation className="h-4 w-4 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white">25+</span>
                                <span className="text-xs text-white/60 ml-1">Areas</span>
                            </div>
                        </div>

                        <div className="w-px h-5 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Clock className="h-4 w-4 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white">30 min</span>
                                <span className="text-xs text-white/60 ml-1">Response</span>
                            </div>
                        </div>

                        <div className="w-px h-5 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Users className="h-4 w-4 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-white">5000+</span>
                                <span className="text-xs text-white/60 ml-1">Customers</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    {/* <div className="flex flex-wrap gap-3">
                        <Button className="px-6 py-3 bg-emerald-500 text-white hover:bg-emerald-600 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all">
                            <Phone className="w-4 h-4 mr-2" /> Call Now for Instant Help
                        </Button>

                        <Button
                            variant="outline"
                            className="px-6 py-3 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-sm font-medium rounded-xl transition-all"
                        >
                            <MapPin className="w-4 h-4 mr-2" /> View Service Areas
                        </Button>
                    </div> */}
                </div>
            </div>
        </section>
    );
}