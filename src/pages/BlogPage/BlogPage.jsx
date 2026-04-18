

'use client'

import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  User,
  ArrowRight,
  Wrench,
  Battery,
  Gauge,
  Thermometer,
  AlertCircle,
  Shield,
  Clock,
  MapPin,
  BookOpen,
  TrendingUp,
  PenTool,
  Sparkles,
  Search,
  Filter,
  ChevronRight,
  Star,
  Eye,
  MessageSquare,
  Share2,
  Bookmark,
  ThumbsUp
} from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogHero from "@/components/view/Hero/BlogHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categoryIcons = {
  "car ac repair dubai": Thermometer,
  "car battery replacement dubai": Battery,
  "engine diagnostic dubai": Gauge,
  "radiator repair dubai": AlertCircle,
  "brake pad replacement dubai": Wrench,
};

// Get unique categories from blogs
const categories = Array.from(
  new Set(blogs.flatMap(blog => blog.tags))
).slice(0, 8);

// Featured blog (most recent)
const featuredBlog = blogs[0];

// Popular blogs (based on views/likes - simulated)
const popularBlogs = blogs.slice(1, 4);

// Rest of blogs
const recentBlogs = blogs.slice(1, 7);
const allBlogs = blogs;

export default function BlogPage() {
  return (
    <main className="bg-white">
      <BlogHero />

      {/* Stats Bar - Minimal & Professional */}
      <div className="border-b border-gray-200 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-xs text-gray-500 mt-1">Expert Guides</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">15k+</div>
              <div className="text-xs text-gray-500 mt-1">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5+</div>
              <div className="text-xs text-gray-500 mt-1">Years of Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-xs text-gray-500 mt-1">Expert Verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Strip */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mr-2">Topics:</span>
              {categories.map((category, index) => {
                const Icon = categoryIcons[category.toLowerCase()] || BookOpen;
                return (
                  <Link
                    key={index}
                    href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-emerald-50 rounded-full text-xs font-medium text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap"
                  >
                    <Icon className="h-3 w-3" />
                    {category}
                  </Link>
                );
              })}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="h-4 w-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Feature - Asymmetric Layout */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

              {/* Left Column - Featured Content */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">Editor's Pick</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Latest in
                    <span className="block text-emerald-600">Car Care</span>
                  </h1>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Expert insights, maintenance guides, and professional advice to keep your vehicle in peak condition in Dubai's unique climate.
                  </p>

                  {/* Featured Post Preview */}
                  <Link href={`/blog/${featuredBlog.slug}`} className="block group">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-2/5 h-48 md:h-auto">
                          <Image
                            src={featuredBlog.image}
                            alt={featuredBlog.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <CardContent className="md:w-3/5 p-6">
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(featuredBlog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              5 min read
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                            {featuredBlog.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {featuredBlog.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                                <Image
                                  src="/images/author-placeholder.jpg"
                                  alt={featuredBlog.author}
                                  width={24}
                                  height={24}
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-xs text-gray-600">{featuredBlog.author}</span>
                            </div>
                            <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1">
                              Read <ChevronRight className="h-3 w-3" />
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Right Column - Popular Posts */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      Trending Now
                    </h2>
                    <Link href="/blog/popular" className="text-sm text-emerald-600 hover:text-emerald-700">
                      View all
                    </Link>
                  </div>

                  <div className="space-y-5">
                    {popularBlogs.map((blog, index) => (
                      <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block">
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-2">
                              {blog.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                2.5k
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Newsletter Mini */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Weekly Newsletter</h4>
                    <p className="text-xs text-gray-500 mb-3">Get the latest guides in your inbox</p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase - Grid Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Explore by Topic
              </h2>
              <Link href="/blog/categories" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1">
                All categories <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.slice(0, 4).map((category, index) => {
                const Icon = categoryIcons[category.toLowerCase()] || BookOpen;
                const categoryBlogs = blogs.filter(blog => blog.tags.includes(category)).length;
                return (
                  <Link
                    key={index}
                    href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <Card className="border-2 border-gray-100 hover:border-emerald-200 transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 mx-auto bg-emerald-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
                          <Icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{category}</h3>
                        <p className="text-xs text-gray-500">{categoryBlogs} articles</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid - Masonry Style */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Featured Reads
              </h2>
              <Link href="/blog/featured" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Large Card */}
              <Link href={`/blog/${blogs[1]?.slug}`} className="md:col-span-2 lg:col-span-2 group">
                <Card className="border-0 shadow-lg overflow-hidden h-full">
                  <div className="relative h-64">
                    <Image
                      src={blogs[1]?.image}
                      alt={blogs[1]?.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(blogs[1]?.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {blogs[1]?.author}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                        {blogs[1]?.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {blogs[1]?.excerpt}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>

              {/* Small Cards */}
              {blogs.slice(2, 4).map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
                  <Card className="border-0 shadow-md hover:shadow-xl transition-all h-full">
                    <div className="relative h-48">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar className="h-3 w-3" />
                        {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{blog.author}</span>
                        <span className="text-emerald-600 text-sm">Read →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid - Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Latest Articles
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-200 rounded-lg hover:border-emerald-400 transition-colors">
                  <Filter className="h-4 w-4 text-gray-500" />
                </button>
                <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Trending</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allBlogs.slice(0, 6).map((blog, index) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
                  <Card className="border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {index === 0 && (
                        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {Math.floor(Math.random() * 20) + 5}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <Image
                              src="/images/author-placeholder.jpg"
                              alt={blog.author}
                              width={24}
                              height={24}
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs text-gray-600">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 hover:bg-gray-100 rounded-full" onClick={(e) => e.preventDefault()}>
                            <Bookmark className="h-4 w-4 text-gray-400 hover:text-emerald-500" />
                          </button>
                          <button className="p-1.5 hover:bg-gray-100 rounded-full" onClick={(e) => e.preventDefault()}>
                            <Share2 className="h-4 w-4 text-gray-400 hover:text-emerald-500" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-12">
              <Button className="px-8 py-6 bg-white border-2 border-gray-200 text-gray-700 font-medium hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all">
                Load More Articles
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Modern Design */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Expert Car Care Tips
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join 15,000+ car owners who receive weekly maintenance guides and exclusive offers.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-12 px-4 rounded-xl border-0 focus:ring-2 focus:ring-white text-gray-900"
                  />
                  <Button className="h-12 px-8 bg-white text-emerald-600 hover:bg-gray-100 font-semibold">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-6 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    No spam
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Weekly digest
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    Expert content
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <Link href="/blog" className="text-sm text-gray-600 hover:text-emerald-600">
                  Home
                </Link>
                <Link href="/blog/categories" className="text-sm text-gray-600 hover:text-emerald-600">
                  Categories
                </Link>
                <Link href="/blog/popular" className="text-sm text-gray-600 hover:text-emerald-600">
                  Popular
                </Link>
                <Link href="/blog/archive" className="text-sm text-gray-600 hover:text-emerald-600">
                  Archive
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">Follow us:</span>
                <Link href="#" className="text-gray-400 hover:text-emerald-600">Twitter</Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-600">LinkedIn</Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-600">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}