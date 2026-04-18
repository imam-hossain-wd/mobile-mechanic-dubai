import { SiteConfig } from "@/config/site";
import HomePage from "@/pages/HomePage/HomePage";


export const metadata = {
  title: "Car Repair Dubai | 24/7 Mobile Mechanic Service",
  description: "24/7 mobile mechanic Dubai for car repair, battery, AC & roadside help. Fast onsite service anywhere. Call now for instant assistance!",
  alternates: {
    canonical: `${SiteConfig.url}/`,
  },
  verification: {
    // google: "1oV77FBCm-ZXwgNwZ-iQuPKc-aS9l3GaT1X2kKzsZww"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function Home() {
  return <HomePage />
}
