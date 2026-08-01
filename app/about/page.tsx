import PageHero from "@/components/layout/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Shreenathji Travels"
        description="Your trusted travel partner in Vadodara for airport transfers, local taxi, outstation trips and corporate travel."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              Trusted Taxi Service in Vadodara
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Shreenathji Travels provides reliable, comfortable and affordable
              transportation services. Whether you need an airport transfer,
              local sightseeing, corporate travel or an outstation trip, our
              experienced drivers and well-maintained vehicles ensure a smooth
              journey.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-10">
            <h3 className="text-2xl font-semibold">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              To provide safe, punctual and customer-focused travel services
              with professional drivers and clean vehicles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}