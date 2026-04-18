



import { SiteConfig } from "@/config/site";
import ServiceAreasSchema from "@/seo/schemas/ServiceAreasSchema";
import AppBreadcrumb from "@/components/ui/shared/AppBreadcrumb/AppBreadcrumb";
import BreadcrumbSchema from "@/seo/schemas/BreadcrumbSchema";
import ServiceAreaPage from "@/pages/ServiceArea/ServiceAreaPage";

export const metadata = {
  title: "Mobile Car Repair Service Areas in Dubai | 24 Car Service",
  description: "24 Car Service Dubai Mobile Mechanic provides fast 24/7 mobile car repair across Dubai including Deira, Dubai Marina, Downtown, Jumeirah, Zabeel, Al Mankhool, Al Raffa and nearby areas.",
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


