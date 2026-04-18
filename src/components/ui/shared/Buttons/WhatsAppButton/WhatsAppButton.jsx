import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteConfig } from "@/config/site";
import Link from "next/link";


function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}



export function WhatsAppButton({ className = "", ...props }) {
  return (
    <Button
      asChild
      className={cn(
        "sm:w-[160px] md:w-[160px] gap-2 bg-[#25D366] hover:bg-[#128C7E]",
        "py-2 text-sm md:py-4 md:text-base lg:py-5 lg:text-lg",
        className
      )}
      {...props}
    >
      <Link
        href={SiteConfig.whatsappCallLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
        <span>WhatsApp</span>
      </Link>
    </Button>
  );
}

