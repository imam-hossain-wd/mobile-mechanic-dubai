// "use client";

// import Image from "next/image";
// import { Calendar, User, Tag, Phone, MessageCircle } from "lucide-react";
// import { SiteConfig } from "@/config/site";

// export default function BlogDetailPage({ blog }) {

//   if (!blog) {
//     return (
//       <div className="py-40 text-center text-lg">
//         Blog not found
//       </div>
//     );
//   }

//   // Convert line breaks to paragraphs
//   const paragraphs = blog.content.split("\n\n");

//   return (
//     <article className="w-full">

//       {/* HERO SECTION */}

//       <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden">

//         <Image
//           src={blog.image}
//           alt={blog.title}
//           fill
//           priority
//           className="object-cover"
//         />

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="absolute bottom-0 w-full">
//           <div className="max-w-6xl mx-auto px-6 pb-12 text-white">

//             <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
//               {blog.title}
//             </h1>

//             <div className="flex flex-wrap gap-6 mt-4 text-sm">

//               <span className="flex items-center gap-2">
//                 <User size={16} />
//                 {blog.author}
//               </span>

//               <span className="flex items-center gap-2">
//                 <Calendar size={16} />
//                 {blog.date}
//               </span>

//             </div>

//           </div>
//         </div>
//       </section>


//       {/* CONTENT SECTION */}

//       <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_320px] gap-12">

//         {/* BLOG CONTENT */}

//         <div>

//           <p className="text-lg text-muted-foreground mb-8 font-medium">
//             {blog.excerpt}
//           </p>

//           <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground">

//             {paragraphs.map((para, index) => {

//               // heading detection
//               if (para.startsWith("###")) {
//                 return (
//                   <h3
//                     key={index}
//                     className="text-xl font-semibold text-foreground mt-10"
//                   >
//                     {para.replace("###", "")}
//                   </h3>
//                 );
//               }

//               // list detection
//               if (para.includes("- ")) {
//                 const items = para.split("\n").filter(i => i.startsWith("-"));

//                 return (
//                   <ul key={index} className="space-y-2 list-disc pl-5">
//                     {items.map((item, i) => (
//                       <li key={i}>{item.replace("- ", "")}</li>
//                     ))}
//                   </ul>
//                 );
//               }

//               return (
//                 <p key={index}>
//                   {para.replace(/\*\*/g, "")}
//                 </p>
//               );
//             })}

//           </div>


//           {/* TAGS */}

//           <div className="flex flex-wrap gap-3 mt-12">

//             {blog.tags?.map((tag, index) => (
//               <span
//                 key={index}
//                 className="flex items-center gap-2 text-sm bg-muted px-4 py-2 rounded-full"
//               >
//                 <Tag size={14} />
//                 {tag}
//               </span>
//             ))}

//           </div>

//         </div>


//         {/* SIDEBAR */}

//         <aside className="space-y-6">

//           {/* CALL BOX */}

//           <div className="bg-card border rounded-xl p-6 shadow-sm">

//             <h3 className="text-xl font-semibold mb-3">
//               Need Car Repair in Dubai?
//             </h3>

//             <p className="text-muted-foreground text-sm mb-6">
//               Our mobile mechanics can reach you anywhere in Dubai quickly.
//             </p>

//             <div className="space-y-3">

//               <a
//                 href={SiteConfig.numberCallLink}
//                 className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
//               >
//                 <Phone size={18} />
//                 Call Now
//               </a>

//               <a
//                 href={SiteConfig.whatsappCall}
//                 target="_blank"
//                 className="flex items-center justify-center gap-2 w-full border py-3 rounded-lg font-medium hover:bg-muted transition"
//               >
//                 <MessageCircle size={18} />
//                 WhatsApp
//               </a>

//             </div>

//           </div>


//           {/* POPULAR SERVICES */}

//           <div className="bg-card border rounded-xl p-6 shadow-sm">

//             <h3 className="text-lg font-semibold mb-4">
//               Popular Services
//             </h3>

//             <ul className="space-y-3 text-sm text-muted-foreground">

//               <li>• Car Battery Replacement</li>
//               <li>• Car AC Repair</li>
//               <li>• Engine Diagnostics</li>
//               <li>• Radiator Repair</li>
//               <li>• Brake Pad Replacement</li>

//             </ul>

//           </div>

//         </aside>

//       </section>

//     </article>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  Tag, 
  Phone, 
  MessageCircle,
  Clock,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  Eye,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Wrench,
  Battery,
  Thermometer,
  Gauge,
  AlertCircle,
  Zap,
  Droplet,
  Award,
  Shield,
  Star
} from "lucide-react";
import { SiteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BlogDetailPage({ blog }) {
  if (!blog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Smart content parsing
  const paragraphs = blog.content.split("\n\n");
  
  // Reading time estimation
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Related posts (simulated - would come from API)
  const relatedPosts = [
    { title: "How to Extend Your Car Battery Life", slug: "#", image: "/images/blog/battery.jpg" },
    { title: "Common AC Problems in Dubai Summer", slug: "#", image: "/images/blog/ac.jpg" },
    { title: "When to Replace Brake Pads", slug: "#", image: "/images/blog/brake.jpg" }
  ];

  // Service icons mapping
  const serviceIcons = {
    "Battery": Battery,
    "AC": Thermometer,
    "Engine": Gauge,
    "Radiator": AlertCircle,
    "Brake": Zap,
    "Oil": Droplet,
    "default": Wrench
  };

  // Get icon for service
  const getServiceIcon = (serviceName) => {
    const matched = Object.entries(serviceIcons).find(([key]) => 
      serviceName.includes(key)
    );
    return matched ? matched[1] : serviceIcons.default;
  };

  return (
    <article className="bg-white">
      
      {/* Back Navigation */}
      <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bookmark className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Modern & Minimal */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                {blog.tags?.[0] || "Car Care Guide"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <User className="h-4 w-4" />
                </div>
                <span className="text-sm">{blog.author}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <Calendar className="h-4 w-4" />
                </div>
                <span className="text-sm">{blog.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-sm">{readingTime} min read</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <Eye className="h-4 w-4" />
                </div>
                <span className="text-sm">1.2k views</span>
              </div>
            </div>

            {/* Engagement Stats */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
              <button className="flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-colors">
                <ThumbsUp className="h-5 w-5" />
                <span className="text-sm">24 likes</span>
              </button>
              <button className="flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm">8 comments</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Excerpt */}
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "{blog.excerpt}"
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((para, index) => {
                  // Heading detection
                  if (para.startsWith("###")) {
                    return (
                      <h2 
                        key={index} 
                        className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
                      >
                        {para.replace("###", "")}
                      </h2>
                    );
                  }

                  // Subheading detection
                  if (para.startsWith("##")) {
                    return (
                      <h3 
                        key={index} 
                        className="text-xl md:text-2xl font-semibold text-gray-800 mt-8 mb-3"
                      >
                        {para.replace("##", "")}
                      </h3>
                    );
                  }

                  // List detection
                  if (para.includes("- ")) {
                    const items = para.split("\n").filter(i => i.trim().startsWith("-"));
                    return (
                      <ul key={index} className="space-y-3 my-6">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5"></span>
                            <span className="text-gray-700">{item.replace("- ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Regular paragraph
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {para.replace(/\*\*/g, "")}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags?.map((tag, index) => {
                    const Icon = getServiceIcon(tag);
                    return (
                      <Link
                        key={index}
                        href={`/blog/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-emerald-50 rounded-full text-sm text-gray-700 hover:text-emerald-600 transition-colors"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {tag}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <User className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {blog.author}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Senior Automotive Expert at 24 Car Service Dubai with over 10 years of experience in vehicle diagnostics and repair.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">RTA Certified</span>
                      <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">15+ Articles</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                  Comments (4)
                </h3>
                
                <div className="space-y-6">
                  {[1, 2].map((_, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-2xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">Ahmed R.</h4>
                            <span className="text-xs text-gray-500">2 days ago</span>
                          </div>
                          <p className="text-sm text-gray-700">
                            Very helpful article! The tips about battery maintenance saved me from getting stranded.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-8">
                  <textarea
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    rows={3}
                  ></textarea>
                  <div className="flex justify-end mt-3">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Sticky Container */}
              <div className="sticky top-24 space-y-8">
                
                {/* Author Mini Card */}
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 h-20"></div>
                  <CardContent className="relative px-6 pb-6">
                    <div className="absolute -top-10 left-6">
                      <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                        <User className="h-10 w-10 text-emerald-600" />
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="text-lg font-bold text-gray-900">{blog.author}</h4>
                      <p className="text-xs text-gray-500 mb-3">Automotive Expert</p>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-400" fill="currentColor" />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">(89)</span>
                      </div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Follow Author
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action Card */}
                <Card className="border-0 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Need Car Repair in Dubai?</h3>
                    <p className="text-white/90 text-sm mb-6">
                      Our certified mobile mechanics can reach you anywhere in Dubai within 30 minutes.
                    </p>
                    
                    <div className="space-y-3">
                      <Link href={SiteConfig.numberCallLink}>
                        <Button className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-6">
                          <Phone className="h-5 w-5 mr-2" />
                          Call Now: {SiteConfig.displayNumber}
                        </Button>
                      </Link>
                      
                      <Link href={SiteConfig.whatsappCallLink} target="_blank">
                        <Button 
                          variant="outline" 
                          className="w-full border-white text-white hover:bg-white/10 py-6"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          WhatsApp Us
                        </Button>
                      </Link>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          RTA Certified
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          24/7 Support
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Services */}
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-emerald-600" />
                      Popular Services
                    </h3>
                    
                    <div className="space-y-3">
                      {[
                        { name: "Car Battery Replacement", icon: Battery, price: "From 299 AED" },
                        { name: "AC Repair Service", icon: Thermometer, price: "From 199 AED" },
                        { name: "Engine Diagnostics", icon: Gauge, price: "From 149 AED" },
                        { name: "Brake Pad Replacement", icon: Zap, price: "From 249 AED" },
                        { name: "Oil Change Service", icon: Droplet, price: "From 99 AED" }
                      ].map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={index} 
                            href="/services"
                            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                <Icon className="h-4 w-4 text-emerald-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{service.name}</p>
                                <p className="text-xs text-gray-500">{service.price}</p>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link 
                        href="/services" 
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center justify-center gap-1"
                      >
                        View All Services
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                    
                    <div className="space-y-4">
                      {relatedPosts.map((post, index) => (
                        <Link key={index} href={post.slug} className="group block">
                          <div className="flex gap-3">
                            <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <div className="absolute inset-0 bg-gray-200"></div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">5 min read</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Mini */}
                <Card className="border border-gray-200 bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Weekly Newsletter</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get expert car care tips delivered to your inbox
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Strip */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">More from the Blog</h2>
              <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((_, index) => (
                <Link key={index} href="#" className="group">
                  <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative h-48 bg-gray-200">
                      <div className="absolute inset-0 bg-gray-300"></div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
                        How to Maintain Your Car During Dubai Summer
                      </h3>
                      <p className="text-xs text-gray-500">March 15, 2024 • 4 min read</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}