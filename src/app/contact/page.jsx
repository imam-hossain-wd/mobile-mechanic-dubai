import AppBreadcrumb from "@/components/ui/shared/AppBreadcrumb/AppBreadcrumb";
import { SiteConfig } from "@/config/site";
import ContactPage from "@/pages/ContactPage/ContactPage";
import BreadcrumbSchema from "@/seo/schemas/BreadcrumbSchema";


export const metadata = {
  title: "Contact 24 Car Service Dubai | Mobile Mechanic & Roadside Help",
  description: "Contact 24 Car Service Dubai Mobile Mechanic for fast car repair, battery replacement, jump start and roadside assistance. Available 24/7 anywhere in Dubai.",
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
