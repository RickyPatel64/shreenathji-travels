import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";

import {
  Plane,
  Car,
  Briefcase,
  MapPinned,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Professional taxi and travel services across Vadodara and beyond."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            badge="OUR SERVICES"
            title="Travel Solutions for Every Need"
            description="From airport transfers to corporate travel, we've got you covered."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Plane size={32} />}
              title="Airport Transfer"
              description="Reliable airport pickup and drop with timely service."
            />

            <ServiceCard
              icon={<Car size={32} />}
              title="Local Taxi"
              description="Comfortable rides anywhere within Vadodara."
            />

            <ServiceCard
              icon={<MapPinned size={32} />}
              title="Outstation Trips"
              description="Safe and convenient travel across Gujarat and nearby states."
            />

            <ServiceCard
              icon={<Briefcase size={32} />}
              title="Corporate Travel"
              description="Professional transport solutions for business travel."
            />

            <ServiceCard
              icon={<Users size={32} />}
              title="Tempo Traveller"
              description="Ideal for family trips, events, and group travel."
            />
          </div>
        </div>
      </section>
    </>
  );
}