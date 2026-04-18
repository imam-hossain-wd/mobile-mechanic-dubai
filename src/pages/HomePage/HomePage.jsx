import React from 'react'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import Reviews from '@/components/view/Reviews/Reviews'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import StillHaveAnyQuestions from '@/components/view/StillHaveAnyQuestions/StillHaveAnyQuestions'
import BlogCarousel from '../BlogPage/BlogCarousel'
import HomeHero from '@/components/view/Hero/HomeHero'
import FaqStructuredData from '@/seo/schemas/FaqStructuredData'
import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'
import WhoWeAre from '@/components/view/WhoWeAre/WhoWeAre'
import { FAQAccordion } from '@/components/view/FAQAccordion/FAQAccordion'


export default function HomePage() {


    return (
        <div>
            <AppBreadcrumb />
            <FaqStructuredData />

            <HomeHero />
            <FeaturedServices />
            <TrustedService />
            <WhoWeAre />
            <MapComponent />
            <GetTouch />
            <BlogCarousel />
            <Reviews />
            <FAQAccordion />
            <ServiceAreas />
            <StillHaveAnyQuestions />
        </div>
    )
}


