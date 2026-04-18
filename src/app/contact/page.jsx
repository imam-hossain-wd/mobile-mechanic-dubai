import AppBreadcrumb from "@/components/ui/shared/AppBreadcrumb/AppBreadcrumb";
import { SiteConfig } from "@/config/site";
import ContactPage from "@/pages/ContactPage/ContactPage";
import BreadcrumbSchema from "@/seo/schemas/BreadcrumbSchema";


export const metadata = {
  title: "Contact Mobile Mechanic Dubai | Call 24/7",
  description: "Contact our 24/7 mobile mechanic in Dubai for fast car repair and roadside assistance. Call or WhatsApp now for immediate help.",
  alternates: {
    canonical: `${SiteConfig.url}/contact`,
  },
};

const items = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" }
];


export default function Contact() {
  return <>
    <BreadcrumbSchema items={items} />
    <AppBreadcrumb items={items} />
    <ContactPage />
  </>
}
