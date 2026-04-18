'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import { blogs } from '@/data/blogs';
import Image from 'next/image';
import { Calendar, User, ChevronRight, Clock, Eye, BookOpen, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BlogCarousel() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[10%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[20%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[30%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[40%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[50%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[60%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[70%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#00943B] to-transparent absolute left-[80%]" />
          <div className="h-full w-px bg-gradient-to-b from-transparent via-[#007A55] to-transparent absolute left-[90%]" />
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
              Automotive Insights
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-[#00943B] to-[#007A55]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            Expert Advice for
            <span className="block font-medium bg-gradient-to-r from-[#007A55] to-[#00943B] bg-clip-text text-transparent mt-2">
              Dubai Drivers
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-4 tracking-wide">
            Professional tips and guides to maintain your vehicle in optimal condition
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="blog-carousel"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="group h-full border border-gray-200 bg-white hover:border-[#007A55]/30 transition-colors">
                  {/* Image Container - Architectural Frame */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-200">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Corner Frames */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/60" />
                    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/60" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white/60" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white/60" />

                    {/* Category Badge */}
                    {blog.category && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 border border-gray-200">
                        <span className="text-[10px] font-mono text-[#007A55] tracking-wider uppercase">
                          {blog.category}
                        </span>
                      </div>
                    )}

                    {/* Read Time Badge */}
                    {blog.readTime && (
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 border border-gray-200">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-[#007A55]" />
                          <span className="text-[10px] text-gray-600">{blog.readTime} min</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-gray-400 border-b border-gray-200 pb-3 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="w-px h-3 bg-gray-200" />
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{blog.author}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#007A55] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 px-2 py-1 text-[10px] text-gray-500 border border-gray-200">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#007A55] hover:text-[#00943B] transition-colors group/link"
                    >
                      Read Article
                      <ChevronRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Serial Number - Architectural Detail */}
                  <div className="absolute top-4 right-4 text-[8px] font-mono text-white/40 tracking-wider">
                    {(blog.id + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows - Custom Styling */}
          <div className="flex justify-end gap-2 mt-8">
            <button className="swiper-button-prev-custom w-10 h-10 border border-gray-200 hover:border-[#007A55] flex items-center justify-center transition-colors">
              <ChevronRight className="h-5 w-5 text-gray-400 rotate-180" />
            </button>
            <button className="swiper-button-next-custom w-10 h-10 border border-gray-200 hover:border-[#007A55] flex items-center justify-center transition-colors">
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#007A55] text-[#007A55] hover:bg-[#007A55] hover:text-white transition-colors text-sm font-medium tracking-wider"
          >
            <BookOpen className="h-4 w-4" />
            View All Articles
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: BookOpen, label: "50+ Articles", value: "Expert Guides" },
              { icon: Eye, label: "100K+ Reads", value: "Monthly Views" },
              { icon: Tag, label: "15+ Topics", value: "Car Maintenance" },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#007A55]/10 flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-[#007A55]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900">{stat.label}</p>
                  <p className="text-[10px] text-gray-500">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .blog-carousel .swiper-button-prev,
        .blog-carousel .swiper-button-next {
          display: none;
        }
        
        .blog-carousel .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #007A55;
          opacity: 0.3;
          border-radius: 0;
        }
        
        .blog-carousel .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          background: #007A55;
          border-radius: 0;
        }
      `}</style>
    </section>
  );
}