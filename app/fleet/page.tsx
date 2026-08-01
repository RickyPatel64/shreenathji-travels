import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import FleetCard from "@/components/fleet/FleetCard";
import { fleet } from "@/lib/fleet";

export default function FleetPage() {
  return (
    <>
      <PageHero
        title="Our Fleet"
        description="Choose the right vehicle for your journey."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            badge="OUR VEHICLES"
            title="Travel in Comfort"
            description="Well-maintained vehicles for every travel requirement."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle) => (
              <FleetCard key={vehicle.name} {...vehicle} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}