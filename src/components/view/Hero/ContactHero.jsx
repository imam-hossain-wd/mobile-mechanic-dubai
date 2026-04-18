
// components/view/ContactHero/ContactHero.tsx
import { MapPin, Clock, Phone } from 'lucide-react'
import { hero, images } from '@/utils/assets' // Adjust import path as needed
import Image from 'next/image'



export default function ContactHero() {
    return (
        <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
            {/* Background Image - Local Image */}
            <div className="absolute inset-0">
                <Image
                    src={hero?.ContactHero}
                    alt="Car Service Background"
                    fill
                    className="object-cover object-center scale-110"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 h-full mx-auto px-4">
                <div className="flex h-full flex-col justify-center max-w-3xl">
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                        Need Fast & Reliable{' '}
                        <span className="relative">
                            <span className="relative z-10 text-emerald-400">Car Repair</span>
                            <span className="absolute -bottom-1 left-0 w-full h-2 bg-emerald-400/20 blur-sm"></span>
                        </span>{' '}
                        in Dubai?
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/80 mb-4 max-w-xl leading-relaxed">
                        Saiful Car Repair & Battery Fixing Dubai (24 Car Service Dubai) is available 24/7
                        to assist you anywhere in the city with immediate response and certified technicians.
                    </p>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs text-white/60">Response</span>
                                <p className="text-sm font-bold text-white">30 min</p>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs text-white/60">Support</span>
                                <p className="text-sm font-bold text-white">24/7</p>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs text-white/60">Coverage</span>
                                <p className="text-sm font-bold text-white">All Dubai</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Cards */}
                    {/* <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all group">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1.5 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                                    <MapPin className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-xs font-semibold text-white/90">Location</span>
                            </div>
                            <p className="text-white/70 text-xs pl-8">Al Mankhool, Dubai, UAE</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/15 transition-all group">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="p-1.5 bg-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                                    <Clock className="h-3.5 w-3.5 text-white" />
                                </div>
                                <span className="text-xs font-semibold text-white/90">Working Hours</span>
                            </div>
                            <p className="text-white/70 text-xs pl-8">24/7 — Saturday to Friday</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}