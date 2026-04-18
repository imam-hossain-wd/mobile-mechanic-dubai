import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import AboutPage from '@/pages/AboutPage/AboutPage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import React from 'react'

export const metadata = {
  title: "About Us | Expert Mobile Mechanic Dubai",
  description: "Learn about our expert mobile mechanics in Dubai. 24/7 service, trusted by 500+ customers for fast and reliable car repair solutions.",
  alternates: {
    canonical: `${SiteConfig.url}/about`,
  },
};

// ------------- About us page description --------------------
// 24 Car Service Dubai is a professional car repair and mobile mechanic service provider in Dubai. Our mission is to deliver fast, reliable, and affordable automotive repair solutions for drivers across the city. With experienced technicians and modern diagnostic tools, we provide onsite car repair, emergency roadside assistance, battery replacement, oil change, brake repair, and complete vehicle maintenance.

// We proudly serve multiple areas across Dubai with both mobile mechanic services and garage-based repairs, ensuring your vehicle receives expert care wherever you are.
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" }
];

export default function Aboout() {
  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <AppBreadcrumb />
    <AboutPage />
  </>
}
