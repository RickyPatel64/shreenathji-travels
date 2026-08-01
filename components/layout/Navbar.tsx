"use client";
import { navigation } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Shreenathji Travels"
            width={56}
            height={56}
            priority
          />

          <div>
            <h1 className="text-lg font-bold text-blue-900">
              Shreenathji Travels
            </h1>
            <p className="text-sm text-gray-500">
              શ્રીનાથજી ટ્રાવેલ્સ
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
            key={item.name}
            href={item.href}
            className={`font-medium transition ${
  pathname === item.href
    ? "text-blue-700 border-b-2 border-yellow-500 pb-1"
    : "text-gray-700 hover:text-blue-700"
}`}
            >
          {item.name}
  </Link>
))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:9023801735"
            className="rounded-lg border border-blue-700 p-3 text-blue-700 transition hover:bg-blue-50"
            aria-label="Call"
          >
            <Phone size={18} />
          </a>

          <Link
  href="/booking"
  className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
>
  <MessageCircle size={18} />
  Book Now
</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col p-4">
            {navigation.map((item) => (
  <Link
    key={item.name}
    href={item.href}
    onClick={() => setIsOpen(false)}
    className={`rounded-lg px-3 py-3 ${
  pathname === item.href
    ? "bg-blue-50 text-blue-700 font-semibold"
    : "hover:bg-gray-100"
}`}
  >
    {item.name}
  </Link>
))}

            <Link
  href="/booking"
  onClick={() => setIsOpen(false)}
  className="mt-3 rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white"
>
  Book Now
</Link>
          </nav>
        </div>
      )}
    </header>
  );
}