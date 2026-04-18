// components/view/GetTouch/GetTouch.tsx
import React from 'react'
import { Mail, MapPin, Phone, Clock, MessageCircle, Award } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function GetTouch() {
  return (
    <section 
      className="relative py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#007A55]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00943B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - SEO Optimized */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-[#007A55]" />
            <span className="text-sm font-semibold text-[#007A55]">30 MINUTE ARRIVAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" itemProp="name">
            Get In <span className="text-[#007A55]">Touch</span> With Us
          </h2>
          <p className="text-gray-600 text-lg" itemProp="description">
            Looking for a reliable <strong>mobile mechanic in Dubai</strong>? Our team is on standby 24/7 to provide emergency car repairs, battery changes, and diagnostics at your location.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left Content - Contact Info Cards */}
          <div className='space-y-6'>
            {/* Branding Card */}
            <div className="bg-gradient-to-r from-[#007A55] to-[#00943B] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-emerald-200" />
                <div>
                  <h3 className="text-xl font-bold">Car Repair Mobile Mechanic Dubai</h3>
                  <p className="text-white/90 text-sm">Professional 24/7 Roadside Assistance</p>
                </div>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                We are Dubai's trusted experts for <strong>on-site car services</strong>. From luxury sedans to SUVs, we bring certified tools and genuine parts directly to your doorstep or roadside.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card - Primary CTA */}
              <Link href="tel:+971552330721" className="block group">
                <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                      <Phone className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">Call Emergency Mechanic</h3>
                      <p className="text-xl font-bold text-[#007A55]" itemProp="telephone">+971 55 233 0721</p>
                      <p className="text-sm text-gray-600 mt-1">Available 24/7 for immediate dispatch</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* WhatsApp Card */}
              <Link href="https://wa.me/971552330721" target="_blank" className="block group">
                <div className="relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                      <MessageCircle className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">WhatsApp Location</h3>
                      <p className="text-xl font-bold text-[#007A55]">+971 55 233 0721</p>
                      <p className="text-sm text-gray-600 mt-1">Send your location for 30-min arrival</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Location Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                    <MapPin className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                  </div>
                  <div className="flex-1" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <h3 className="text-lg font-semibold text-gray-900">Our Service Hub</h3>
                    <p className="text-gray-600" itemProp="streetAddress">99 Sheikh Zayed Rd - Trade Center, Dubai, UAE</p>
                    <p className="text-sm text-[#007A55] mt-1 font-medium">Serving Downtown, Marina, JLT & more</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                    <Clock className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-xl font-bold text-[#007A55]" itemProp="openingHours" content="Mo-Su 00:00-23:59">Open 24 Hours</p>
                    <p className="text-sm text-gray-600 mt-1">Saturday to Friday - Non-stop Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <Card className="border-0 bg-white shadow-xl rounded-2xl overflow-hidden sticky top-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#007A55] to-[#00943B]"></div>
            <CardHeader className="pb-4 text-center pt-8">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Get an Instant Quote
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Fill the form for <strong>on-site car repair</strong> prices
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Name</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#007A55] outline-none" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone</label>
                    <input type="tel" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-[#007A55] outline-none" placeholder="+971" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Service Needed</label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#007A55]">
                    <option value="">Select Service</option>
                    <option value="battery">Mobile Battery Replacement</option>
                    <option value="jumpstart">Emergency Jump Start</option>
                    <option value="repair">General On-site Repair</option>
                    <option value="ac">Car AC Repair Dubai</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Dubai Location</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#007A55]" placeholder="e.g. Dubai Marina" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea rows={3} className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-[#007A55] resize-none" placeholder="Describe car model & issue..."></textarea>
                </div>

                <Button className="w-full h-12 text-lg bg-[#007A55] hover:bg-[#00943B] text-white font-semibold rounded-lg shadow-lg" size="lg">
                  Send Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}