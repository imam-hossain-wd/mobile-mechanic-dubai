import MapComponent from '@/components/ui/shared/Map/MapComponent'
import GetTouch from './GetTouch'
import QuickContact from './QuickContact'
import ServiceAreas from './ServiceAreas'
import ContactHero from '@/components/view/Hero/ContactHero'


export default function ContactPage() {
  return (
    <div>
      <div className="bg-white">
        {/* New Hero Section with Complete Text */}
        <ContactHero />

        {/* Get in Touch Section */}
        <GetTouch />

        {/* Quick Contact Bar */}
        <QuickContact />

        {/* Service Areas */}
        <ServiceAreas />

        {/* Map Section with Enhanced Info */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#007A55]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#007A55]">OUR LOCATION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Our <span className="text-[#007A55]">Service Center</span> in Al Mankhool
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Proudly serving customers across Dubai including Al Mankhool, Deira, Jumeirah, 
                Dubai Marina, Downtown Dubai, and nearby areas.
              </p>
            </div>
            <MapComponent />
          </div>
        </section>

        {/* Business Information for SEO */}
        <div className="sr-only">
          <div itemScope itemType="https://schema.org/AutoRepair">
            <span itemProp="name">Saiful Car Repair & Battery Fixing Dubai</span>
            <span itemProp="alternateName">24 Car Service Dubai</span>
            <span itemProp="description">Need fast and reliable car repair in Dubai? We are available 24/7 to assist you anywhere in the city. Whether you need car battery replacement, emergency jump start, AC repair, or onsite mechanical service, our mobile technicians are ready to reach your location quickly.</span>
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Al Mankhool</span>
              <span itemProp="addressLocality">Dubai</span>
              <span itemProp="addressCountry">UAE</span>
            </span>
            <span itemProp="telephone">+971545695980</span>
            <span itemProp="email">24carservicedubai@gmail.com</span>
            <span itemProp="url">https://www.24carservicedubai.com</span>
            <span itemProp="openingHours">Mo-Su 00:00-23:59</span>
          </div>
        </div>
      </div>
    </div>
  )
}
