// components/why-choose-us.tsx
import { 
  Battery,
  Wrench,
  Wind,
  Gauge,
  Droplet,
  Flame,
  Car,
  Settings,
  Shield,
  Clock,
  MapPin,
  Phone,
  Star,
  ThumbsUp,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUs() {
  return (
    <section className="py-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-[#007A55]" />
            <span className="text-sm font-semibold text-[#007A55]">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premium Car Care Services{' '}
            <span className="text-[#007A55]">in Dubai</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive automotive solutions with unmatched quality and reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Clock,
              title: "24/7 Emergency Service",
              description: "Round-the-clock support for unexpected car troubles",
              color: "text-blue-500"
            },
            {
              icon: MapPin,
              title: "Mobile Service",
              description: "We come to your location anywhere in Dubai",
              color: "text-green-500"
            },
            {
              icon: Shield,
              title: "Certified Technicians",
              description: "Experienced professionals with proven expertise",
              color: "text-purple-500"
            },
            {
              icon: ThumbsUp,
              title: "100% Satisfaction",
              description: "Guaranteed quality service with warranty",
              color: "text-amber-500"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-[#007A55] transition-colors">
              <div className="bg-[#007A55]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Main Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-[#007A55]" />
              Our Expert Services
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Battery,
                  title: "Car Battery Replacement",
                  description: "Premium batteries with warranty",
                  price: "From AED 250"
                },
                {
                  icon: Zap,
                  title: "Jump Start Service",
                  description: "Quick battery boost anywhere",
                  price: "From AED 99"
                },
                {
                  icon: Wind,
                  title: "AC Repair & Service",
                  description: "Complete AC diagnostics",
                  price: "From AED 150"
                },
                {
                  icon: Gauge,
                  title: "Alternator Repair",
                  description: "Expert alternator fixing",
                  price: "From AED 300"
                },
                {
                  icon: Settings,
                  title: "Starter Motor Repair",
                  description: "Quick starter replacement",
                  price: "From AED 280"
                },
                {
                  icon: Droplet,
                  title: "Engine Oil Change",
                  description: "Quality oil and filter change",
                  price: "From AED 120"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-[#007A55] transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#007A55]/10 p-2 rounded-lg">
                      <service.icon className="h-5 w-5 text-[#007A55]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                      <p className="text-sm font-bold text-[#007A55] mt-2">{service.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Value Proposition */}
          <div className="space-y-6">
            {/* Main Value Card */}
            <div className="bg-[#007A55] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Why Customers Choose Us
              </h3>
              <ul className="space-y-3 mb-6">
                {[
                  "✓ 24/7 emergency availability",
                  "✓ Fast mobile response (30 mins average)",
                  "✓ Experienced auto technicians",
                  "✓ Affordable and transparent pricing",
                  "✓ Same-day car repair service",
                  "✓ No towing required",
                  "✓ Genuine parts with warranty"
                ].map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-[#00943B] font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white text-[#007A55] hover:bg-gray-100 font-semibold">
                Book Service Now
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 pt-8 border-t border-gray-200">
          {[
            { icon: Shield, label: "Certified" },
            { icon: Clock, label: "24/7 Support" },
            { icon: MapPin, label: "Mobile Service" },
            { icon: ThumbsUp, label: "100% Guarantee" },
            { icon: Car, label: "All Makes" },
            { icon: Star, label: "4.9 Rating" }
          ].map((badge, index) => (
            <div key={index} className="text-center">
              <badge.icon className="h-5 w-5 text-[#007A55] mx-auto mb-2" />
              <span className="text-xs text-gray-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}