import { SiteConfig } from "@/config/site";

export default function ServiceAreasSchema() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SiteConfig.url}/area-we-serve#areas`,
    "name": `${SiteConfig.brandName} Service Areas in Dubai`,
    "description":
      "24 Car Service Dubai Mobile Mechanic provides 24/7 mobile car repair, battery replacement, roadside assistance and onsite mechanic services across major areas of Dubai.",
    "url": `${SiteConfig.url}/area-we-serve`,
    "numberOfItems": SiteConfig.serviceAreas.length,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",

    "provider": {
      "@type": "AutoRepair",
      "@id": `${SiteConfig.url}/#localbusiness`
    },

    "itemListElement": SiteConfig.serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Place",
        "name": area.name,
        "url": `${SiteConfig.url}${area.href}`,
        "containedInPlace": {
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