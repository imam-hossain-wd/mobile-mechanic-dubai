export default function ServiceSchema({ service }) {
  if (!service) return null;

  const baseUrl = "https://www.24carservicedubai.com";
  const serviceUrl = `${baseUrl}/services/${service.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.title,
        description: service.metaDescription,
        url: serviceUrl,
        serviceType: service.cardTitle || service.title,
        areaServed: {
          "@type": "City",
          name: "Dubai"
        },
        provider: {
          "@id": `${baseUrl}/#localbusiness`
        },

        availableChannel: {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            name: "Customer Location in Dubai"
          },
          servicePhone: {
            "@type": "ContactPoint",
            telephone: "+971545695980",
            contactType: "customer service",
            areaServed: "AE",
            availableLanguage: ["English", "Arabic"]
          }
        },

        offers: {
          "@type": "Offer",
          url: serviceUrl,
          priceCurrency: "AED",
          availability: "https://schema.org/InStock"
        },

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.cardTitle} Features`,
          itemListElement:
            service.features?.map((feature) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: feature.replace("✓", "").trim()
              }
            })) || []
        }
      },

      // ✅ FAQ AUTO FROM YOUR DATA
      {
        "@type": "FAQPage",
        "@id": `${serviceUrl}#faq`,
        mainEntity:
          service.faq?.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          })) || []
      },

      // ✅ Breadcrumb AUTO
      {
        "@type": "BreadcrumbList",
        "@id": `${serviceUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${baseUrl}/services`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.cardTitle || service.title,
            item: serviceUrl
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}