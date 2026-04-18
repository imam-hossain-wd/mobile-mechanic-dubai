
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Cog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/site";
import NavDrawer from "./NavDrawer";
import { Button } from "../../button";

const {
  email,
  location,
  socialLinks,
  navItems,
  numberCallLink,
  displayNumber
} = SiteConfig;

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b w-full bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        {/* Top Contact Bar - Hidden on mobile */}
        <div className="hidden md:block border-b bg-primary/10 text-sm">
          <div className="container mx-auto py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={numberCallLink} className="flex items-center gap-1 hover:underline">
                <Phone className="h-4 w-4 text-primary" />
                <span>{displayNumber}</span>
              </Link>
              <Link href={`mailto:${email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="h-4 w-4 text-primary" />
                <span>{email}</span>
              </Link>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>



        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">


          <div className="flex-1 md:flex-none">
            <Link href={SiteConfig?.gbp?.mapLink} className="flex items-center gap-3 group">
              {/* Car Repair Icon - Enhanced */}
              <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <Cog className="text-white" />
              </div>

              {/* Business Name - Enhanced Layout */}
              <div className="flex flex-col gap-0">
                {/* First Row: Car Repair + Dubai Badge */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xl font-black tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Car Repair Mobile
                  </span>
                  {/* <span className="text-[11px] font-bold px-2 py-1 bg-primary text-white rounded-full shadow-sm tracking-wide">
          Dubai
        </span> */}
                </div>

                {/* Second Row: Mobile Mechanic with decorative line */}
                <div className="relative">
                  {/* <div className="absolute left-0 top-1/2 w-6 h-px bg-gradient-to-r from-primary/60 to-transparent -translate-y-1/2"></div> */}
                  <span className="text-xl font-black tracking-tight text-gray-800 dark:text-gray-100 pl-">
                    Mechanic    <span className="text-[14px] font-bold px-3 py-1 bg-primary text-white rounded-full shadow-sm tracking-wide">
                      Dubai
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link href="/book-appointment">
            <Button>
              Book Now
            </Button></Link>
          <NavDrawer />
        </div>
      </header>
    </>
  );
}