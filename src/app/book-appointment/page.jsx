import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import BookingPage from '@/pages/BookingPage/BookingPage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import React from 'react'


export const metadata = {
  title: "Book Car Repair Appointment Dubai | Mobile Mechanic 24/7",
  description: "Book your mobile car repair appointment with 24 Car Service Dubai Mobile Mechanic. Fast battery replacement, jump start, AC repair and roadside assistance available 24/7.",
  alternates: {
    canonical: `${SiteConfig.url}/book-appointment`,
  },
};
const items = [
    { label: "Home", href: "/" },
    { label: "Book Appointment", href: "/book-appointment" }
];

export default function BookAppointment() {
    return <>
        <BreadcrumbSchema items={items} />
        <AppBreadcrumb items={items} />
        <BookingPage />
    </>
}
