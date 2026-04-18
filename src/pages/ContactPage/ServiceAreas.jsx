// components/view/ServiceArea/ServiceAreas.tsx
"use client"
import { Button } from '@/components/ui/button'
import { SiteConfig } from '@/config/site';
import { MapPin, Clock, Phone, Zap } from 'lucide-react'
import { useState } from 'react';
import Link from 'next/link';

export default function ServiceAreas() {
    const { serviceAreas, city, country, operatingHours } = SiteConfig;
    const [selectedArea, setSelectedArea] = useState("");
    const stats = [
        { value: '15min', label: 'Avg. Response Time' },
        { value: '24/7', label: 'Service Available' },
        { value: '100%', label: 'Coverage in Dubai' }
    ];

    const selectedAreaData = serviceAreas.find(a => a.slug === selectedArea);

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-12 md:py-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#007A55]/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
                        <Zap className="w-4 h-4 text-[#007A55]" />
                        <span className="text-sm font-medium text-[#007A55]">
                            24/7 Emergency Service Coverage
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Serving Every Corner of <span className="text-[#007A55]">{city}</span>
                    </h2>

                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We proudly serve customers across Dubai including Al Mankhool, Deira, Jumeirah, 
                        Dubai Marina, Downtown Dubai, and nearby areas with our mobile car repair service.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Service Areas Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {serviceAreas.map((area, index) => (
                                <Link href={area.href}
                                    key={area.slug}
                                    // onClick={() => setSelectedArea(area.slug)}
                                    className={`relative overflow-hidden p-4 rounded-xl bg-white border transition-all duration-300 cursor-pointer ${
                                        selectedArea === area.slug 
                                            ? 'border-[#007A55] shadow-lg' 
                                            : 'border-gray-200 hover:border-[#007A55]/50'
                                    }`}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`p-2 rounded-lg mb-2 ${
                                            selectedArea === area.slug 
                                                ? 'bg-[#007A55]' 
                                                : 'bg-[#007A55]/10'
                                        }`}>
                                            <MapPin className={`w-4 h-4 ${
                                                selectedArea === area.slug 
                                                    ? 'text-white' 
                                                    : 'text-[#007A55]'
                                            }`} />
                                        </div>
                                        <h3 className="font-semibold text-sm text-gray-900">
                                            {area.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {city} , UAE
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-96">
                        <div className="sticky top-8 space-y-4">
                            {/* Operating Hours */}
                            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 bg-[#007A55]/10 rounded-lg">
                                        <Clock className="w-4 h-4 text-[#007A55]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Operating Hours</h3>
                                </div>

                                <div className="space-y-2">
                                    {operatingHours.map((day, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
                                        >
                                            <span className="text-gray-600 text-sm">{day.day}</span>
                                            <span className="inline-flex items-center gap-1 bg-[#007A55]/10 text-[#007A55] text-xs font-medium px-2 py-1 rounded-full">
                                                <Zap className="w-3 h-3" />
                                                {day.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-2">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                                        <div className="text-lg font-bold text-[#007A55]">{stat.value}</div>
                                        <div className="text-xs text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-10 md:mt-12">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        Don't See Your Area Listed?
                    </h3>

                    <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                        We're constantly expanding our coverage to serve every neighborhood in Dubai.
                        Contact us to check availability in your specific location.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="px-6 py-4 text-base bg-[#007A55] hover:bg-[#00943B] text-white font-semibold">
                            <MapPin className="w-4 h-4 mr-2" />
                            Check Your Area Coverage
                        </Button>

                        <Link
                            href="https://wa.me/971545695980"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="px-6 py-4 text-base border-2 border-[#007A55] text-[#007A55] hover:bg-[#007A55] hover:text-white transition-all duration-300"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                WhatsApp Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}