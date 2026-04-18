
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import ServicePage from '@/pages/ServicePage/ServicePage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import ServicesPageSchema from '@/seo/schemas/ServicesPageSchema';
import React from 'react'

export const metadata = {
  title: "Car Services Dubai | 24/7 Mobile Mechanic",
  description: "Explore our car repair services in Dubai including AC repair, battery replacement, and emergency roadside help. Book fast mobile service now.",
  alternates: {
    canonical: `${SiteConfig.url}/services`,
  },
};
const items = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" }
];

export default function Service() {
  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <ServicesPageSchema />
    <ServicePage />
  </>
}
