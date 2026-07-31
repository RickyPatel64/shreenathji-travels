"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚖 Trusted Taxi Service in Vadodara
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Your Reliable Travel Partner
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Airport transfers, local rides, outstation trips, corporate travel,
            and Tempo Traveller bookings. Safe, comfortable, and available 24×7.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919023801735"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
            </a>

            <a
              href="tel:9023801735"
              className="flex items-center gap-2 rounded-xl border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-700" />
              <div>
                <p className="font-semibold">Vadodara</p>
                <p className="text-sm text-gray-500">Local & Outstation</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-blue-700" />
              <div>
                <p className="font-semibold">24×7</p>
                <p className="text-sm text-gray-500">Always Available</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">🚘</span>
              <div>
                <p className="font-semibold">6+ Vehicles</p>
                <p className="text-sm text-gray-500">Multiple Options</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-1 justify-center lg:mt-0"
        >
          <div className="rounded-3xl bg-white p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Quick Booking
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="text"
                placeholder="Drop Location"
                className="w-full rounded-lg border p-3"
              />

              <button className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800">
                Send Booking on WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}