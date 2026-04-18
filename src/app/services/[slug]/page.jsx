import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import { notFound } from 'next/navigation'
import { services } from '@/data/services'
import ServiceSchema from '@/components/schemas/ServiceSchema'
import { SiteConfig } from '@/config/site';
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug);

  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SiteConfig.url}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s?.slug === slug)
  if (!service) {
    return notFound()
  }

  const items = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service?.cardTitle || 'Service Details' }
  ];

  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <ServiceSchema service={service} />
    <ServiceDetailsPage service={service} />
  </>
}
