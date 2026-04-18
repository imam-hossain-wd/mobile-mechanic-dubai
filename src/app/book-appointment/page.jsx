import AppBreadcrumb from '@/components/ui/shared/AppBreadcrumb/AppBreadcrumb';
import { SiteConfig } from '@/config/site';
import BookingPage from '@/pages/BookingPage/BookingPage'
import BreadcrumbSchema from '@/seo/schemas/BreadcrumbSchema';
import React from 'react'


export const metadata = {
  title: "Book Car Repair Dubai | 24/7 Mechanic",
  description: "Book your car repair service in Dubai with our 24/7 mobile mechanic. Fast response, onsite repair, and expert service. Schedule now.",
  alternates: {
    canonical: `${SiteConfig.url}/appointment`,
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
