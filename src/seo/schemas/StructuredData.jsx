import { SiteConfig } from "@/config/site";

export default function StructuredData() {

  const [lat, lng] = SiteConfig.coordinate.split(",").map(Number);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [

      // ORGANIZATION
      {
        "@type": "Organization",
        "@id": `${SiteConfig.url}/#organization`,
        "name": SiteConfig.brandName,
        "url": SiteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${SiteConfig.url}/logo.png`
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": SiteConfig.gbp.phone,
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["English"]
        },
        "sameAs": SiteConfig.socialLinks.map(link => link.href)
      },

      // WEBSITE
      {
        "@type": "WebSite",
        "@id": `${SiteConfig.url}/#website`,
        "url": SiteConfig.url,
        "name": SiteConfig.brandName,
        "publisher": {
          "@id": `${SiteConfig.url}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${SiteConfig.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },

      // LOCAL BUSINESS (MOST IMPORTANT FOR LOCAL SEO)
      {
        "@type": "AutoRepair",
        "@id": `${SiteConfig.url}/#localbusiness`,
        "name": SiteConfig.gbp.name,
        "url": SiteConfig.url,
        "telephone": SiteConfig.gbp.phone,
        "image": `${SiteConfig.url}/hero-image.png`,
        "priceRange": "$$",
        "parentOrganization": {
          "@id": `${SiteConfig.url}/#organization`
        },

        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.location,
          "addressLocality": SiteConfig.city,
          "addressCountry": "AE"
        },

        "geo": {
          "@type": "GeoCoordinates",
          "latitude": lat,
          "longitude": lng
        },

        "hasMap": `https://www.google.com/maps?cid=${SiteConfig.gbp.cid}`,

        "areaServed": SiteConfig.serviceAreas.map(area => ({
          "@type": "AdministrativeArea",
          "name": area.name
        })),

        "openingHoursSpecification": SiteConfig.operatingHours.map(day => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": day.day,
          "opens": "00:00",
          "closes": "23:59"
        })),

        "sameAs": SiteConfig.socialLinks.map(link => link.href)
      },

      // SERVICES
      {
        "@type": "ItemList",
        "@id": `${SiteConfig.url}/#services`,
        "name": "Car Repair Services Dubai",
        "itemListElement": SiteConfig.services.map((service, index) => ({
          "@type": "Service",
          "position": index + 1,
          "name": service.name,
          "url": `${SiteConfig.url}${service.slug}`,
          "provider": {
            "@id": `${SiteConfig.url}/#localbusiness`
          },
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          }
        }))
      }

    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}