// components/view/QuickContact/QuickContact.tsx
import Link from 'next/link'
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function QuickContact() {
  return (
    <section className="bg-white py-6 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Link 
            href="tel:+971545695980"
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-[#007A55] group transition-all duration-300"
          >
            <Phone className="h-6 w-6 text-[#007A55] group-hover:text-white mb-2" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-white">Call Now</span>
          </Link>

          <Link 
            href="https://wa.me/971545695980"
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-[#007A55] group transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6 text-[#007A55] group-hover:text-white mb-2" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-white">WhatsApp</span>
          </Link>

          <Link 
            href="mailto:24carservicedubai@gmail.com"
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-[#007A55] group transition-all duration-300"
          >
            <Mail className="h-6 w-6 text-[#007A55] group-hover:text-white mb-2" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-white">Email</span>
          </Link>

          <Link 
            href="#map"
            className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-[#007A55] group transition-all duration-300"
          >
            <MapPin className="h-6 w-6 text-[#007A55] group-hover:text-white mb-2" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-white">Location</span>
          </Link>

          <div className="flex flex-col items-center justify-center p-4 bg-[#007A55] rounded-xl col-span-2 md:col-span-1">
            <Clock className="h-6 w-6 text-white mb-2" />
            <span className="text-sm font-medium text-white">24/7 Service</span>
          </div>
        </div>
      </div>
    </section>
  )
}