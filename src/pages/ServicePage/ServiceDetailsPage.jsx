// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// import {
//   CheckCircle2,
//   Wrench,
//   Shield,
//   Clock,
//   MapPin,
//   Zap,
//   Droplet,
//   Settings,
//   Fan,
//   Phone,
//   MessageCircle,
//   ArrowRight,
//   Calendar
// } from 'lucide-react'
// import * as React from 'react'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'


// function ServiceDetailsPage({ service }) {
//   const getServiceIcon = React.useCallback(() => {
//     const serviceIcons = {
//       Battery: <Zap className="h-6 w-6" />,
//       AC: <Fan className="h-6 w-6" />,
//       Oil: <Droplet className="h-6 w-6" />,
//       Engine: <Settings className="h-6 w-6" />
//     }
//     const matchedIcon = Object.entries(serviceIcons).find(([key]) =>
//       service?.title?.includes(key)
//     )

//     return matchedIcon?.[1] ?? <Wrench className="h-6 w-6" />
//   }, [service?.title])


//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
//       {/* Hero Section with Background Image */}
//       <section className="relative min-h-[500px] flex items-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <Image
//             src={service?.service_image}
//             alt={service?.title || 'Car Service'}
//             fill
//             className="object-cover"
//             priority
//             quality={100}
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-slate-900/70"></div>
//           <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
//         </div>

//         {/* Content */}
//         <div className="container relative z-10 px-4 mx-auto">
//           <div className="max-w-3xl">
//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
//               {service?.title}
//             </h1>

//             {/* Subheading */}
//             <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
//               {service?.intro?.subheading || `Professional ${service?.title} service in Dubai by certified experts`}
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-4">
//               <Button
//                 size="lg"
//                 className="bg-primary text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-emerald-500/30"
//               >
//                 <Phone className="h-5 w-5 mr-2" />
//                 {service?.ctaSection?.buttonText || 'Book Now'}
//                 <ArrowRight className="h-5 w-5 ml-2" />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="text-white border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-6 text-lg font-semibold"
//               >
//                 <MessageCircle className="h-5 w-5 mr-2" />
//                 WhatsApp Us
//               </Button>
//             </div>

//             {/* Trust Indicators */}
//             <div className="flex flex-wrap items-center gap-2">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-1 text-white/80">
//                   <Clock className="h-4 w-4 text-emerald-400" />
//                   <span className="text-sm">30 min response</span>
//                 </div>
//                 <div className="flex items-center gap-1 text-white/80">
//                   <Shield className="h-4 w-4 text-emerald-400" />
//                   <span className="text-sm">12-month warranty</span>
//                 </div>
//                 <div className="flex items-center gap-1 text-white/80">
//                   <MapPin className="h-4 w-4 text-emerald-400" />
//                   <span className="text-sm">Mobile service</span>
//                 </div>
//               </div>
//             </div>

//             {/* Service Stats */}
//             <div className="grid grid-cols-3 gap-6 mt-2  pt-2 border-t border-white/20">
//               <div>
//                 <div className="text-2xl font-bold text-white">500+</div>
//                 <div className="text-sm text-white/60">Services Done</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-white">98%</div>
//                 <div className="text-sm text-white/60">Satisfaction Rate</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-white">24/7</div>
//                 <div className="text-sm text-white/60">Availability</div>
//               </div>
//             </div>
//           </div>
//         </div>




//       </section>

//       {/* Service Overview Card */}
//       <div className="container px-4 mx-auto -mt-8 relative z-20">
//         <Card className="shadow-xl rounded-2xl overflow-hidden border-0">
//           <div className="grid grid-cols-1 md:grid-cols-3">
//             <div className="md:col-span-2 p-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
//                   {getServiceIcon()}
//                 </div>
//                 <h2 className="text-2xl font-bold">{service?.intro?.heading || `Professional ${service?.title} Service`}</h2>
//               </div>
//               <p className="text-muted-foreground mb-6 leading-relaxed">{service?.intro?.content}</p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {service?.features?.map((feature, index) => (
//                   <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
//                     <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
//                     <p className="text-sm">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-emerald-50 p-8 flex flex-col justify-center">
//               <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center gap-3">
//                   <Clock className="h-5 w-5 text-emerald-600" />
//                   <span className="text-sm">Typically 1-2 hours</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Shield className="h-5 w-5 text-emerald-600" />
//                   <span className="text-sm">12-month warranty</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <MapPin className="h-5 w-5 text-emerald-600" />
//                   <span className="text-sm">Mobile service available</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Calendar className="h-5 w-5 text-emerald-600" />
//                   <span className="text-sm">Same-day booking</span>
//                 </li>
//               </ul>

//               <Button className="mt-6 w-full bg-primary text-white" size="lg">
//                 Book Now
//                 <ArrowRight className="h-4 w-4 ml-2" />
//               </Button>
//             </div>
//           </div>
//         </Card>
//       </div>

//       {/* Rest of your existing code remains the same */}
//       <div className="container px-4 mx-auto py-16">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* Why Choose Us */}
//             <section>
//               <h2 className="text-3xl font-bold mb-8">{service?.whyChooseUs?.heading || `Why Choose Us for ${service?.title}`}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {service?.whyChooseUs?.points.map((point, index) => (
//                   <div
//                     key={index}
//                     className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
//                         {index % 3 === 0 ? <Wrench className="h-5 w-5" /> :
//                           index % 3 === 1 ? <Shield className="h-5 w-5" /> :
//                             <CheckCircle2 className="h-5 w-5" />}
//                       </div>
//                       <p className="font-medium">{point.replace('✅', '').trim()}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Process Timeline */}
//             <section>
//               <h2 className="text-3xl font-bold mb-8">{service?.ourProcess?.heading || 'Our Service Process'}</h2>
//               <div className="relative">
//                 <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-emerald-500 to-transparent" />

//                 <div className="space-y-10">
//                   {service?.ourProcess?.steps.map((step, index) => (
//                     <div key={index} className="relative pl-16">
//                       <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold border-4 border-white">
//                         {index + 1}
//                       </div>

//                       <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
//                         <h3 className="text-xl font-semibold mb-2">{step?.title}</h3>
//                         <p className="text-gray-600">{step.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//             {/* FAQ */}
//             <section>
//               <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
//               <Accordion type="single" collapsible className="w-full space-y-2">
//                 {service?.faq?.map((item, index) => (
//                   <div key={index}>
//                     <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 hover:bg-gray-100">
//                         <span className="text-left font-medium">{item.question}</span>
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 text-gray-600">
//                         {item.answer}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </div>
//                 ))}
//               </Accordion>
//             </section>
//           </div>

//           {/* Right Column - Sticky Sidebar */}
//           <div className="lg:w-1/3 space-y-6">
//             {/* Service Coverage Card */}
//             <div className="sticky top-6">
//               <Card className="border border-gray-200 bg-white/90 backdrop-blur-sm">
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2 text-xl">
//                     <MapPin className="h-5 w-5 text-emerald-600" />
//                     {service?.serviceCoverage?.heading || 'Service Coverage'}
//                   </CardTitle>
//                   <p className="text-sm text-gray-600">
//                     {service?.serviceCoverage?.note || 'We serve all major areas in Dubai'}
//                   </p>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     {service?.serviceCoverage?.locations?.map((location, index) => (
//                       <div key={index} className="flex items-center gap-3">
//                         <div className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500" />
//                         <span className="text-sm">
//                           {location.replace('📍', '').trim()}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Floating CTA Card */}
//               <div className="mt-6">
//                 <Card className="bg-emerald-50 border-2 shadow-2xl">
//                   <CardHeader>
//                     <CardTitle className="text- text-xl">
//                       Ready to Book?
//                     </CardTitle>
//                     <p className="">
//                       Get your {service?.title?.toLowerCase()} service today with 24/7 availability
//                     </p>
//                   </CardHeader>
//                   <CardContent className="space-y-3">
//                     <Button
//                       // variant="secondary"
//                       size="lg"
//                       className="w-full font-bold bg-primary text-white"
//                     >
//                       <Phone className="h-4 w-4 mr-2" />
//                       Call Now
//                     </Button>
//                     <Button
//                       // variant="outline"
//                       size="lg"
//                       className="w-full font-bold "
//                     >
//                       <MessageCircle className="h-4 w-4 mr-2" />
//                       WhatsApp
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServiceDetailsPage;


import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  CheckCircle2,
  Wrench,
  Shield,
  Clock,
  MapPin,
  Zap,
  Droplet,
  Settings,
  Fan,
  Phone,
  MessageCircle,
  ArrowRight,
  Calendar,
  Star,
  Award,
  Users,
  ThumbsUp,
  Cog,
  Battery,
  Wind,
  Gauge,
  Car,
  Sparkles,
  HeadphonesIcon,
  Truck
} from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { SiteConfig } from '@/config/site'

function ServiceDetailsPage({ service }) {

  const getServiceIcon = React.useCallback(() => {
    const serviceIcons = {
      Battery: <Battery className="h-6 w-6" />,
      AC: <Wind className="h-6 w-6" />,
      Oil: <Droplet className="h-6 w-6" />,
      Engine: <Settings className="h-6 w-6" />,
      Brake: <Cog className="h-6 w-6" />,
      Transmission: <Gauge className="h-6 w-6" />,
      Detailing: <Sparkles className="h-6 w-6" />,
      Repair: <Wrench className="h-6 w-6" />
    }
    const matchedIcon = Object.entries(serviceIcons).find(([key]) =>
      service?.title?.includes(key)
    )
    return matchedIcon?.[1] ?? <Wrench className="h-6 w-6" />
  }, [service?.title])

  // Sample data structure - replace with actual data
  const serviceData = {
    title: service?.title || "Professional Car Service",
    subheading: service?.intro?.subheading || `Expert ${service?.title} service in Dubai by certified mechanics`,
    description: service?.intro?.content || "Professional automotive care with transparent pricing and guaranteed satisfaction.",
    features: service?.features || [
      "Comprehensive diagnostic check",
      "Genuine parts replacement",
      "Professional installation",
      "Post-service testing",
      "12-month warranty included",
      "Free pickup & delivery"
    ],
    whyChoosePoints: service?.whyChooseUs?.points || [
      "RTA certified mechanics with 10+ years experience",
      "State-of-the-art diagnostic equipment",
      "Transparent pricing with no hidden fees",
      "Same-day service available",
      "Genuine parts warranty",
      "100% satisfaction guarantee"
    ],
    processSteps: service?.ourProcess?.steps || [
      {
        title: "Book Your Service",
        description: "Schedule online, via WhatsApp, or phone call. We'll confirm within 15 minutes."
      },
      {
        title: "Free Inspection",
        description: "Our expert mechanics arrive at your location and perform thorough diagnostics."
      },
      {
        title: "Get Approval",
        description: "We provide detailed quote with options. You approve before work begins."
      },
      {
        title: "Expert Service",
        description: "Professional repair with genuine parts. We keep you updated throughout."
      },
      {
        title: "Quality Check",
        description: "Multi-point inspection to ensure everything works perfectly."
      }
    ],
    faq: service?.faq || [
      {
        question: "How long does the service take?",
        answer: "Most services take 1-2 hours depending on the complexity. We'll provide an accurate timeframe during booking."
      },
      {
        question: "Do you provide warranty?",
        answer: "Yes, all our services come with a 12-month warranty on parts and labor for your peace of mind."
      },
      {
        question: "Can you come to my location?",
        answer: "Absolutely! We're a mobile service and come to your home, office, or anywhere in Dubai."
      },
      {
        question: "Are your mechanics certified?",
        answer: "All our mechanics are RTA certified with minimum 5 years of experience in luxury and regular vehicles."
      }
    ]
    // coverage: service?.serviceCoverage?.locations || [
    //   "DIFC", "Business Bay", "Downtown Dubai", "Jumeirah",
    //   "Dubai Marina", "Emirates Hills", "The Palm", "Al Barsha"
    // ]
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Professional Overlay */}
        <div className="absolute inset-0">
          <Image
            src={service?.service_image || "/images/service-hero.jpg"}
            alt={serviceData.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              {getServiceIcon()}
              <span className="text-sm font-medium text-emerald-400">
                Professional Service
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {serviceData.title}
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-2xl">
              {serviceData.subheading}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="p-1 bg-emerald-500/10 rounded-lg">
                  <Clock className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm text-white/80">30-min response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-emerald-500/10 rounded-lg">
                  <Shield className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm text-white/80">12-month warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 bg-emerald-500/10 rounded-lg">
                  <Truck className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm text-white/80">Mobile service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={SiteConfig.numberCallLink}>
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-emerald-500/25"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href={SiteConfig.whatsappCallLink} target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Services Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/60">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Card - Floating Design */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2 p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl text-white shadow-lg">
                    {getServiceIcon()}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service?.intro?.heading || `Professional ${serviceData.title} Service`}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">By certified expert mechanics</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {serviceData.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="p-1 bg-emerald-100 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 md:p-10 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Service Details</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                    <div className="p-2 bg-white rounded-lg">
                      <Clock className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900">1-2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                    <div className="p-2 bg-white rounded-lg">
                      <Shield className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Warranty</p>
                      <p className="font-semibold text-gray-900">12 months</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                    <div className="p-2 bg-white rounded-lg">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Service Type</p>
                      <p className="font-semibold text-gray-900">Mobile / Onsite</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                    <div className="p-2 bg-white rounded-lg">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Booking</p>
                      <p className="font-semibold text-gray-900">Same-day available</p>
                    </div>
                  </div>
                </div>

                <Link href="/booking">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg">
                    Book This Service
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column - Main Content */}
            <div className="lg:w-2/3 space-y-12">

              {/* Why Choose Us Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Why Choose Us
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceData.whyChoosePoints.map((point, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                          {index % 3 === 0 ? (
                            <Users className="h-5 w-5 text-emerald-600" />
                          ) : index % 3 === 1 ? (
                            <Shield className="h-5 w-5 text-emerald-600" />
                          ) : (
                            <ThumbsUp className="h-5 w-5 text-emerald-600" />
                          )}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Settings className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Process
                  </h2>
                </div>

                <div className="space-y-6">
                  {serviceData.processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald-200 transition-all"
                    >
                      {/* Step Number */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl text-white font-bold text-xl flex items-center justify-center shadow-lg">
                        {index + 1}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <HeadphonesIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {serviceData.faq.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                    >
                      <AccordionTrigger className="hover:no-underline px-6 py-4 hover:bg-gray-50 transition-colors">
                        <span className="text-left font-semibold text-gray-900">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">

                {/* Coverage Card */}
                <Card className="border border-gray-200 rounded-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <MapPin className="h-5 w-5" />
                      Service Coverage
                    </CardTitle>
                    <p className="text-sm text-white/90">
                      We serve all major areas in Dubai
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-3">
                      {SiteConfig.serviceAreas.map((location, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-sm text-gray-700">{location.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        Free mobile service to your location
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking CTA Card */}
                <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-2xl">
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Calendar className="h-6 w-6" />
                      Ready to Book?
                    </CardTitle>
                    <p className="text-white/90">
                      Get your {serviceData.title.toLowerCase()} service today with our 24/7 availability
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 space-y-3">
                    <Link href={SiteConfig.numberCallLink}>
                      <Button
                        size="lg"
                        className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-6 text-lg"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Button>
                    </Link>

                    <Link href={SiteConfig.whatsappCallLink} target="_blank">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white/10 py-6 text-lg"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        WhatsApp Us
                      </Button>
                    </Link>

                    <p className="text-xs text-white/70 text-center mt-4">
                      ✓ 30-min response • ✓ 12-month warranty • ✓ Free inspection
                    </p>
                  </CardContent>
                </Card>

                {/* Trust Badge */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.9 (500+ reviews)</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-emerald-500" />
                    <span>RTA Certified & Fully Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert mechanics are just a phone call away. 24/7 emergency service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={SiteConfig.numberCallLink}>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
              >
                <Phone className="h-5 w-5 mr-2" />
                Emergency Call
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailsPage;