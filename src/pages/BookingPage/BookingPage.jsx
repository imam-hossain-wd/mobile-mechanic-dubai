import {
    Clock,
    Phone,
    Mail,
    Shield,
    Zap,
    Star,
    CheckCircle2,
    Award,
    Wrench,
    Truck,
    ThumbsUp,
    Clock3,
    Sparkles,
    Gauge,
    Users
} from "lucide-react";
import { SiteConfig } from "@/config/site";
import BookingForm from "./BookingForm";
import Link from "next/link";

export const metadata = {
    title: `Book Premium Car Service | ${SiteConfig.brandName}`,
    description: `Schedule professional car repair and maintenance with ${SiteConfig.brandName}. Experience premium mobile mechanic service in Dubai. 24/7 availability.`,
};

// Premium features data
const premiumFeatures = [
    {
        icon: Clock3,
        title: "Instant Response",
        description: "30-min arrival guarantee",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-600"
    },
    {
        icon: Shield,
        title: "Certified Experts",
        description: "RTA approved mechanics",
        color: "from-emerald-500 to-green-500",
        bgColor: "bg-emerald-50",
        textColor: "text-emerald-600"
    },
    {
        icon: Award,
        title: "Warranty Cover",
        description: "12 months on all repairs",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50",
        textColor: "text-amber-600"
    },
    {
        icon: Truck,
        title: "Mobile Service",
        description: "We come to your location",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-600"
    }
];

// Service packages
const servicePackages = [
    {
        name: "Express Care",
        price: "From 199 AED",
        features: ["Oil Change", "Basic Inspection", "Battery Check"],
        icon: Gauge,
        popular: false
    },
    {
        name: "Complete Care",
        price: "From 399 AED",
        features: ["Full Diagnostics", "AC Service", "Brake Inspection", "Engine Tune-up"],
        icon: Wrench,
        popular: true
    },
    {
        name: "Premium Care",
        price: "From 699 AED",
        features: ["Comprehensive Repair", "Parts Replacement", "Detailing", "Extended Warranty"],
        icon: Sparkles,
        popular: false
    }
];

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
            {/* Hero Section - Luxury Edition */}
            <section className="relative bg-gradient-to-br from-[#007A55] via-[#008f5f] to-[#00943B] text-white overflow-hidden">
                {/* Premium Pattern Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-5"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Geometric Accents */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-40 left-[10%] w-2 h-2 bg-white/30 rounded-full"></div>
                    <div className="absolute top-60 right-[15%] w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-40 left-[20%] w-4 h-4 bg-white/10 rounded-full"></div>
                </div>

                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* Brand Indicator */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 mb-8">
                            <Sparkles className="w-4 h-4 text-amber-300" />
                            <span className="text-sm font-medium text-white/90">Premium Auto Care • Dubai</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="block">Experience</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-300">
                                    Elite Car Service
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                                Schedule your premium mobile mechanic service. Professional,
                                reliable, and delivered to your doorstep in Dubai.
                            </p>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-xl">
                                        <Star className="w-5 h-5 text-amber-400" fill="currentColor" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">4.9</div>
                                        <div className="text-xs text-white/70">500+ Reviews</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-xl">
                                        <Users className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">5000+</div>
                                        <div className="text-xs text-white/70">Happy Clients</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-xl">
                                        <Clock className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">24/7</div>
                                        <div className="text-xs text-white/70">Availability</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Curved Bottom Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Premium Features Grid */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {premiumFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent relative overflow-hidden"
                                >
                                    {/* Background Gradient on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-7 h-7 ${feature.textColor}`} />
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>

                                    {/* Decorative Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Main Booking Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8 xl:gap-12">

                        {/* Left Column - Info & Packages */}
                        <div className="lg:col-span-5 space-y-8">

                            {/* Section Header */}
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                                    <Zap className="w-4 h-4 text-[#007A55]" />
                                    <span className="text-sm font-medium text-[#007A55]">Premium Booking Experience</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    Schedule Your
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007A55] to-[#00943B]"> Elite Service</span>
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Choose your preferred service package and let our expert mechanics take care of your vehicle.
                                </p>
                            </div>

                            {/* Service Packages */}
                            <div className="space-y-4">
                                {servicePackages.map((pkg, index) => {
                                    const Icon = pkg.icon;
                                    return (
                                        <div
                                            key={index}
                                            className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${pkg.popular
                                                    ? 'border-[#007A55] shadow-lg'
                                                    : 'border-gray-100 hover:border-[#007A55]/30'
                                                }`}
                                        >
                                            {pkg.popular && (
                                                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold">
                                                    MOST POPULAR
                                                </div>
                                            )}

                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-3 rounded-xl ${pkg.popular ? 'bg-[#007A55]' : 'bg-gray-100'
                                                        }`}>
                                                        <Icon className={`w-5 h-5 ${pkg.popular ? 'text-white' : 'text-gray-600'
                                                            }`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                                                        <p className="text-sm text-[#007A55] font-semibold">{pkg.price}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-2">
                                                {pkg.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <CheckCircle2 className="w-4 h-4 text-[#007A55]" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-4">Why Choose Us</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: Shield, text: "Licensed & Insured" },
                                        { icon: ThumbsUp, text: "100% Guarantee" },
                                        { icon: Clock, text: "30-min Response" },
                                        { icon: Award, text: "Certified Team" }
                                    ].map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="p-1.5 bg-emerald-50 rounded-lg">
                                                    <Icon className="w-4 h-4 text-[#007A55]" />
                                                </div>
                                                <span className="text-xs md:text-sm text-gray-700">{item.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden sticky top-24">
                                {/* Form Header */}
                                <div className="bg-gradient-to-r from-[#007A55] to-[#00943B] p-6 md:p-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">Book Your Service</h3>
                                            <p className="text-white/80 text-sm">Fill in your details and we'll confirm instantly</p>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                                            <span className="text-white font-bold">24/7</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Container */}
                                <div className="p-6 md:p-8">
                                    <BookingForm />
                                </div>

                                {/* Contact Options */}
                                <div className="border-t border-gray-100 p-6 bg-gray-50/50">
                                    <p className="text-sm text-gray-600 text-center mb-4">Or contact us directly</p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        <Link
                                            href={SiteConfig.whatsappCallLink}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors border border-green-200"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                            </svg>
                                            WhatsApp
                                        </Link>
                                        <Link
                                            href={SiteConfig.numberCallLink}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
                                        >
                                            <Phone className="w-5 h-5" />
                                            Call Now
                                        </Link>
                                        <Link
                                            href={`mailto:${SiteConfig.email}`}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors border border-gray-200"
                                        >
                                            <Mail className="w-5 h-5" />
                                            Email
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Guarantee Banner */}
            <section className="bg-gradient-to-r from-[#007A55] to-[#00943B] py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            100% Satisfaction Guaranteed
                        </h2>
                        <p className="text-lg text-white/90 mb-8">
                            We stand behind our work. If you're not completely satisfied, we'll make it right.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                "✓ 12-Month Warranty",
                                "✓ Genuine Parts",
                                "✓ Certified Mechanics",
                                "✓ Transparent Pricing"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-amber-300" />
                                    <span className="text-white/90">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Preview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Trusted by <span className="text-[#007A55]">Dubai's Drivers</span>
                            </h2>
                            <p className="text-lg text-gray-600">Join thousands of satisfied customers</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        "Excellent service! They arrived within 30 minutes and fixed my AC perfectly. Highly recommended!"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#007A55] to-[#00943B] rounded-full flex items-center justify-center text-white font-bold">
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Ahmed K.</p>
                                            <p className="text-xs text-gray-500">Dubai</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "How quickly can you arrive?",
                                    a: "We guarantee arrival within 30-45 minutes anywhere in Dubai."
                                },
                                {
                                    q: "Do you provide warranty on repairs?",
                                    a: "Yes, all our repairs come with a 12-month warranty on parts and labor."
                                },
                                {
                                    q: "What areas do you serve?",
                                    a: "We cover all major areas in Dubai including DIFC, Business Bay, and more."
                                },
                                {
                                    q: "Are your mechanics certified?",
                                    a: "All our mechanics are RTA certified with minimum 5 years experience."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}