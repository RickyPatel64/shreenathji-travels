import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="CONTACT US"
          title="We're Ready for Your Next Journey"
          description="Contact us anytime for airport transfers, local taxi, outstation travel or corporate bookings."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-blue-600" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <a href="tel:9023801735" className="text-slate-600 hover:text-blue-600">
                    +91 90238 01735
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="mt-1 text-green-600" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/919023801735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-green-600"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-red-500" />
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-slate-600">
                    149, Wadi Bhatwada,<br />
                    Vadodara - 390017
                  </p><a
  href="https://www.google.com/maps/search/?api=1&query=149,+Wadi+Bhatwada,+Vadodara+390017"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition hover:bg-blue-800"
>
  Get Directions
</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-yellow-500" />
                <div>
                  <h3 className="font-semibold">Availability</h3>
                  <p className="text-slate-600">
                    Open 24×7 for Bookings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <iframe
  title="Shreenathji Travels Location"
  src="https://www.google.com/maps?q=149%2C%20Wadi%20Bhatwada%2C%20Vadodara%20390017&output=embed"
  className="h-[420px] w-full border-0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>
      </div>
    </section>
  );
}