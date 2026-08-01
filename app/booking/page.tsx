import PageHero from "@/components/layout/PageHero";
import BookingForm from "@/components/home/BookingForm";
import { CheckCircle } from "lucide-react";

export default function BookingPage() {
  const benefits = [
    "24×7 Booking Support",
    "Airport Pickup & Drop",
    "Local & Outstation Trips",
    "Professional Drivers",
    "Clean & Comfortable Vehicles",
    "Quick WhatsApp Confirmation",
  ];

  return (
    <>
      <PageHero
        title="Book Your Ride"
        description="Share your travel details and we'll confirm your booking on WhatsApp."
      />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Book With Us?
            </h2>

            <p className="mt-4 text-slate-600 leading-8">
              Shreenathji Travels provides reliable transportation across
              Vadodara with professional drivers and well-maintained vehicles.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}