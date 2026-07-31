import {
  Clock3,
  ShieldCheck,
  Car,
  MapPinned,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "24×7 Availability",
    description: "Available day and night for local, airport and outstation travel.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Professional drivers and well-maintained vehicles for every trip.",
  },
  {
    icon: Car,
    title: "Wide Vehicle Choice",
    description: "Sedans, SUVs and Tempo Travellers for every travel requirement.",
  },
  {
    icon: MapPinned,
    title: "Local & Outstation",
    description: "Serving Vadodara and destinations across Gujarat and beyond.",
  },
  {
    icon: BadgeCheck,
    title: "Clean Vehicles",
    description: "Regularly cleaned, comfortable and air-conditioned vehicles.",
  },
  {
    icon: Headphones,
    title: "Quick Support",
    description: "Call or WhatsApp us anytime for bookings and assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Trusted Travel Partner in Vadodara
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We focus on safety, punctuality and comfort so you can enjoy a
            hassle-free journey every time.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}