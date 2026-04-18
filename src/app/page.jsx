import { SiteConfig } from "@/config/site";
import HomePage from "@/pages/HomePage/HomePage";


export const metadata = {

  title: "24 Car Service Dubai Mobile Mechanic | 24/7 Car Repair Dubai",
  description: "24 Car Service Dubai Mobile Mechanic provides 24/7 mobile car repair and roadside assistance across Dubai. Fast battery replacement, jump start, AC repair, engine diagnostics and complete auto repair at your location.",
  alternates: {
    canonical: `${SiteConfig.url}/`,
  },
  verification: {
    google: "1oV77FBCm-ZXwgNwZ-iQuPKc-aS9l3GaT1X2kKzsZww"
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
