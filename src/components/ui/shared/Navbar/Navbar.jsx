
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
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

          <div className="flex-1 md:flex-none -ml-3 md:ml-0">
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">

                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    24 Car Service
                  </span>
                  <span className="text-xs font-medium px-1.5 py-0.5 bg-primary text-white rounded-md">
                    Dubai
                  </span>
                </div>


                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Mobile Mechanic
                  </span>
                  <div className="flex gap-0.5 ml-1">
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  </div>
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