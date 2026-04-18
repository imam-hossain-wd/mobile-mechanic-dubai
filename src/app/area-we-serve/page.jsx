



import { SiteConfig } from "@/config/site";
import ServiceAreasSchema from "@/seo/schemas/ServiceAreasSchema";
import AppBreadcrumb from "@/components/ui/shared/AppBreadcrumb/AppBreadcrumb";
import BreadcrumbSchema from "@/seo/schemas/BreadcrumbSchema";
import ServiceAreaPage from "@/pages/ServiceArea/ServiceAreaPage";

export const metadata = {
  title: "Car Repair Areas Dubai | Mobile Mechanic",
  description: "We provide mobile car repair services across Dubai including DIFC, Business Bay, and more. Fast onsite mechanic wherever you are.",
  alternates: {
    canonical: `${SiteConfig.url}/area-we-serve`,
  },
};

const items = [
  { label: "Home", href: "/" },
  { label: "Area We Serve", href: "/area-we-serve" }
];


export default function AreasWeServe() {
  return (
    <section>
      <BreadcrumbSchema items={items} />
      <AppBreadcrumb items={items} />
      <ServiceAreasSchema />
      <ServiceAreaPage />
    </section>
  );
}


