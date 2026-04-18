'use client'

import React from 'react';
import { Star, ChevronRight, Check, Quote, ThumbsUp, Calendar, MessageSquare } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import googleLogo from '../../../assets/googleLogo.png'
import googleVerifiedBadge from '../../../assets/googleVerifiedBadge.png'
import googleTextIcon from '../../../assets/googleTextIcon.png'
import Link from 'next/link';
import { cn } from '@/lib/utils';

const reviews = [
  {
    name: "Ahmed K.",
    rating: 5,
    comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
    date: "2 days ago",
    isGoogleReview: true,
    helpful: 12
  },
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
    date: "1 week ago",
    isGoogleReview: true,
    helpful: 8
  },
  {
    name: "Rajiv P.",
    rating: 4,
    comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
    date: "3 weeks ago",
    isGoogleReview: true,
    helpful: 15
  },
  {
    name: "Fatima L.",
    rating: 5,
    comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
    date: "5 days ago",
    isGoogleReview: true,
    helpful: 7
  },
  {
    name: "Omar H.",
    rating: 4,
    comment: "Convenient on-site service, but a bit pricey compared to local garages. Still worth it for emergencies.",
    date: "2 weeks ago",
    isGoogleReview: true,
    helpful: 10
  }
];

export default function Reviews() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[12.5%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[25%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[37.5%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[50%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[62.5%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[75%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[87.5%]" />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] border-2 border-[#007A55]/10 rounded-full translate-x-1/4" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] border-2 border-[#00943B]/10 rounded-full -translate-x-1/4" />

        {/* Diagonal Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #007A55 0px, #007A55 1px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-[#007A55] to-[#00943B]" />
            <span className="text-xs font-mono text-[#007A55] tracking-[0.2em] uppercase">
              Client Testimonials
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            Trusted by
            <span className="block font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent mt-2">
              Dubai's Finest Drivers
            </span>
          </h2>
        </div>

        {/* Google Rating Card - Architectural Style */}
        <div className="border border-gray-200 bg-white p-6 mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {/* Google Icon */}
              <div className="w-16 h-16 bg-[#007A55]/5 flex items-center justify-center border border-[#007A55]/20">
                <Image
                  src={googleTextIcon}
                  alt="Google"
                  width={80}
                  height={80}
                  quality={100}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Rating Stats */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-light text-gray-900">4.9</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#007A55] text-[#007A55]" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500">Based on 52 Google reviews</span>
                  <div className="w-px h-4 bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-[#007A55]" />
                    <span className="text-gray-600">Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="https://g.page/r/CdrwD2SVrLO7EAI/review"
              className="px-6 py-3 bg-[#007A55] hover:bg-[#00943B] text-white text-sm font-medium tracking-wider flex items-center gap-2 transition-colors"
            >
              Write a Review
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="reviews-carousel"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="group h-full border border-gray-200 bg-white hover:border-[#007A55]/30 transition-colors">
                  {/* Quote Icon - Architectural Element */}
                  <div className="absolute top-4 right-4 text-[#007A55]/10">
                    <Quote className="h-12 w-12" />
                  </div>

                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Initial Circle - Square */}
                        <div className="relative">
                          <div className="w-12 h-12 bg-[#007A55] flex items-center justify-center">
                            <span className="text-lg font-medium text-white">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          {review.isGoogleReview && (
                            <div className="absolute -bottom-1 -right-1 bg-white border border-gray-200 p-0.5">
                              <Image
                                src={googleLogo}
                                alt="Google Verified"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-gray-900">
                              {review.name}
                            </h3>
                            <Image
                              src={googleVerifiedBadge}
                              alt="Google"
                              width={60}
                              height={60}
                              quality={100}
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={cn(
                            "h-4 w-4",
                            j < review.rating ? 'fill-[#007A55] text-[#007A55]' : 'text-gray-200'
                          )}
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      "{review.comment}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      {/* Helpful Count */}
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{review.helpful} found this helpful</span>
                      </div>

                      {/* Read More Link */}
                      <Link
                        href="https://share.google/2cj4qTPpn0OHGc1zf"
                        className="text-xs font-medium text-[#007A55] hover:text-[#00943B] flex items-center gap-1"
                      >
                        Full Review
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Serial Number - Architectural Detail */}
                  <div className="absolute top-4 left-4 text-[8px] font-mono text-gray-300 tracking-wider">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="flex justify-center mt-8">
            <div className="swiper-pagination custom-pagination"></div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Google Reviews", value: "52", icon: MessageSquare },
              { label: "Average Rating", value: "4.9/5", icon: Star },
              { label: "Verified Reviews", value: "100%", icon: Check },
              { label: "Satisfied Clients", value: "5000+", icon: ThumbsUp },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#007A55]/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-[#007A55]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .reviews-carousel .swiper-button-prev,
        .reviews-carousel .swiper-button-next {
          display: none;
        }
        
        .custom-bullet {
          width: 8px;
          height: 8px;
          background: #007A55;
          opacity: 0.2;
          border-radius: 0;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .custom-bullet-active {
          opacity: 1;
          width: 24px;
          background: #007A55;
        }
        
        .custom-pagination {
          display: flex;
          justify-content: center;
          gap: 4px;
        }
      `}</style>
    </section>
  );
}