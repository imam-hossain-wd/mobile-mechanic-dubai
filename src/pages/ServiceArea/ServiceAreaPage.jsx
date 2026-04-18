import ServiceAreas from "@/components/view/ServiceArea/ServiceAreas";
import { Button } from "@/components/ui/button";
import AreasHero from "@/components/view/Hero/AreasHero";
import { Clock, MapPin, ShieldCheck, Phone, Calendar, Star, CheckCircle2, Award, Users, Wrench, Zap, HeadphonesIcon, Truck } from "lucide-react";

export default function ServiceAreaPage() {
  return (
    <section>
      <main className="bg-white">
        <AreasHero />
        <section className="py-8">
          <div className="container mx-auto px-4">
            <ServiceAreas />
          </div>
        </section>
        <WhyChooseUs />
        <EmergencyCTA />
      </main>
    </section>
  );
}




import Link from "next/link";
import { SiteConfig } from "@/config/site";

// Section 1: Why Choose Us - Premium Redesign
function WhyChooseUs() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Round-the-clock assistance for any car emergency. We're always here when you need us.",
      stats: "30 min avg response",
      gradient: "from-amber-400 to-orange-500",
      bgLight: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
      statIcon: Zap
    },
    {
      icon: MapPin,
      title: "Dubai-Wide Coverage",
      description: "Serving all major areas from DIFC to Jumeirah, Business Bay to Downtown.",
      stats: "25+ locations",
      gradient: "from-emerald-400 to-green-500",
      bgLight: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      statIcon: MapPin
    },
    {
      icon: ShieldCheck,
      title: "RTA Certified Experts",
      description: "Our mechanics are fully licensed, insured, and committed to excellence.",
      stats: "5000+ happy clients",
      gradient: "from-purple-400 to-indigo-500",
      bgLight: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      statIcon: Users
    },
    {
      icon: Wrench,
      title: "Mobile Service",
      description: "We bring the workshop to you. Service at your home, office, or roadside.",
      stats: "100% mobile",
      gradient: "from-blue-400 to-cyan-500",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      statIcon: Truck
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,122,85,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Drivers Trust Us</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00943B]">
                24 Car Service Dubai?
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-0 rounded-lg"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Experience premium mobile mechanic service with unmatched reliability and expertise
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const StatIcon = benefit.statIcon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon with Gradient Background */}
                <div className="relative mb-5">
                  <div className={`absolute inset-0 ${benefit.bgLight} rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`relative w-16 h-16 ${benefit.bgLight} rounded-xl flex items-center justify-center border-2 ${benefit.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Stat Badge */}
                <div className="flex items-center gap-2 text-xs font-medium">
                  <div className={`p-1 ${benefit.bgLight} rounded-md`}>
                    <StatIcon className={`w-3 h-3 ${benefit.iconColor}`} />
                  </div>
                  <span className="text-gray-700">{benefit.stats}</span>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r ${benefit.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200">
          {[
            { icon: Award, text: "Licensed & Insured" },
            { icon: CheckCircle2, text: "12-Month Warranty" },
            { icon: Users, text: "Expert Mechanics" },
            { icon: Clock, text: "30-Min Response" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function EmergencyCTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-[#008f5f] to-[#00943B] text-white overflow-hidden">
      {/* Premium Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-emerald-300/10 rounded-full blur-3xl"></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-40 right-[20%] w-3 h-3 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-[25%] w-4 h-4 bg-white/10 rounded-full"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-white/90">Emergency Service Available 24/7</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Need Car Help{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                Right Now?
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-400/30 rounded-full"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're stranded on the road or need immediate service at your location,
            our expert mechanics are ready to help — anytime, anywhere in Dubai.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">30 min</div>
                <div className="text-xs text-white/70">Avg Response</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <HeadphonesIcon className="w-5 h-5 text-amber-300" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">24/7</div>
                <div className="text-xs text-white/70">Support</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <MapPin className="w-5 h-5 text-amber-300" />
              </div>
              <div className="text-left">
                <div className="text-xl font-bold">25+</div>
                <div className="text-xs text-white/70">Locations</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={SiteConfig.numberCallLink}>
              <Button
                size="lg"
                className="group relative px-8 py-6 text-lg bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Emergency Call
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </Button>
            </Link>

            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-white/60 mt-6 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            No hidden fees • Free inspection • Genuine parts
          </p>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}

