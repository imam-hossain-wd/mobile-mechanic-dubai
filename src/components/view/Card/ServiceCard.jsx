'use client'

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Wrench,
  Droplet,
  Settings,
  Clock,
  Shield,
  Star,
  Sparkles,
  Gauge,
  Wind,
  Fuel,
  Zap,
  Thermometer,
  Car
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Premium icon mapping with brand colors
const getServiceIcon = (title, className = "h-6 w-6") => {
  const iconProps = { className: cn(className, "text-white") };

  if (title.includes("Battery")) return <Zap {...iconProps} />;
  if (title.includes("AC") || title.includes("Air")) return <Wind {...iconProps} />;
  if (title.includes("Oil")) return <Droplet {...iconProps} />;
  if (title.includes("Brake")) return <Gauge {...iconProps} />;
  if (title.includes("Radiator")) return <Thermometer {...iconProps} />;
  if (title.includes("Engine")) return <Settings {...iconProps} />;
  if (title.includes("ABS")) return <Car {...iconProps} />;
  if (title.includes("Fuel")) return <Fuel {...iconProps} />;
  if (title.includes("DenamoCraft")) return <Sparkles {...iconProps} />;
  return <Wrench {...iconProps} />;
};

// Premium Badge Component
const PremiumBadge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-[#007A55] text-white border-0 shadow-lg",
    secondary: "bg-white text-[#007A55] border border-[#007A55]/20",
    accent: "bg-amber-400 text-[#007A55] border-0",
    outline: "bg-white/95 text-gray-700 border border-gray-200"
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide uppercase",
      variants[variant]
    )}>
      {children}
    </span>
  );
};

// Feature Item Component
const FeatureItem = ({ children, icon: Icon }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5">
      <div className="p-0.5 bg-[#007A55]/10 rounded">
        <Icon className="h-3.5 w-3.5 text-[#007A55]" />
      </div>
    </div>
    <span className="text-xs text-gray-600 leading-relaxed flex-1">
      {children}
    </span>
  </div>
);

export const ServiceCard = ({ service, priority = false }) => {
  // Default image if none provided
  const imageUrl = service?.service_image || '/images/default-service.jpg';

  return (
    <div className="group relative bg-white border border-gray-200 hover:border-[#007A55]/30 transition-colors duration-300">
      {/* Architectural Frame Lines */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#007A55]/20 group-hover:border-[#007A55]/40 transition-colors" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#007A55]/20 group-hover:border-[#007A55]/40 transition-colors" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#007A55]/20 group-hover:border-[#007A55]/40 transition-colors" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#007A55]/20 group-hover:border-[#007A55]/40 transition-colors" />

      {/* Image Section - Minimalist Architectural Style */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {/* Main Image */}
        <Image
          src={imageUrl}
          alt={service?.title || "Car service"}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
        />

        {/* Solid Gradient Overlay - No Animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Diagonal Accent Line */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#007A55]/20 transform rotate-45 translate-x-12 -translate-y-12" />

        {/* Top Left Badge Group */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <PremiumBadge variant="primary">
            <Star className="h-3 w-3 fill-white" />
            FEATURED
          </PremiumBadge>
        </div>

        {/* Bottom Right Badge */}
        <div className="absolute bottom-4 right-4">
          <PremiumBadge>
            <Clock className="h-3 w-3 text-white" />
            <span className="text-white">
              24/7
            </span>
          </PremiumBadge>
        </div>

        {/* Title Section - Modern Typography */}
        <div className="absolute bottom-4 left-4 right-16">
          <div className="flex items-center gap-3">
            {/* Icon Container - Geometric Shape */}
            <div className="relative">
              <div className="w-10 h-10 bg-[#007A55] flex items-center justify-center">
                {getServiceIcon(service?.title, "h-5 w-5")}
              </div>
            </div>

            <h3 className="text-lg font-light text-white tracking-wide">
              {service.cardTitle ? service.cardTitle : service.title}
              <span className="block text-xs text-white/60 font-normal mt-0.5">
                Premium Service
              </span>
            </h3>
          </div>
        </div>
      </div>

      {/* Content Section - Clean Grid Layout */}
      <div className="p-6 space-y-5">
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3">
          {service?.features?.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#007A55]" />
              <span className="text-xs text-gray-600 line-clamp-1">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-[10px] uppercase tracking-wider text-gray-400">
              Service Details
            </span>
          </div>
        </div>

        {/* Service Specs - Minimal Grid */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="py-2 bg-gray-50">
            <div className="text-xs font-medium text-gray-900">30min</div>
            <div className="text-[10px] text-gray-500">Response</div>
          </div>
          <div className="py-2 bg-gray-50">
            <div className="text-xs font-medium text-gray-900">12mo</div>
            <div className="text-[10px] text-gray-500">Warranty</div>
          </div>
          <div className="py-2 bg-gray-50">
            <div className="text-xs font-medium text-gray-900">On-site</div>
            <div className="text-[10px] text-gray-500">Service</div>
          </div>
        </div>

        {/* Price Tag - Architectural Style */}
        {service?.price && (
          <div className="flex items-baseline justify-between py-2 border-b border-gray-200">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Starting from</span>
            <span className="text-xl font-light text-[#007A55]">{service.price}</span>
          </div>
        )}

        {/* Action Buttons - Clean Split Design */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            className="flex-1 border-gray-300 hover:border-[#007A55] bg-white text-gray-700 hover:text-[#007A55] rounded-none h-11 text-xs uppercase tracking-wider font-medium"
            asChild
          >
            <Link href={`/services/${service?.slug}`}>
              DETAILS
            </Link>
          </Button>

          <Button
            className="flex-[1.5] bg-[#007A55] hover:bg-[#00943B] text-white rounded-none h-11 text-xs uppercase tracking-wider font-medium"
            asChild
          >
            <Link href="/book-appointment">
              BOOK NOW
            </Link>
          </Button>
        </div>

        {/* Trust Indicators - Minimal */}
        <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400">
          <span className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Warranty
          </span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Same Day
          </span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Certified
          </span>
        </div>
      </div>

      {/* Serial Number - Architectural Detail */}
      <div className="absolute top-4 right-4 text-[8px] font-mono text-white/40 tracking-wider">
        01
      </div>
    </div>
  );
};

// Premium Grid Layout
export const ServiceGrid = ({ children, className }) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8",
      className
    )}>
      {children}
    </div>
  );
};

// Minimal Skeleton Loader
export const ServiceCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200">
      {/* Corner Frames */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gray-200" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gray-200" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gray-200" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gray-200" />

      <div className="h-56 bg-gray-100" />
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-3 bg-gray-100" />
          ))}
        </div>
        <div className="h-8 bg-gray-100" />
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-12 bg-gray-100" />
          ))}
        </div>
        <div className="h-10 bg-gray-100" />
        <div className="flex gap-3">
          <div className="flex-1 h-11 bg-gray-100" />
          <div className="flex-[1.5] h-11 bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

// Minimalist Badge Variant
export const ServiceBadge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-[#007A55] text-white",
    outline: "border border-[#007A55] text-[#007A55]",
    light: "bg-[#007A55]/10 text-[#007A55]"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2 py-1 text-xs font-medium",
      variants[variant]
    )}>
      {children}
    </span>
  );
};