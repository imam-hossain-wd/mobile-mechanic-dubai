"use client"

import { Button } from '@/components/ui/button'
import { SiteConfig } from '@/config/site';
import { MapPin, Clock, Phone, Zap, ChevronRight, Compass, Navigation, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ServiceAreas() {
    const { serviceAreas, city, country } = SiteConfig;
    const [selectedArea, setSelectedArea] = useState("");

    const operatingHours = [
        { day: 'Saturday', hours: '24 Hours' },
        { day: 'Sunday', hours: '24 Hours' },
        { day: 'Monday', hours: '24 Hours' },
        { day: 'Tuesday', hours: '24 Hours' },
        { day: 'Wednesday', hours: '24 Hours' },
        { day: 'Thursday', hours: '24 Hours' },
        { day: 'Friday', hours: '24 Hours' }
    ];

    const stats = [
        { value: '15min', label: 'Avg. Response', icon: Clock },
        { value: '24/7', label: 'Availability', icon: Zap },
        { value: '100%', label: 'Coverage', icon: Compass }
    ];

    const selectedAreaData = serviceAreas.find(a => a.slug === selectedArea);

    return (
        <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0">
                {/* Vertical Lines */}
                <div className="absolute inset-0 opacity-[0.12]">
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
                <div className="absolute top-20 right-0 w-[500px] h-[500px] border-2 border-[#007A55]/5 rounded-full translate-x-1/4" />
                <div className="absolute bottom-20 left-0 w-[400px] h-[400px] border-2 border-[#00943B]/5 rounded-full -translate-x-1/4" />

                {/* Diagonal Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #007A55 0px, #007A55 1px, transparent 1px, transparent 40px)`
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />
                        <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">
                            Coverage Network
                        </span>
                        <div className="w-12 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
                        Serving Every Corner of
                        <span className="block font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent mt-2">
                            {city}, {country}
                        </span>
                    </h2>

                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-4 tracking-wide">
                        Premium mobile car repair services delivered directly to your location across all Dubai neighborhoods
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#007A55]/10 flex items-center justify-center">
                                <stat.icon className="h-5 w-5 text-[#007A55]" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                                <p className="text-xs text-gray-500">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Service Areas Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {serviceAreas.map((area, index) => (
                                <Link
                                    key={area.slug}
                                    href={area.href}
                                    className={cn(
                                        "group relative border bg-white transition-colors p-5",
                                        selectedArea === area.slug
                                            ? "border-[#007A55]"
                                            : "border-gray-200 hover:border-[#007A55]/30"
                                    )}
                                    onMouseEnter={() => setSelectedArea(area.slug)}
                                    onMouseLeave={() => setSelectedArea("")}
                                >
                                    {/* Icon */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className={cn(
                                            "w-12 h-12 flex items-center justify-center mb-3 transition-colors",
                                            selectedArea === area.slug
                                                ? "bg-[#007A55]"
                                                : "bg-[#007A55]/10 group-hover:bg-[#007A55]/20"
                                        )}>
                                            <MapPin className={cn(
                                                "h-5 w-5",
                                                selectedArea === area.slug
                                                    ? "text-white"
                                                    : "text-[#007A55]"
                                            )} />
                                        </div>

                                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                                            {area.name}
                                        </h3>

                                        <p className="text-xs text-gray-400">
                                            {city}
                                        </p>
                                    </div>

                                    {/* Serial Number */}
                                    <div className="absolute top-2 right-2 text-[8px] font-mono text-gray-300">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Coverage Note */}
                        <div className="mt-8 p-5 border border-gray-200 bg-gray-50">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-[#007A55]/10 flex items-center justify-center flex-shrink-0">
                                    <Navigation className="h-4 w-4 text-[#007A55]" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                                        Mobile Service Coverage
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Our mobile units cover all Dubai areas with 30-minute response time guaranteed.
                                        Additional areas added regularly based on demand.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-80">
                        <div className="sticky top-8 space-y-5">
                            {/* Operating Hours */}
                            <div className="border border-gray-200 bg-white">
                                <div className="border-b border-gray-200 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-[#007A55]/10 flex items-center justify-center">
                                            <Clock className="h-4 w-4 text-[#007A55]" />
                                        </div>
                                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                            Operating Hours
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-5 space-y-2">
                                    {operatingHours.map((day, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0"
                                        >
                                            <span className="text-xs text-gray-500">{day.day}</span>
                                            <span className="text-xs font-medium text-[#007A55]">
                                                {day.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency Card */}
                            <div className="border border-gray-200 bg-white p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-[#007A55] flex items-center justify-center">
                                        <Zap className="h-4 w-4 text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                        Emergency Service
                                    </h3>
                                </div>
                                <p className="text-xs text-gray-500 mb-4">
                                    24/7 emergency response available across all service areas
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">Response time</span>
                                    <span className="text-sm font-medium text-[#007A55]">30 minutes</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Shield, text: "RTA Approved" },
                                    { icon: CheckCircle, text: "Licensed" },
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-gray-200 bg-white p-3 text-center">
                                        <item.icon className="h-4 w-4 text-[#007A55] mx-auto mb-1" />
                                        <span className="text-[10px] text-gray-500">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="max-w-2xl mx-auto border border-gray-200 bg-white p-8">
                        <h3 className="text-xl font-light text-gray-900 mb-2">
                            Don't See Your Area Listed?
                        </h3>

                        <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                            We're constantly expanding our coverage to serve every neighborhood in Dubai.
                            Contact us to check availability in your specific location.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-[#007A55] hover:bg-[#00943B] text-white h-12 px-6 text-sm font-medium tracking-wider rounded-none">
                                <MapPin className="mr-2 h-4 w-4" />
                                Check Coverage
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                className="border-[#007A55] text-[#007A55] hover:bg-[#007A55]/5 h-12 px-6 text-sm font-medium tracking-wider rounded-none"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] text-gray-400 tracking-wider">
                        * ALL AREAS IN {city.toUpperCase()} • 24/7 EMERGENCY COVERAGE • 30 MIN RESPONSE GUARANTEE
                    </p>
                </div>
            </div>
        </section>
    )
}