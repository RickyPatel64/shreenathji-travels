import SectionHeading from "@/components/ui/SectionHeading";
const testimonials = [
  {
    name: "Rahul Patel",
    location: "Vadodara",
    review:
      "Very professional service. The driver arrived on time and the journey was comfortable. Highly recommended!",
  },
  {
    name: "Priya Shah",
    location: "Vadodara",
    review:
      "Booked an airport drop through WhatsApp. The process was simple and the vehicle was clean.",
  },
  {
    name: "Amit Desai",
    location: "Anand",
    review:
      "Used Shreenathji Travels for an outstation trip. Excellent experience and courteous driver.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        

<SectionHeading
  badge="CUSTOMER REVIEWS"
  title="What Our Customers Say"
  description="We aim to provide safe, reliable and comfortable travel for every customer."
/>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-amber-500 text-xl">
                ★★★★★
              </div>

              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}