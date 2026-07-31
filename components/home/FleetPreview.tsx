import Image from "next/image";
import { fleet } from "@/lib/data";

export default function FleetPreview() {
  return (
    <section id="fleet" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            OUR FLEET
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Choose the Right Vehicle
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From budget-friendly cars to spacious Tempo Travellers, we have the
            right vehicle for every journey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <div
              key={car.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{car.name}</h3>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {car.seats} Seats
                  </span>
                </div>

                <p className="mt-2 text-gray-500">{car.type}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919023801735?text=${encodeURIComponent(
                    `Hello Shreenathji Travels,\n\nI'm interested in booking the ${car.name}. Please share the availability and fare.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-xl bg-blue-700 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
                >
                  Book This Vehicle
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}