// app/blog/page.tsx (Hero Section Only)

import { BookOpen, User, TrendingUp, Search } from "lucide-react";
import { blogs } from "@/data/blogs"; // Adjust import path as needed
import Image from "next/image";
import { hero, images } from "@/utils/assets";

const blogHero = images.blog
export default function BlogHero() {
  return (
    <section className="relative h-[50vh] md:h-[50vh] min-h-[400px] w-full overflow-hidden">
      {/* Background Image - Same style as contact page */}
      <div className="absolute inset-0">
        <Image
          src={hero.BlogHero}
          alt="Car Service Background"
          fill
          className="object-cover object-center scale-110"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full mx-auto px-4">
        <div className="flex h-full flex-col justify-center max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4 w-fit">
            <BookOpen className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-white">Expert Automotive Knowledge</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
           <span className="text-emerald-400">Car Repair Blog – </span> 
            <span >Expert Auto Tips & Guides in Dubai</span>
          </h1>

          {/* Description */}
          <p className="text-base text-white/80 mb-5 max-w-xl leading-relaxed">
            Expert advice, maintenance tips, and guides to keep your car running smoothly
            in Dubai's challenging climate.
          </p>

          {/* Stats Row - Compact */}
          <div className="flex flex-wrap items-center gap-5 mb-5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                <BookOpen className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">{blogs.length}+</span>
                <span className="text-xs text-white/60 ml-1">Articles</span>
              </div>
            </div>

            <div className="w-px h-5 bg-white/20"></div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                <User className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">5+</span>
                <span className="text-xs text-white/60 ml-1">Authors</span>
              </div>
            </div>

            <div className="w-px h-5 bg-white/20"></div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">10k+</span>
                <span className="text-xs text-white/60 ml-1">Readers</span>
              </div>
            </div>
          </div>

          {/* Search Bar - Compact */}
          {/* <div className="max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full h-12 pl-12 pr-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/20 transition-colors text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
