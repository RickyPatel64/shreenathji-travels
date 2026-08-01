import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

export const metadata: Metadata = {
  title: "Shreenathji Travels",
  description: "Taxi & Car Rental Service in Vadodara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}