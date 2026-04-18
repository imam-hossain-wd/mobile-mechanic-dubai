// components/schema/ServicesPageSchema.tsx

import { SiteConfig } from "@/config/site";

export default function ServicesPageSchema() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SiteConfig.url}/services#itemlist`,
    "name": `${SiteConfig.brandName} - Complete Car Repair Services in Dubai`,
    "description":
      "Explore professional mobile car repair services in Dubai including battery replacement, jump start, AC repair, alternator repair and emergency roadside assistance by 24 Car Service Dubai Mobile Mechanic.",
    "url": `${SiteConfig.url}/services`,
    "numberOfItems": SiteConfig.services.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",

    "provider": {
      "@type": "AutoRepair",
      "@id": `${SiteConfig.url}/#localbusiness`
    },

    "itemListElement": SiteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "url": `${SiteConfig.url}${service.slug}`,
        "provider": {
          "@id": `${SiteConfig.url}/#localbusiness`
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}