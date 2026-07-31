import {
  Plane,
  Car,
  Map,
  Briefcase,
  Users,
  Bus,
} from "lucide-react";

const services = [
  {
    title: "Airport Transfer",
    description:
      "Reliable pickup and drop service for all nearby airports.",
    icon: Plane,
  },
  {
    title: "Local Taxi",
    description:
      "Comfortable city rides for shopping, business and daily travel.",
    icon: Car,
  },
  {
    title: "Outstation Trips",
    description:
      "Safe and comfortable rides across Gujarat and nearby states.",
    icon: Map,
  },
  {
    title: "Corporate Travel",
    description:
      "Professional transportation for meetings and business trips.",
    icon: Briefcase,
  },
  {
    title: "Family Trips",
    description:
      "Spacious vehicles for family vacations and special occasions.",
    icon: Users,
  },
  {
    title: "Tempo Traveller",
    description:
      "Perfect for group travel, tours, weddings and events.",
    icon: Bus,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Travel Solutions For Every Journey
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Whether you need a local ride, airport transfer or corporate travel,
            Shreenathji Travels is ready to serve you 24×7.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white transition-colors group-hover:bg-yellow-500">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}