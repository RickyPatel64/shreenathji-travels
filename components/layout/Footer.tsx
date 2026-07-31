import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Car,
} from "lucide-react";

const services = [
  "Airport Transfer",
  "Local Taxi",
  "Outstation Trips",
  "Corporate Travel",
  "Tempo Traveller",
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo/logo.png"
                alt="Shreenathji Travels"
                width={55}
                height={55}
              />

              <div>
                <h3 className="text-xl font-bold">
                  Shreenathji Travels
                </h3>

                <p className="text-sm text-slate-300">
                  શ્રીનાથજી ટ્રાવેલ્સ
                </p>
              </div>
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              Reliable taxi service in Vadodara for airport transfers,
              local travel, outstation trips and corporate bookings.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-yellow-400">
              Our Services
            </h3>

            <ul className="space-y-3 text-slate-300">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <Car size={16} className="text-yellow-400" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#fleet">Fleet</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-yellow-400">
              Contact
            </h3>

            <div className="space-y-4 text-slate-300">
              <div className="flex gap-3">
                <Phone className="text-yellow-400" size={18} />
                <a href="tel:9023801735">
                  +91 90238 01735
                </a>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="text-yellow-400" size={18} />
                <a
                  href="https://wa.me/919023801735"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Booking
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-yellow-400" size={18} />
                <span>
                  149, Wadi Bhatwada,
                  Vadodara - 390017
                </span>
              </div>

              <div className="flex gap-3">
                <Clock className="text-yellow-400" size={18} />
                <span>24×7 Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Shreenathji Travels. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}