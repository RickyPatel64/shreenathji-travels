"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-4 md:flex">
        <a
          href="https://wa.me/919023801735"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
        >
          <MessageCircle size={28} />
        </a>

        <a
          href="tel:9023801735"
          aria-label="Call Now"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition hover:scale-110 hover:bg-blue-800"
        >
          <Phone size={26} />
        </a>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
        <a
          href="tel:9023801735"
          className="flex flex-1 items-center justify-center gap-2 bg-blue-700 py-4 font-semibold text-white"
        >
          <Phone size={20} />
          Call Now
        </a>

        <a
          href="https://wa.me/919023801735"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-green-600 py-4 font-semibold text-white"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </>
  );
}