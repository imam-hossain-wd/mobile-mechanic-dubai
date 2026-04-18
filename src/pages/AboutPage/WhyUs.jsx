// components/why-us.tsx
import { 
  Zap, 
  Shield, 
  Clock, 
  DollarSign,
  MapPin,
  Phone,
  CheckCircle,
  Battery,
  Wrench,
  Wind,
  Gauge,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyUs() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
            <Shield className="h-4 w-4 text-[#007A55]" />
            <span className="text-sm font-semibold text-[#007A55]">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Dubai Drivers Trust{' '}
            <span className="text-[#007A55]">Saiful Car Repair</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We combine expertise, reliability, and transparency to deliver the best car care experience in Dubai
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Key Reasons */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Clock,
                  title: "24/7 Emergency Availability",
                  description: "Day or night, our team is ready to help with immediate roadside assistance across Dubai.",
                  color: "text-blue-500",
                  bgColor: "bg-blue-50"
                },
                {
                  icon: Zap,
                  title: "Fast Mobile Response",
                  description: "We reach your location quickly without the need for towing. Average response time: 30 mins.",
                  color: "text-amber-500",
                  bgColor: "bg-amber-50"
                },
                {
                  icon: Shield,
                  title: "Experienced Auto Technicians",
                  description: "Our certified mechanics have years of hands-on experience with all car makes and models.",
                  color: "text-green-500",
                  bgColor: "bg-green-50"
                },
                {
                  icon: DollarSign,
                  title: "Affordable & Transparent Pricing",
                  description: "No hidden costs. We provide upfront quotes and competitive rates for all services.",
                  color: "text-emerald-500",
                  bgColor: "bg-emerald-50"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`${item.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Benefits */}
            <div className="bg-gradient-to-r from-[#007A55]/5 to-[#00943B]/5 rounded-xl p-6 border border-[#007A55]/10">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#007A55]" />
                What Makes Us Different
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "No towing required - we come to you",
                  "Same-day car repair service",
                  "Genuine parts warranty",
                  "Free vehicle inspection",
                  "Certified professionals",
                  "Emergency support 24/7"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#007A55] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Service Areas & Contact */}
          <div className="space-y-6">
            {/* Service Areas Card */}
            <div className="bg-[#007A55] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Al Mankhool",
                  "Al Jafiliya", 
                  "Al Raffa",
                  "Al Satwa",
                  "Deira",
                  "Jumeirah 1",
                  "Dubai Marina",
                  "Downtown Dubai"
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm text-white/90">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/80 mb-4">
                And surrounding areas with 24/7 emergency support
              </p>
              <Button className="w-full bg-white text-[#007A55] hover:bg-gray-100 font-semibold">
                View All Service Areas
              </Button>
            </div>

            {/* Emergency Contact Card */}
            <div className="bg-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#007A55] p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Emergency Support</p>
                  <p className="text-2xl font-bold">+971 54 569 5980</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Available 24/7 for immediate assistance
              </p>
              <Button className="w-full bg-[#007A55] hover:bg-[#00943B] text-white font-semibold">
                Call Now for Immediate Help
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#007A55]">10K+</div>
                <div className="text-xs text-gray-600">Happy Customers</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-[#007A55]">4.9★</div>
                <div className="text-xs text-gray-600">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}