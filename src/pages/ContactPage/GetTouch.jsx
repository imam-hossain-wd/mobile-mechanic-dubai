// components/view/GetTouch/GetTouch.tsx
import React from 'react'
import { Mail, MapPin, Phone, Clock, MessageCircle, Award } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GetTouch() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#007A55]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00943B]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                          linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-[#007A55]" />
            <span className="text-sm font-semibold text-[#007A55]">24/7 AVAILABLE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#007A55]">Touch</span> With Us
          </h2>
          <p className="text-gray-600 text-lg">
            Need fast and reliable car repair in Dubai? We're here 24/7 to assist you anywhere in the city.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left Content - Contact Info Cards */}
          <div className='space-y-6'>
            {/* Dual Brand Info */}
            <div className="bg-gradient-to-r from-[#007A55] to-[#00943B] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">Saiful Car Repair & Battery Fixing Dubai</h3>
                  <p className="text-white/90 text-sm">operating as 24 Car Service Dubai</p>
                </div>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                We provide professional mobile car repair services across Dubai with 24/7 emergency support.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                    <MapPin className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Al Mankhool, Dubai, United Arab Emirates</p>
                    <p className="text-sm text-[#007A55] mt-1 font-medium">Mobile service across all Dubai areas</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                    <Phone className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Call Us 24/7</h3>
                    <p className="text-xl font-bold text-[#007A55]">+971 54 569 5980</p>
                    <p className="text-sm text-gray-600 mt-1">Emergency roadside assistance available</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                    <MessageCircle className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-xl font-bold text-[#007A55]">+971 54 569 5980</p>
                    <p className="text-sm text-gray-600 mt-1">Quick response within 5 minutes</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 p-5 hover:border-[#007A55] transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#007A55]/10 p-3 group-hover:bg-[#007A55] transition-all duration-300">
                    <Mail className="h-6 w-6 text-[#007A55] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-xl font-bold text-[#007A55]">24carservicedubai@gmail.com</p>
                    <p className="text-sm text-gray-600 mt-1">Typically respond within 1 hour</p>
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
                    <p className="text-xl font-bold text-[#007A55]">Open 24 Hours</p>
                    <p className="text-sm text-gray-600 mt-1">Saturday to Friday - 24/7 Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <Card className="border-0 bg-white shadow-xl rounded-2xl overflow-hidden sticky top-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#007A55] to-[#00943B]"></div>
            <CardHeader className="pb-4 text-center pt-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="p-2 bg-[#007A55]/10 rounded-xl">
                  <MessageCircle className="h-5 w-5 text-[#007A55]" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </CardTitle>
              </div>
              <p className="text-gray-600 text-sm">
                Fill out the form below and we'll get back to you within 30 minutes
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#007A55]/20 focus:border-[#007A55] transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#007A55]/20 focus:border-[#007A55] transition-all duration-200"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#007A55]/20 focus:border-[#007A55] transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Service Needed</label>
                  <select className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#007A55]/20 focus:border-[#007A55] transition-all duration-200">
                    <option value="">Select a service</option>
                    <option value="battery">Car Battery Replacement</option>
                    <option value="jumpstart">Emergency Jump Start</option>
                    <option value="ac">AC Repair</option>
                    <option value="oil">Engine Oil Change</option>
                    <option value="brake">Brake Repair</option>
                    <option value="other">Other Service</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Your Location in Dubai</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#007A55]/20 focus:border-[#007A55] transition-all duration-200"
                    placeholder="e.g., Al Mankhool, Dubai Marina"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-2.5 focus:ring-2 focus:ring-[#007A55]/20 focus:border-[#007A55] transition-all duration-200 resize-none"
                    placeholder="Tell us about your car issue..."
                  ></textarea>
                </div>

                <Button
                  className="w-full h-12 text-lg bg-[#007A55] hover:bg-[#00943B] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>

                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}