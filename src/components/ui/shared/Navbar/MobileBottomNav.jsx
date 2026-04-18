"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrench, Phone, MessageCircle, Image as ImageIcon, ArrowUp, NotebookPen, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/site";


const mobileNavItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
    bgColor: "bg-gradient-to-br from-orange-500 to-amber-500",
    activeBgColor: "bg-gradient-to-br from-orange-600 to-amber-600",
    type: "link"
  },
  {
    name: "Services",
    href: "/services",
    icon: Wrench,
    bgColor: "bg-gradient-to-br from-orange-500 to-amber-500",
    activeBgColor: "bg-gradient-to-br from-orange-600 to-amber-600",
    type: "link"
  },
  {
    name: "Book Now",
    href: "/book-appointment",
    icon: NotebookPen,
    bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    activeBgColor: "bg-gradient-to-br from-green-600 to-emerald-600",
    type: "drawer"
  },
  {
    name: "Call",
    href: SiteConfig.numberCallLink,
    icon: Phone,
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    activeBgColor: "bg-gradient-to-br from-blue-600 to-cyan-600",
    type: "link"
  },
  {
    name: "Whatsapp",
    href: SiteConfig.whatsappCallLink,
    icon: MessageCircle,
    bgColor: "bg-gradient-to-br from-green-600 to-lime-500",
    activeBgColor: "bg-gradient-to-br from-green-700 to-lime-600",
    type: "link"
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeItem = mobileNavItems.find(item => pathname === item.href);
    setActiveTab(activeItem?.name || "");
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed -bottom-20 left-0 right-0 z-50">
      {/* Floating Scroll to Top Button */}
      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="absolute -top-24 md:-top-52 right-4 animate-bounce rounded-full h-10 w-10 bg-primary shadow-xl border-0 hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Modern Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-xl border-t border-gray-200/60 shadow-2xl md:hidden">
        <div className="flex justify-around items-center h-20 px-2">
          {mobileNavItems?.map((item) => {
            const isActive = pathname === item?.href;
            const Icon = item?.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative group",
                  isActive ? "text-primary" : "text-gray-600 hover:text-gray-900"
                )}
              >

                {isActive && (
                  <div className="absolute -top-1 w-12 h-1 bg-primary rounded-full transition-all duration-300" />
                )}
                <div className={cn(
                  "relative p-2 rounded-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95",
                  isActive
                    ?  "bg-primary shadow-lg scale-110"
                    : "bg-primary opacity-90 hover:opacity-100",
                  "flex items-center justify-center"
                )}>
                  <Icon className="h-5 w-5 text-white" />

                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping" />
                  )}
                </div>
                {/* {isActive && (
                  <div className="absolute -top-1 w-12 h-1 bg-primary rounded-full transition-all duration-300" />
                )}
                <div className={cn(
                  "relative p-2 rounded-2xl transition-all duration-300 group-hover:scale-110 group-active:scale-95",
                  isActive
                    ? item.activeBgColor + " shadow-lg scale-110"
                    : item.bgColor + " opacity-90 hover:opacity-100",
                  "flex items-center justify-center"
                )}>
                  <Icon className="h-5 w-5 text-white" />

                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping" />
                  )}
                </div> */}



                {/* Label with Better Typography */}
                <span className={cn(
                  "text-xs font-medium mt-2 transition-all duration-300",
                  isActive
                    ? "text-primary scale-105 font-semibold"
                    : "text-gray-600 group-hover:text-gray-900"
                )}>
                  {item.name}
                </span>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 rounded-xl bg-transparent group-hover:bg-gray-100/50 transition-colors duration-300 -z-10" />
              </Link>
            );
          })}
        </div>

        {/* Subtle Top Glow Effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent" />
      </nav>

      {/* Safety Spacer for Content */}
      <div className="h-20 bg-transparent md:hidden" />
    </div>
  );
}
