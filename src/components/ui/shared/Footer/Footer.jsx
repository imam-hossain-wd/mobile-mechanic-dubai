// import Link from "next/link";
// import {
//   MapPin,
//   Phone,
//   Clock,
//   Shield,
//   Wrench,
//   Star,
//   CheckCircle,
//   ExternalLink,
//   Mail,
//   ChevronRight,
//   ThumbsUp,
//   Truck,
//   Users,
//   Headphones
// } from "lucide-react";
// import { SiteConfig } from "@/config/site";


// export function Footer() {
//   const {
//     displayNumber,
//     numberCallLink,
//     whatsappCallLink,
//     serviceAreas,
//     services,
//     footerhrefs,
//     socialLinks,
//     location,
//     email,
//     gbp,
//     brandName,
//     operatingHours
//   } = SiteConfig;

//   // Get unique service categories
//   const uniqueServices = services || [];

//   return (
//     <footer className="relative bg-gradient-to-b from-slate-900 via-[#007A55] to-[#00943B] text-white">
//       {/* Premium Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 L0 30 L30 60 L60 30 L30 0' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }} />
//       </div>

//       {/* Geometric Shapes */}
//       <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#00943B]/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#007A55]/20 rounded-full blur-3xl" />

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-6 md:pb-8 z-10">
//         {/* ===== TOP BAR WITH QUICK CONTACT ===== */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 md:pb-8 mb-6 md:mb-8 border-b border-white/10">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
//                 <Headphones className="h-4 w-4 md:h-5 md:w-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-xs text-white/60">24/7 Support</p>
//                 <Link href={numberCallLink} className="text-sm md:text-base font-semibold hover:text-white/80">
//                   {displayNumber}
//                 </Link>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 w-full sm:w-auto">
//               <div className="hidden sm:block w-px h-8 bg-white/20" />
//               <div className="flex items-center gap-3 sm:gap-2">
//                 <div className="flex items-center gap-2">
//                   <Truck className="h-3.5 w-3.5 md:h-4 md:w-4 text-white/60 flex-shrink-0" />
//                   <span className="text-xs md:text-sm text-white/80 whitespace-nowrap">Fast Response</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <ThumbsUp className="h-3.5 w-3.5 md:h-4 md:w-4 text-white/60 flex-shrink-0" />
//                   <span className="text-xs md:text-sm text-white/80 whitespace-nowrap">100% Guarantee</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 self-end sm:self-auto">
//             {socialLinks?.slice(0, 4).map(({ name, icon: Icon, href }) => (
//               <Link
//                 key={name}
//                 href={href}
//                 className="p-1.5 md:p-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
//                 aria-label={name}
//               >
//                 <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* ===== MAIN GRID ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-10 md:mb-12">

//           {/* Brand Column - Full width on mobile, 2 cols on tablet, 4 on desktop */}
//           <div className="md:col-span-2 lg:col-span-4 space-y-5 md:space-y-6">
//             <div>
//               {/* <Link href="/" className="inline-block">
//                 <Image
//                   src={bandlogo.logo}
//                   width={180}
//                   height={160}
//                   alt={brandName}
//                   className="h-auto w-auto max-w-[160px] md:max-w-[200px]"
//                   priority={false}
//                 />
//               </Link> */}
//               <p className="text-xs sm:text-sm text-white/80 mt-3 md:mt-4 leading-relaxed max-w-md">
//                 Dubai's premier mobile car repair service bringing professional
//                 automotive care directly to your location. Available 24/7 for
//                 emergency repairs, maintenance, and diagnostics.
//               </p>
//             </div>

//             {/* Trust Indicators */}
//             {/* <div className="grid grid-cols-3 gap-2 md:gap-3">
//               <div className="bg-white/5 rounded-lg p-2 md:p-3 text-center border border-white/10">
//                 <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">15+</div>
//                 <div className="text-[10px] md:text-xs text-white/60 leading-tight">Years Experience</div>
//               </div>
//               <div className="bg-white/5 rounded-lg p-2 md:p-3 text-center border border-white/10">
//                 <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">5K+</div>
//                 <div className="text-[10px] md:text-xs text-white/60 leading-tight">Happy Clients</div>
//               </div>
//               <div className="bg-white/5 rounded-lg p-2 md:p-3 text-center border border-white/10">
//                 <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">24/7</div>
//                 <div className="text-[10px] md:text-xs text-white/60 leading-tight">Availability</div>
//               </div>
//             </div> */}

//             {/* Google Rating */}
//             <Link
//               href={gbp.mapLink}
//               target="_blank"
//               className="group block bg-white/5 rounded-xl p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-all"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="relative flex-shrink-0">
//                   <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full" />
//                   <div className="relative p-2 md:p-2.5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg md:rounded-xl">
//                     <Star className="h-4 w-4 md:h-5 md:w-5 text-white" fill="white" />
//                   </div>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm md:text-base font-semibold truncate">Google Reviews</span>
//                     <ExternalLink className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white/60 flex-shrink-0" />
//                   </div>
//                   <div className="flex flex-wrap items-center gap-2 mt-1">
//                     <span className="text-lg md:text-xl lg:text-2xl font-bold text-amber-400">{gbp.rating}</span>
//                     <div className="flex gap-0.5">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="h-3 w-3 md:h-3.5 md:w-3.5 text-amber-400" fill="currentColor" />
//                       ))}
//                     </div>
//                     <span className="text-xs md:text-sm text-white/60">({gbp.reviews})</span>
//                   </div>
//                 </div>
//               </div>
//             </Link>

//             {/* Operating Hours - Hidden on mobile, visible on tablet+ */}
//             <div className="hidden md:block bg-white/5 rounded-xl p-4 border border-white/10">
//               <div className="flex items-center gap-2 mb-3">
//                 <Clock className="h-4 w-4 text-white" />
//                 <span className="font-semibold">Operating Hours</span>
//               </div>
//               <div className="space-y-1">
//                 {operatingHours?.map((schedule, index) => (
//                   <div key={index} className="flex justify-between text-xs lg:text-sm">
//                     <span className="text-white/70">{schedule.day}</span>
//                     <span className="text-white font-medium">{schedule.hours}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>



//           {/* Services - 2 cols on tablet, 3 on desktop */}
//           <div className="md:col-span-1 lg:col-span-3 space-y-4">
//             <h3 className="text-base md:text-lg font-bold flex items-center gap-2">
//               <Wrench className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
//               <span>Popular Services</span>
//             </h3>

//             <div className="grid grid-cols-1 gap-1">
//               {uniqueServices.map((service, index) => (
//                 <Link
//                   key={index}
//                   href={service.slug}
//                   className="group flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
//                 >
//                   <ChevronRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 flex-shrink-0" />
//                   <span className="text-xs md:text-sm text-white/80 group-hover:text-white line-clamp-1">
//                     {service.name.replace(' Dubai', '')}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Service Areas - 2 cols on tablet, 3 on desktop */}
//           <div className="md:col-span-2 lg:col-span-3 space-y-4">
//             <h3 className="text-base md:text-lg font-bold flex items-center gap-2">
//               <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
//               <span>Service Areas</span>
//             </h3>

//             <div className="grid grid-cols-1 gap-1">
//               {serviceAreas?.map((area, index) => (
//                 <Link
//                   key={index}
//                   href={area.href}
//                   className="group flex items-center gap-1 p-1  rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
//                 >
//                   <ChevronRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 flex-shrink-0" />
//                   <span className="text-xs md:text-sm text-white/80 group-hover:text-white line-clamp-1">
//                     {area.name}
//                   </span>
//                 </Link>
//               ))}
//             </div>

//             {/* Operating Hours - Mobile only */}
//             <div className="block md:hidden bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
//               <div className="flex items-center gap-2 mb-3">
//                 <Clock className="h-4 w-4 text-white" />
//                 <span className="font-semibold">Operating Hours</span>
//               </div>
//               <div className="space-y-1">
//                 {operatingHours?.slice(0, 3).map((schedule, index) => (
//                   <div key={index} className="flex justify-between text-xs">
//                     <span className="text-white/70">{schedule.day}</span>
//                     <span className="text-white font-medium">{schedule.hours}</span>
//                   </div>
//                 ))}
//                 <details className="mt-2">
//                   <summary className="text-xs text-white/60 cursor-pointer hover:text-white">View all days</summary>
//                   <div className="space-y-1 mt-2">
//                     {operatingHours?.slice(3).map((schedule, index) => (
//                       <div key={index} className="flex justify-between text-xs">
//                         <span className="text-white/70">{schedule.day}</span>
//                         <span className="text-white font-medium">{schedule.hours}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </details>
//               </div>
//             </div>
//           </div>

//              {/* Quick Links - 2 cols on tablet, 2 on desktop */}
//           <div className="md:col-span-1 lg:col-span-2 space-y-5 md:space-y-6">


//             <FooterLinks
//               title="Company"
//               items={footerhrefs?.filter((_, i) => i < 5)}
//             />

//                         <div className="pt-0 md:pt-2">
//               <h4 className="text-sm md:text-base font-semibold text-white/80 mb-3">Contact Info</h4>
//               <div className="space-y-3">
//                 <ContactItem
//                   icon={Phone}
//                   href={numberCallLink}
//                   text={displayNumber}
//                   subtext="Emergency 24/7"
//                 />
//                 <ContactItem
//                   icon={Mail}
//                   href={`mailto:${email}`}
//                   text={email}
//                   subtext="Email us anytime"
//                 />
//                 <ContactItem
//                   icon={MapPin}
//                   href={gbp.mapLink}
//                   text="View on Google Maps"
//                   subtext={location}
//                   external
//                 />
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* ===== BOTTOM BAR WITH CERTIFICATIONS ===== */}
//         <div className="pt-6 md:pt-8 border-t border-white/10">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">

//             {/* Certification Badges */}
//             <div className="flex flex-wrap justify-center gap-2 md:gap-4">
//               <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
//                 <Shield className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
//                 <span className="text-[10px] md:text-xs whitespace-nowrap">Licensed & Insured</span>
//               </div>
//               <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
//                 <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
//                 <span className="text-[10px] md:text-xs whitespace-nowrap">RTA Approved</span>
//               </div>
//               <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
//                 <Users className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
//                 <span className="text-[10px] md:text-xs whitespace-nowrap">Expert Mechanics</span>
//               </div>
//             </div>

//             {/* Copyright */}
//             <p className="text-xs md:text-sm text-white/60 text-center lg:text-right">
//               © {new Date().getFullYear()} {gbp.name}. All rights reserved.
//               <span className="hidden sm:inline mx-2">|</span>
//               <br className="block sm:hidden" />
//               <Link href="/privacy-policy" className="hover:text-white mx-1">Privacy</Link>
//               <span className="mx-1">•</span>
//               <Link href="/terms" className="hover:text-white mx-1">Terms</Link>
//               <span className="mx-1">•</span>
//               <Link href="/sitemap.xml" className="hover:text-white mx-1">Sitemap</Link>
//             </p>
//           </div>
//         </div>

//         {/* ===== SEO NAP ===== */}
//         <div className="sr-only">
//           <span itemScope itemType="https://schema.org/AutoRepair">
//             <span itemProp="name">{gbp.name}</span>
//             <span itemProp="address">{gbp.address}</span>
//             <span itemProp="telephone">{gbp.phone}</span>
//             <span itemProp="url">{gbp.website}</span>
//             <span itemProp="priceRange">$$</span>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* ===== REUSABLE COMPONENTS ===== */

// function Badge({ icon: Icon, text }) {
//   return (
//     <div className="flex items-center gap-1.5 bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
//       <Icon className="h-3 w-3 md:h-3.5 md:w-3.5 text-white flex-shrink-0" />
//       <span className="text-[10px] md:text-xs font-medium">{text}</span>
//     </div>
//   );
// }

// function ContactItem({ icon: Icon, href, text, subtext, external }) {
//   const Component = external ? Link : 'a';
//   const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

//   return (
//     <Component
//       {...props}
//       className="flex items-start gap-2 md:gap-3 group"
//     >
//       <div className="p-1.5 md:p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors flex-shrink-0">
//         <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
//       </div>
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-1 flex-wrap">
//           <span className="text-xs md:text-sm font-medium group-hover:text-white/90 truncate">{text}</span>
//           {external && <ExternalLink className="h-2.5 w-2.5 md:h-3 md:w-3 text-white/40 flex-shrink-0" />}
//         </div>
//         {subtext && <p className="text-[10px] md:text-xs text-white/60 truncate">{subtext}</p>}
//       </div>
//     </Component>
//   );
// }

// function FooterLinks({ title, items }) {
//   if (!items?.length) return null;

//   return (
//     <div className="space-y-3">
//       <h3 className="text-base md:text-lg font-bold">{title}</h3>
//       <nav className="space-y-1.5 md:space-y-2">
//         {items.map((item, index) => (
//           <Link
//             key={index}
//             href={item.href}
//             className="group flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/80 hover:text-white transition-colors"
//           >
//             <ChevronRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 flex-shrink-0" />
//             <span className="truncate">{item.name || item.title}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// }

import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Shield,
  Wrench,
  Star,
  CheckCircle,
  ExternalLink,
  Mail,
  ChevronRight,
  ThumbsUp,
  Truck,
  Users,
  Headphones,
  MessageCircle
} from "lucide-react";
import { SiteConfig } from "@/config/site";


export function Footer() {
  const {
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    serviceAreas,
    services,
    footerhrefs,
    socialLinks,
    location,
    email,
    gbp,
    brandName,
    operatingHours
  } = SiteConfig;

  // Get unique service categories
  const uniqueServices = services || [];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-[#007A55] to-[#00943B] text-white">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 L0 30 L30 60 L60 30 L30 0' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#00943B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#007A55]/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-6 md:pb-8 z-10">
        {/* ===== TOP BAR WITH QUICK CONTACT ===== */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 md:pb-8 mb-6 md:mb-8 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                <Headphones className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/60">24/7 Support</p>
                <Link href={numberCallLink} className="text-sm md:text-base font-semibold hover:text-white/80">
                  {displayNumber}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="hidden sm:block w-px h-8 bg-white/20" />
              <div className="flex items-center gap-3 sm:gap-2">
                <div className="flex items-center gap-2">
                  <Truck className="h-3.5 w-3.5 md:h-4 md:w-4 text-white/60 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80 whitespace-nowrap">Fast Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-3.5 w-3.5 md:h-4 md:w-4 text-white/60 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80 whitespace-nowrap">100% Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {socialLinks?.slice(0, 4).map(({ name, icon: Icon, href }) => (
              <Link
                key={name}
                href={href}
                className="p-1.5 md:p-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors border border-white/10"
                aria-label={name}
              >
                <Icon className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-10 md:mb-12">

          {/* Brand Column - Full width on mobile */}
          <div className="lg:col-span-4 space-y-5 md:space-y-6">
            <div>
              {/* Business Name */}
              <Link href={SiteConfig?.gbp?.mapLink} className="mb-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Car Repair Mobile Mechanic Dubai
                </h2>
              </Link>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/80 mt-3 md:mt-4 leading-relaxed">
                Professional 24/7 mobile mechanic and roadside assistance service provider in Dubai.
                We specialize in on-site car battery replacement, AC repair, and emergency diagnostics,
                ensuring you're never stranded on the road.
              </p>
            </div>

            {/* Information */}
            <div className="-mt-2">
              {/* <h4 className="text-sm md:text-base font-semibold text-white/80 mb-3">Contact Info</h4> */}
              <div className="space-y-3">
                <ContactItem
                  icon={Phone}
                  href="tel:+971552330721"
                  text="+971 55 233 0721"
                  subtext="Emergency 24/7"
                />
                <ContactItem
                  icon={MessageCircle}
                  href="https://wa.me/971552330721"
                  text="+971 55 233 0721"
                  subtext="Chat on WhatsApp"
                />
                <ContactItem
                  icon={Mail}
                  href="mailto:mobilemechancidxb@gmail.com"
                  text="mobilemechancidxb@gmail.com"
                  subtext="Email us anytime"
                />
                <ContactItem
                  icon={MapPin}
                  href={gbp?.mapLink || "https://maps.google.com/?q=99+Sheikh+Zayed+Rd+Trade+Center+Dubai+UAE"}
                  text="99 Sheikh Zayed Rd - Trade Center"
                  subtext="Dubai, UAE"
                  external
                />
              </div>
            </div>

            {/* Address Section */}
            {/* <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm text-white/90 font-medium">Address</p>
                  <p className="text-xs text-white/70">99 Sheikh Zayed Rd - Trade Center, Dubai, UAE</p>
                  <Link
                    href={gbp?.mapLink || "https://maps.google.com/?q=99+Sheikh+Zayed+Rd+Trade+Center+Dubai+UAE"}
                    target="_blank"
                    className="text-[10px] text-white/50 hover:text-white/80 mt-1 inline-flex items-center gap-1"
                  >
                    Get Directions <ExternalLink className="h-2.5 w-2.5" />
                  </Link>
                </div>
              </div>
            </div> */}

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="bg-white/5 rounded-lg p-2 md:p-3 text-center border border-white/10">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">15+</div>
                <div className="text-[10px] md:text-xs text-white/60 leading-tight">Years Experience</div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 md:p-3 text-center border border-white/10">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">5K+</div>
                <div className="text-[10px] md:text-xs text-white/60 leading-tight">Happy Clients</div>
              </div>
              <div className="bg-white/5 rounded-lg p-2 md:p-3 text-center border border-white/10">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">24/7</div>
                <div className="text-[10px] md:text-xs text-white/60 leading-tight">Availability</div>
              </div>
            </div>

            {/* Google Rating */}
            <Link
              href={gbp.mapLink}
              target="_blank"
              className="group block bg-white/5 rounded-xl p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full" />
                  <div className="relative p-2 md:p-2.5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg md:rounded-xl">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-white" fill="white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-semibold truncate">Google Reviews</span>
                    <ExternalLink className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white/60 flex-shrink-0" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-lg md:text-xl lg:text-2xl font-bold text-amber-400">{gbp.rating}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-3.5 md:w-3.5 text-amber-400" fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs md:text-sm text-white/60">({gbp.reviews})</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Operating Hours - Hidden on mobile, visible on tablet+ */}
            {/* <div className="hidden md:block bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-white" />
                <span className="font-semibold">Operating Hours</span>
              </div>
              <div className="space-y-1">
                {operatingHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-xs lg:text-sm">
                    <span className="text-white/70">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div> */}



          </div>

          {/* Services Section */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base md:text-lg font-bold flex items-center gap-2">
              <Wrench className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
              <span>Popular Services</span>
            </h3>

            <div className="grid grid-cols-1 gap-1">
              {uniqueServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.slug}
                  className="group flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
                >
                  <ChevronRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80 group-hover:text-white line-clamp-1">
                    {service.name.replace(' Dubai', '')}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base md:text-lg font-bold flex items-center gap-2">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
              <span>Service Areas</span>
            </h3>

            <div className="grid grid-cols-1 gap-1">
              {serviceAreas?.map((area, index) => (
                <Link
                  key={index}
                  href={area.href}
                  className="group flex items-center gap-1 p-1 rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
                >
                  <ChevronRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80 group-hover:text-white line-clamp-1">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Operating Hours - Mobile only */}
            <div className="block md:hidden bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-white" />
                <span className="font-semibold">Operating Hours</span>
              </div>
              <div className="space-y-1">
                {operatingHours?.slice(0, 3).map((schedule, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <span className="text-white/70">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
                <details className="mt-2">
                  <summary className="text-xs text-white/60 cursor-pointer hover:text-white">View all days</summary>
                  <div className="space-y-1 mt-2">
                    {operatingHours?.slice(3).map((schedule, index) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span className="text-white/70">{schedule.day}</span>
                        <span className="text-white font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-3 space-y-5 md:space-y-6">
            <FooterLinks
              title="Company"
              items={footerhrefs?.filter((_, i) => i < 5)}
            />

            {/* <div className="pt-0 md:pt-2">
              <h4 className="text-sm md:text-base font-semibold text-white/80 mb-3">Contact Info</h4>
              <div className="space-y-3">
                <ContactItem
                  icon={Phone}
                  href="tel:+971552330721"
                  text="+971 55 233 0721"
                  subtext="Emergency 24/7"
                />
                <ContactItem
                  icon={MessageCircle}
                  href="https://wa.me/971552330721"
                  text="+971 55 233 0721"
                  subtext="Chat on WhatsApp"
                />
                <ContactItem
                  icon={Mail}
                  href="mailto:mobilemechancidxb@gmail.com"
                  text="mobilemechancidxb@gmail.com"
                  subtext="Email us anytime"
                />
                <ContactItem
                  icon={MapPin}
                  href={gbp?.mapLink || "https://maps.google.com/?q=99+Sheikh+Zayed+Rd+Trade+Center+Dubai+UAE"}
                  text="99 Sheikh Zayed Rd - Trade Center"
                  subtext="Dubai, UAE"
                  external
                />
              </div>
            </div> */}

            <div className="hidden md:block bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-white" />
                <span className="font-semibold">Operating Hours</span>
              </div>
              <div className="space-y-1">
                {operatingHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-xs lg:text-sm">
                    <span className="text-white/70">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* -------------- */}
          </div>
        </div>

        {/* ===== BOTTOM BAR WITH CERTIFICATIONS ===== */}
        <div className="pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6">

            {/* Certification Badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
                <Shield className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
                <span className="text-[10px] md:text-xs whitespace-nowrap">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
                <span className="text-[10px] md:text-xs whitespace-nowrap">RTA Approved</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
                <Users className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
                <span className="text-[10px] md:text-xs whitespace-nowrap">Expert Mechanics</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs md:text-sm text-white/60 text-center lg:text-right">
              © {new Date().getFullYear()} Car Repair Mobile Mechanic Dubai. All rights reserved.
              <span className="hidden sm:inline mx-2">|</span>
              <br className="block sm:hidden" />
              <Link href="/privacy-policy" className="hover:text-white mx-1">Privacy</Link>
              <span className="mx-1">•</span>
              <Link href="/terms" className="hover:text-white mx-1">Terms</Link>
              <span className="mx-1">•</span>
              <Link href="/sitemap.xml" className="hover:text-white mx-1">Sitemap</Link>
            </p>
          </div>
        </div>

        {/* ===== SEO NAP ===== */}
        <div className="sr-only">
          <span itemScope itemType="https://schema.org/AutoRepair">
            <span itemProp="name">Car Repair Mobile Mechanic Dubai</span>
            <span itemProp="address">99 Sheikh Zayed Rd - Trade Center, Dubai, UAE</span>
            <span itemProp="telephone">+971 55 233 0721</span>
            <span itemProp="url">{gbp?.website || window.location.origin}</span>
            <span itemProp="priceRange">$$</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function Badge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-1.5 bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10">
      <Icon className="h-3 w-3 md:h-3.5 md:w-3.5 text-white flex-shrink-0" />
      <span className="text-[10px] md:text-xs font-medium">{text}</span>
    </div>
  );
}

function ContactItem({ icon: Icon, href, text, subtext, external }) {
  const Component = external ? Link : 'a';
  const props = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <Component
      {...props}
      className="flex items-start gap-2 md:gap-3 group"
    >
      <div className="p-1.5 md:p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors flex-shrink-0">
        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-xs md:text-sm font-medium group-hover:text-white/90 truncate">{text}</span>
          {external && <ExternalLink className="h-2.5 w-2.5 md:h-3 md:w-3 text-white/40 flex-shrink-0" />}
        </div>
        {subtext && <p className="text-[10px] md:text-xs text-white/60 truncate">{subtext}</p>}
      </div>
    </Component>
  );
}

function FooterLinks({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-base md:text-lg font-bold">{title}</h3>
      <nav className="space-y-1.5 md:space-y-2">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="h-3 w-3 md:h-3.5 md:w-3.5 text-white/40 group-hover:text-white transition-all group-hover:translate-x-0.5 flex-shrink-0" />
            <span className="truncate">{item.name || item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}