
import { services } from "@/data/services";
import { ServiceCard } from "../Card/ServiceCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function FeaturedServices() {
  return (
    <div className="container py-6 mx-auto">
      <div className="text-center mb-6">
        {/* <Badge variant="outline" className="mb-4 bg-primary/10 text-primary">
            Our Services
          </Badge> */}
        <h2 className="text-3xl font-bold sm:text-3xl md:text-5xl mb-1 md:mb-3">
          Featured <span className="text-[#007A55]">Car Repair</span> Services
        </h2>
        <p className="text-md w-[85%] md:text-lg text-gray-600 max-w-2xl mx-auto">
          Professional automotive solutions tailored for Dubai's climate and driving conditions
        </p>
      </div>

      <div className="w-[85%] md:w-[80%] lg:container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {services.slice(0, 8).map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <Link className="flex justify-center items-center mt-8" href="/services">
        <Button className="p-5">
          View All Services
        </Button>
      </Link>
    </div>
  );
}