// components/view/ContactHero/ContactHero.tsx
import { MapPin, Clock, Phone } from 'lucide-react'
import { hero } from '@/utils/assets' 
import Image from 'next/image'
import Link from 'next/link'

export default function ContactHero() {
    return (
        <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
            {/* Background Image - Optimized Alt for Image SEO */}
            <div className="absolute inset-0">
                <Image
                    src={hero?.ContactHero}
                    alt="Contact Car Repair Mobile Mechanic Dubai - 24/7 Support"
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
                    {/* Main Heading - Optimized with Primary Keywords */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                        Contact Your{' '}
                        <span className="relative">
                            <span className="relative z-10 text-emerald-400">Mobile Mechanic</span>
                            <span className="absolute -bottom-1 left-0 w-full h-2 bg-emerald-400/20 blur-sm"></span>
                        </span>{' '}
                        in Dubai
                    </h1>

                    {/* Description - Focused on Service Range & Brand Name */}
                    <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl leading-relaxed">
                        <strong>Car Repair Mobile Mechanic Dubai</strong> offers professional 24/7 roadside assistance. 
                        Whether you need a battery replacement, AC repair, or emergency diagnostics, 
                        our certified technicians arrive within 30 minutes anywhere in Dubai.
                    </p>

                    {/* Quick Stats - Trust Signals */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs text-white/60 uppercase tracking-wider">Arrival</span>
                                <p className="text-sm font-bold text-white">30 Min Max</p>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs text-white/60 uppercase tracking-wider">Support</span>
                                <p className="text-sm font-bold text-white">24/7 Available</p>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-white/20"></div>

                        <div className="flex items-center gap-2">
                            <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                            </div>
                            <div>
                                <span className="text-xs text-white/60 uppercase tracking-wider">Location</span>
                                <p className="text-sm font-bold text-white">Entire Dubai</p>
                            </div>
                        </div>
                    </div>

                    {/* Direct Contact Button - High Conversion & SEO Signal */}
                    <div className="flex flex-wrap gap-4">
                        <Link 
                            href="tel:+971552330721" 
                            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
                        >
                            <Phone className="h-4 w-4" /> Call +971 55 233 0721
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Hidden NAP for Local SEO Crawlers */}
            <div className="hidden" itemScope itemType="https://schema.org/ContactPage">
                <span itemProp="name">Contact Car Repair Mobile Mechanic Dubai</span>
                <span itemProp="description">24/7 Emergency Mobile Mechanic and Roadside Assistance in Dubai.</span>
            </div>
        </section>
    )
}