// import React from 'react'
// import { Mail, MapPin, Phone, Clock, MessageCircle, Star, Shield, Zap } from 'lucide-react'
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// export default function GetTouch() {
//   return (
//     <section className="relative py-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
//       </div>

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.02]">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `linear-gradient(#000 1px, transparent 1px),
//                           linear-gradient(90deg, #000 1px, transparent 1px)`,
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Left Content */}
//           <div className='space-y-5'>
//             {/* Header */}
//             <div className="text-center lg:text-left">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
//                 <MessageCircle className="h-4 w-4 text-primary" />
//                 <span className="text-sm font-medium text-primary">24/7 Support</span>
//               </div>

//               <h2 className="text-4xl font-bold  md:text-5xl mb-2">
//                 <span className="bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   Get In{" "}
//                 </span>
//                 <span className="text-primary">Touch</span>
//               </h2>

//               <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-lg">
//                 Ready to experience premium car service? Our expert team is available 24/7 to provide immediate assistance and personalized solutions.
//               </p>
//             </div>

//             {/* Contact Info Cards */}
//             <div className="space-y-3">

//               <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/40 p-2 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
//                 <div className="flex justify-center items-start gap-4">
//                   <div className="rounded-xl bg-primary/10 p-2 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mt-3">
//                     <MapPin className="h-6 w-6 text-primary group-hover:text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-md font-semibold text-gray-900 ">Our Location</h3>
//                     <p className="text-gray-600 text-sm">Al Mankhool, Dubai, UAE</p>
//                     <p className="text-xs text-gray-500 mt-1">Mobile service across all Dubai areas</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/40 p-3 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-xl bg-primary/10 p-2 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mt-3">
//                     <Mail className="h-6 w-6 text-primary group-hover:text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-md font-semibold text-gray-900 ">Email Us</h3>
//                     <p className="text-gray-600 text-sm">24carservicedubai@gmail.com</p>
//                     <p className="text-xs text-gray-500 mt-1">Typically respond within 1 hour</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/40 p-3 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
//                 <div className="flex items-start gap-4">
//                   <div className="rounded-xl bg-primary/10 p-2 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mt-3">
//                     <Phone className="h-6 w-6 text-primary group-hover:text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-md font-semibold text-gray-900">Call Us</h3>
//                     <p className="text-gray-600 text-sm">+971 54 569 5980</p>
//                     <p className="text-xs text-gray-500 mt-1">24/7 Emergency Support Available</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Contact Form Card */}
//           <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
//             <CardHeader className="pb-4 text-center">
//               <div className="flex items-center justify-center gap-3 mb-2">
//                 <div className="p-2 bg-primary/10 rounded-xl">
//                   <MessageCircle className="h-5 w-5 text-primary" />
//                 </div>
//                 <CardTitle className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent ">
//                   Send Us a Message
//                 </CardTitle>
//               </div>
//               <p className="text-gray-600 text-sm">
//                 Fill out the form below and we'll get back to you within 30 minutes
//               </p>
//             </CardHeader>
//             <CardContent className="-mt-3">
//               <form className="space-y-3">
//                 <div className="grid gap-5 md:grid-cols-2">
//                   <div className="space-y-2">
//                     <label className="block text-sm font-semibold text-gray-700">Full Name</label>
//                     <input 
//                       type="text" 
//                       className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
//                     <input 
//                       type="tel" 
//                       className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
//                       placeholder="+971 XX XXX XXXX"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-700">Email Address</label>
//                   <input 
//                     type="email" 
//                     className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200" 
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-700">Message</label>
//                   <textarea 
//                     rows={4}
//                     className="w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none" 
//                     placeholder="Tell us about your car issue or service needs..."
//                   ></textarea>
//                 </div>

//                 <Button 
//                   className="w-full h-12 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
//                   size="lg"
//                 >
//                   <MessageCircle className="mr-3 h-5 w-5" />
//                   Send Message
//                 </Button>

//                 <p className="text-center text-xs text-gray-500">
//                   By submitting, you agree to our privacy policy and terms of service
//                 </p>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }

import React from 'react'
import { Mail, MapPin, Phone, Clock, MessageCircle, Star, Shield, Zap, ChevronRight, Send, Navigation, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { SiteConfig } from '@/config/site';

export default function GetTouch() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[12.5%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[25%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[37.5%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[50%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[62.5%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[75%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[87.5%]" />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-2 border-[#007A55]/10 rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border-2 border-[#00943B]/10 rounded-full -translate-x-1/4 translate-y-1/4" />

        {/* Diagonal Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #007A55 0px, #007A55 1px, transparent 1px, transparent 30px)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />
            <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">
              Connect With Us
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            Ready to Experience
            <span className="block font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent mt-2">
              Premium Automotive Care
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-4 tracking-wide">
            Our expert team is available 24/7 for immediate assistance and professional car repair services across Dubai.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Quick Response Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#007A55]/5 border border-[#007A55]/20">
              <Zap className="h-4 w-4 text-[#007A55]" />
              <span className="text-xs font-mono text-[#007A55] tracking-wider">30 MINUTE RESPONSE TIME</span>
            </div>

            {/* Contact Info Grid */}
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Visit Our Location",
                  lines: ["99 Sheikh Zayed Rd - Trade Center", "Dubai - United Arab Emirates"],
                  extra: "On-site and mobile service available",
                  color: "#007A55"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["mobilemechancidxb@gmail.com"],
                  extra: "Typically respond within 1 hour",
                  color: "#00943B"
                },
                {
                  icon: Phone,
                  title: "Call Us 24/7",
                  lines: ["+971 55 233 0721"],
                  extra: "Emergency roadside support",
                  color: "#007A55"
                }
              ].map((item, idx) => (
                <div key={idx} className="group border border-gray-200 bg-white p-6 hover:border-[#007A55]/30 transition-colors">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-[#007A55]/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-[#007A55]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                        {item.title}
                      </h3>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-sm text-gray-600 leading-relaxed">
                          {line}
                        </p>
                      ))}
                      <p className="text-xs text-gray-400 mt-2">{item.extra}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Operating Hours Card */}
            <div className="border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#00943B]/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-[#00943B]" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Operating Hours
                </h3>
              </div>

              <div className="space-y-2">
                {[
                  { day: "Saturday - Friday", hours: "Open 24 Hours" },
                  { day: "Service Area", hours: "All Over Dubai" },
                  { day: "Emergency", hours: "24/7 Available", highlight: true }
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                    <span className={cn(
                      "text-xs",
                      schedule.highlight ? "text-[#007A55] font-medium" : "text-gray-500"
                    )}>
                      {schedule.day}
                    </span>
                    <span className={cn(
                      "text-xs font-medium",
                      schedule.highlight ? "text-[#007A55]" : "text-gray-900"
                    )}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { icon: Shield, text: "Professional Service" },
                { icon: Star, text: "Top Rated Mechanic" },
                { icon: MessageCircle, text: "24/7 Support" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#007A55]/10 flex items-center justify-center">
                    <item.icon className="h-3 w-3 text-[#007A55]" />
                  </div>
                  <span className="text-xs text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="border border-gray-200 bg-white">
            {/* Form Header */}
            <div className="border-b border-gray-200 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#007A55] flex items-center justify-center">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Send us a message</h3>
                  <p className="text-xs text-gray-500 mt-1">We'll respond within 30 minutes</p>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-6">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:border-[#007A55] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:border-[#007A55] transition-colors"
                      placeholder="+971 55 233 0721"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:border-[#007A55] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Service Required
                  </label>
                  <select className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:border-[#007A55] transition-colors">
                    <option>Select a service</option>
                    <option>Battery Replacement</option>
                    <option>AC Repair & Cooling</option>
                    <option>Engine Diagnostics</option>
                    <option>Brake & Suspension</option>
                    <option>Emergency Jump Start</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:border-[#007A55] transition-colors resize-none"
                    placeholder="Tell us about your car issue or service needs..."
                  />
                </div>

                {/* Quick Options */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="emergency" className="w-4 h-4 accent-[#007A55]" />
                    <label htmlFor="emergency" className="text-xs text-gray-500">Emergency</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="callback" className="w-4 h-4 accent-[#007A55]" />
                    <label htmlFor="callback" className="text-xs text-gray-500">Request callback</label>
                  </div>
                </div>

                <Button
                  className="w-full h-12 bg-[#007A55] hover:bg-[#00943B] text-white rounded-none text-sm font-medium tracking-wider"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href="https://wa.me/971552330721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-medium text-gray-700 hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                    WhatsApp
                  </a>
                  <a
                    href={SiteConfig?.directionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#007A55]/5 border border-[#007A55]/20 text-xs font-medium text-gray-700 hover:bg-[#007A55]/10 transition-colors"
                  >
                    <Navigation className="h-4 w-4 text-[#007A55]" />
                    Directions
                  </a>
                </div>

                <p className="text-center text-[10px] text-gray-400 pt-2">
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#007A55]" />
              <span className="text-xs text-gray-500">Professional Mobile Mechanic Dubai</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400">24/7 Hotline:</span>
              <a href="tel:+971552330721" className="text-sm font-medium text-[#007A55] hover:text-[#00943B]">
                +971 55 233 0721
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}