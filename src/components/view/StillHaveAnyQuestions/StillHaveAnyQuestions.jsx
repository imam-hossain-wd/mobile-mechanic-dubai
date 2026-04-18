

import { Button } from '@/components/ui/button'
import { Clock, Mail, Phone, ShieldCheck, Star, Zap, HelpCircle, ChevronRight, MessageCircle, Headphones } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

export default function StillHaveAnyQuestions() {
    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="w-[80%] mx-auto px-4">
                {/* Main Card - Architectural Style */}
                <div className="relative border border-gray-200 bg-white">
                    {/* Corner Frames */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#007A55]/30" />
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#007A55]/30" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#007A55]/30" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#007A55]/30" />

                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                linear-gradient(90deg, #007A55 1px, transparent 1px),
                                linear-gradient(0deg, #007A55 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                        {/* Header with Monospace Identifier */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />
                            <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">
                                Need Assistance?
                            </span>
                            <div className="w-8 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-4">
                            Still Have
                            <span className="block font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent mt-1">
                                Questions?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-500 text-center max-w-xl mx-auto mb-8 leading-relaxed">
                            Our expert team is ready to provide personalized answers and immediate assistance for your specific needs.
                        </p>

                        {/* Contact Options Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {/* Email Option */}
                            <div className="border border-gray-200 bg-white p-5 text-center group hover:border-[#007A55]/30 transition-colors">
                                <div className="w-12 h-12 bg-[#007A55]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#007A55] transition-colors">
                                    <Mail className="h-5 w-5 text-[#007A55] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h3>
                                <p className="text-xs text-gray-400 mb-3">24/7 Support</p>
                                <a
                                    href="mailto:support@24carservice.com"
                                    className="text-xs text-[#007A55] hover:text-[#00943B] inline-flex items-center gap-1"
                                >
                                    support@24carservice.com
                                    <ChevronRight className="h-3 w-3" />
                                </a>
                            </div>

                            {/* Phone Option */}
                            <div className="border border-gray-200 bg-white p-5 text-center group hover:border-[#007A55]/30 transition-colors">
                                <div className="w-12 h-12 bg-[#007A55]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#007A55] transition-colors">
                                    <Phone className="h-5 w-5 text-[#007A55] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h3>
                                <p className="text-xs text-gray-400 mb-3">Emergency Hotline</p>
                                <a
                                    href="tel:+971545695980"
                                    className="text-xs text-[#007A55] hover:text-[#00943B] inline-flex items-center gap-1"
                                >
                                    +971 54 569 5980
                                    <ChevronRight className="h-3 w-3" />
                                </a>
                            </div>

                            {/* WhatsApp Option */}
                            <div className="border border-gray-200 bg-white p-5 text-center group hover:border-[#007A55]/30 transition-colors">
                                <div className="w-12 h-12 bg-[#007A55]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#007A55] transition-colors">
                                    <MessageCircle className="h-5 w-5 text-[#007A55] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">WhatsApp</h3>
                                <p className="text-xs text-gray-400 mb-3">Fast Response</p>
                                <a
                                    href="https://wa.me/971545695980"
                                    className="text-xs text-[#007A55] hover:text-[#00943B] inline-flex items-center gap-1"
                                >
                                    Chat Now
                                    <ChevronRight className="h-3 w-3" />
                                </a>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                className="bg-[#007A55] hover:bg-[#00943B] text-white h-12 px-8 text-sm font-medium tracking-wider rounded-none min-w-[200px]"
                            >
                                <Headphones className="mr-2 h-4 w-4" />
                                Contact Support
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button
                                variant="outline"
                                className="border-[#007A55] text-[#007A55] hover:bg-[#007A55]/5 h-12 px-8 text-sm font-medium tracking-wider rounded-none min-w-[200px]"
                            >
                                <HelpCircle className="mr-2 h-4 w-4" />
                                View FAQs
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-gray-200">
                            {[
                                { icon: Zap, text: "24/7 Available", color: "text-[#007A55]" },
                                { icon: ShieldCheck, text: "Certified Experts", color: "text-[#00943B]" },
                                { icon: Clock, text: "Quick Response", color: "text-[#007A55]" },
                                { icon: Star, text: "Premium Service", color: "text-amber-500" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-[#007A55]/10 flex items-center justify-center">
                                        <item.icon className={cn("h-3 w-3", item.color)} />
                                    </div>
                                    <span className="text-xs text-gray-500">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Response Time Note */}
                        <div className="text-center mt-4">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                                Average Response Time: <span className="text-[#007A55]"> &lt; 30 minutes</span>
                            </p>
                        </div>
                    </div>

                    {/* Diagonal Accent */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#007A55]/5 to-transparent" />
                </div>
            </div>
        </section>
    )
}