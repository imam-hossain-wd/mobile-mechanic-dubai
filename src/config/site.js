// // config/site.ts
// import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

// export const SiteConfig = {
//   authorName: "Md Saiful Islam",
//   brandName: "24 Car Service Dubai Mobile Mechanic",
//   url: "https://24carservicedubaimobilemechanic.vercel.app/",
//   email: "24carservicedxb@gmail.com",
//   description: "Your Car Care Partner Dubai - Anytime Anywhere when you need Car   ",
//   displayNumber: "+971 55 233 0721",
//   numberCallLink: "tel:+971552330721",
//   whatsappCallLink: "https://wa.me/971552330721",
//   location: "99 Sheikh Zayed Rd - DIFC - Dubai - United Arab Emirates",
//   coordinate: "25.21254840, 55.27794040",
//   // Google Business Profile Information
//   gbp: {
//     name: "24 Car Service Dubai Mobile Mechanic",
//     brand: "24 Car Service Dubai Mobile Mechanic",
//     address: "99 Sheikh Zayed Rd - DIFC - Dubai - United Arab Emirates",
//     phone: "+971552330721",
//     website: "https://24carservicedxbmobilemechanic.com",
//     cid: "13314935277831007847",
//     mapLink: "https://maps.app.goo.gl/TfAAzDTt6CvVFgEY6",
//     rating: "4.9",
//     reviews: "500+",
//     verified: true
//   },
// serviceAreas: [
//     {
//       name: "DIFC",
//       href: "/area-we-serve/difc",
//       title: "Best Car Repair in DIFC",
//       slug: "difc",
//     },
//     {
//       name: "Trade Centre 1",
//       href: "/area-we-serve/trade-centre-1",
//       title: "Best Car Repair in Trade Centre 1",
//       slug: "trade-centre-1",
//     },
//     {
//       name: "Trade Centre 2",
//       href: "/area-we-serve/trade-centre-2",
//       title: "Best Car Repair in Trade Centre 2",
//       slug: "trade-centre-2",
//     },
//     {
//       name: "Zaa'beel Second",
//       href: "/area-we-serve/zaabeel-second",
//       title: "Best Car Repair in Zaa'beel Second",
//       slug: "zaabeel-second",
//     },
//     {
//       name: "Al Kifaf",
//       href: "/area-we-serve/al-kifaf",
//       title: "Best Car Repair in Al Kifaf",
//       slug: "al-kifaf",
//     },
//     {
//       name: "Business Bay",
//       href: "/area-we-serve/business-bay",
//       title: "Best Car Repair in Business Bay",
//       slug: "business-bay",
//     },
//     {
//       name: "Al Bada'a",
//       href: "/area-we-serve/al-badaa",
//       title: "Best Car Repair in Al Bada'a",
//       slug: "al-badaa",
//     },
//     {
//       name: "Dubai Design District",
//       href: "/area-we-serve/dubai-design-district",
//       title: "Best Car Repair in Dubai Design District",
//       slug: "dubai-design-district",
//     },
//     {
//       name: "Meydan",
//       href: "/area-we-serve/meydan",
//       title: "Best Car Repair in Meydan",
//       slug: "meydan",
//     },
//     {
//       name: "Pearl Jumeirah",
//       href: "/area-we-serve/pearl-jumeirah",
//       title: "Best Car Repair in Pearl Jumeirah",
//       slug: "pearl-jumeirah",
//     },
//   ],

//   operatingHours: [
//     { day: "Saturday", hours: "24 Hours" },
//     { day: "Sunday", hours: "24 Hours" },
//     { day: "Monday", hours: "24 Hours" },
//     { day: "Tuesday", hours: "24 Hours" },
//     { day: "Wednesday", hours: "24 Hours" },
//     { day: "Thursday", hours: "24 Hours" },
//     { day: "Friday", hours: "24 Hours" },
//   ],

//   city: "Dubai",
//   country: "UAE",
//   services: [
//     {
//       name: "Car Battery Replacement Dubai",
//       slug: "/services/car-battery-replacement-dubai",
//     },
//     {
//       name: "Car Jump Start Service Dubai",
//       slug: "/services/car-jump-start-service-dubai",
//     },
//     {
//       name: "Car AC Repair Dubai",
//       slug: "/services/car-ac-repair-dubai",
//     },
//     {
//       name: "Alternator Repair Dubai",
//       slug: "/services/alternator-repair-dubai",
//     },
//     {
//       name: "Car Starter Motor Repair Dubai",
//       slug: "/services/car-starter-motor-repair-dubai",
//     },
//     {
//       name: "Car Raditor Repair Dubai",
//       slug: "/services/car-radiator-repair-and-replacement-dubai",
//     },
//     {
//       name: "Fuel Pump Repair Dubai",
//       slug: "/services/fuel-pump-repair-dubai",
//     },
//     {
//       name: "Car Brake Pad Repair Dubai",
//       slug: "/services/car-brake-pad-repair-and-replacement-dubai",
//     },
//     {
//       name: "ABS System Repair Dubai",
//       slug: "/services/abs-system-repair-dubai",
//     },
//     {
//       name: "Emergency Car Repair Dubai",
//       slug: "/services/emergency-car-repair-dubai",
//     },
//     {
//       name: "ABS System Repair Dubai",
//       slug: "/services/abs-system-repair-dubai",
//     },

//     {
//       name: "Car Mechanic Service Dubai",
//       slug: "/services/car-mechanic-service-dubai",
//     },
//     {
//       name: "Onsite Car Repair Dubai",
//       slug: "/services/onsite-car-repair-dubai",
//     },
//     {
//       name: "Car Maintenance Service Dubai",
//       slug: "/services/car-maintenance-service-dubai",
//     },
//     {
//       name: "Oil Change Service Dubai",
//       slug: "/services/oil-change-service-dubai",
//     },
//     {
//       name: "Car Transmission Repair Dubai",
//       slug: "/services/car-transmission-repair-dubai",
//     },
//     {
//       name: "Car Detailing Dubai",
//       slug: "/services/car-detailing-dubai",
//     },
//     {
//       name: "Car AC Gas Refill Dubai",
//       slug: "/services/car-ac-gas-refill-dubai",
//     },
//   ],

//   navItems: [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "Area We Serve", href: "/area-we-serve" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "Blog", href: "/blog" },
//   ],

//   footerhrefs: [
//     { title: "About Us", href: "/about" },
//     { title: "Contact", href: "/contact" },
//     { title: "Blog", href: "/blog" },
//     { title: "Privacy Policy", href: "/privacy" },
//     { title: "Sitemap", href: "/sitemap.xml" },
//   ],

//   socialLinks: [
//     { name: "Facebook", icon: Facebook, href: "https://facebook.com/yourpage" },
//     { name: "Instagram", icon: Instagram, href: "https://instagram.com/youraccount" },
//     { name: "Twitter", icon: Twitter, href: "https://twitter.com/youraccount" },
//     { name: "YouTube", icon: Youtube, href: "https://youtube.com/@yourchannel" },
//   ],

//   contactLinks: [
//     { name: "Map", icon: MapPin, href: "https://maps.app.goo.gl/P1NWUmR6rLpiSDfE9" },
//     { name: "Phone", icon: Phone, href: "tel:+971545695980" },
//     { name: "Email", icon: Mail, href: "mailto:24carservicedubai@gmail.com" },
//   ],
// };

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export const SiteConfig = {
  authorName: "Md Saiful Islam",
  brandName: "Car Repair Mobile Mechanic Dubai",
  url: "https://mobilemechanicdubai.com",
  email: "24carservicedxb@gmail.com",
  description: "Your Car Care Partner Dubai - Anytime Anywhere when you need Car Repair and Maintenance Service",
  displayNumber: "+971 55 233 0721",
  numberCallLink: "tel:+971552330721",
  whatsappCallLink: "https://wa.me/971552330721",
  location: "99 Sheikh Zayed Rd - Trade Center Second - Trade Center - Dubai - United Arab Emirates",
  coordinate: "25.21254840, 55.27794040",

  // Updated Google Business Profile Information
  gbp: {
    name: "Car Repair Mobile Mechanic Dubai",
    brand: "Car Repair Mobile Mechanic Dubai",
    address: "99 Sheikh Zayed Rd - Trade Center Second - Trade Center - Dubai - United Arab Emirates",
    phone: "+971552330721",
    website: "https://mobilemechanicdubai.com",
    placeId: "ChIJrekvox1DXz4RoAvgv9Ft_X0",
    cid: "9078533171483511712",
    businessProfileId: "13667121084916957685",
    kgid: "/g/11z428qs54",
    mapLink: "https://maps.google.com/?cid=9078533171483511712",
    rating: "4.9",
    reviews: "500+",
    verified: true
  },

  serviceAreas: [
    {
      name: "DIFC",
      href: "/area-we-serve/difc",
      title: "Best Car Repair in DIFC",
      slug: "difc"
    },
    { name: "Trade Centre 1", href: "/area-we-serve/trade-centre-1", title: "Best Car Repair in Trade Centre 1", slug: "trade-centre-1" },
    { name: "Trade Centre 2", href: "/area-we-serve/trade-centre-2", title: "Best Car Repair in Trade Centre 2", slug: "trade-centre-2" },
    { name: "Zaa'beel Second", href: "/area-we-serve/zaabeel-second", title: "Best Car Repair in Zaa'beel Second", slug: "zaabeel-second" },
    { name: "Al Kifaf", href: "/area-we-serve/al-kifaf", title: "Best Car Repair in Al Kifaf", slug: "al-kifaf" },
    { name: "Business Bay", href: "/area-we-serve/business-bay", title: "Best Car Repair in Business Bay", slug: "business-bay" },
    { name: "Al Bada'a", href: "/area-we-serve/al-badaa", title: "Best Car Repair in Al Bada'a", slug: "al-badaa" },
    { name: "Dubai Design District", href: "/area-we-serve/dubai-design-district", title: "Best Car Repair in Dubai Design District", slug: "dubai-design-district" },
    { name: "Meydan", href: "/area-we-serve/meydan", title: "Best Car Repair in Meydan", slug: "meydan" },
    { name: "Pearl Jumeirah", href: "/area-we-serve/pearl-jumeirah", title: "Best Car Repair in Pearl Jumeirah", slug: "pearl-jumeirah" },
  ],
  operatingHours: [
    { day: "Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
    { day: "Monday", hours: "24 Hours" },
    { day: "Tuesday", hours: "24 Hours" },
    { day: "Wednesday", hours: "24 Hours" },
    { day: "Thursday", hours: "24 Hours" },
    { day: "Friday", hours: "24 Hours" },
  ],
  city: "Dubai",
  country: "UAE",
  services: [
    { name: "Car Battery Replacement Dubai", slug: "/services/car-battery-replacement-dubai" },
    { name: "Car Jump Start Service Dubai", slug: "/services/car-jump-start-service-dubai" },
    { name: "Car AC Repair Dubai", slug: "/services/car-ac-repair-dubai" },
    { name: "Alternator Repair Dubai", slug: "/services/alternator-repair-dubai" },
    { name: "Car Starter Motor Repair Dubai", slug: "/services/car-starter-motor-repair-dubai" },
    { name: "Car Radiator Repair Dubai", slug: "/services/car-radiator-repair-and-replacement-dubai" },
    { name: "Fuel Pump Repair Dubai", slug: "/services/fuel-pump-repair-dubai" },
    { name: "Car Brake Pad Repair Dubai", slug: "/services/car-brake-pad-repair-and-replacement-dubai" },
    { name: "ABS System Repair Dubai", slug: "/services/abs-system-repair-dubai" },
    { name: "Emergency Car Repair Dubai", slug: "/services/emergency-car-repair-dubai" },
    { name: "Car Mechanic Service Dubai", slug: "/services/car-mechanic-service-dubai" },
    { name: "Onsite Car Repair Dubai", slug: "/services/onsite-car-repair-dubai" },
    { name: "Car Maintenance Service Dubai", slug: "/services/car-maintenance-service-dubai" },
    { name: "Oil Change Service Dubai", slug: "/services/oil-change-service-dubai" },
    { name: "Car Transmission Repair Dubai", slug: "/services/car-transmission-repair-dubai" },
    { name: "Car Detailing Dubai", slug: "/services/car-detailing-dubai" },
    { name: "Car AC Gas Refill Dubai", slug: "/services/car-ac-gas-refill-dubai" },
  ],

  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Area We Serve", href: "/area-we-serve" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],

  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Sitemap", href: "/sitemap.xml" },
  ],

  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/yourpage" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/youraccount" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/youraccount" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@yourchannel" },
  ],

  contactLinks: [
    { name: "Map", icon: MapPin, href: "https://maps.google.com/?cid=9078533171483511712" },
    { name: "Phone", icon: Phone, href: "tel:+971552330721" },
    { name: "Email", icon: Mail, href: "mailto:24carservicedxb@gmail.com" },
  ],
};
