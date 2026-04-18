
import { notFound } from 'next/navigation'
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import ServiceAreaDetailPage from '@/pages/ServiceArea/ServiceAreaDetailPage';
import { serviceAreas } from '@/data/serviceAreas/serviceAreas';
import { BookOpen, MapPin } from 'lucide-react';

export default async function AreaWeServeDetail({ params }) {
  const { slug } = await params
  
  const area = serviceAreas?.find((s) => s?.slug === slug);

  if (!area) {
    return notFound()
  }

  const items = [
    { label: "Home", href: "/", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Service Areas", href: "/areas", icon: <MapPin className="h-4 w-4" /> },
    { label: area?.name, icon: <MapPin className="h-4 w-4" /> }
  ];

  return (
    <>
      <BreadcrumbSchema items={items} />
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <AppBreadcrumb items={items} />
        </div>
      </div>
      <ServiceAreaDetailPage area={area} />
    </>
  );
}