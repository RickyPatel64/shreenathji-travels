"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const vehicles = [
  "Any Vehicle",
  "Swift Dzire",
  "Toyota Innova",
  "Maruti Ertiga",
  "Tata Indica",
  "Maruti Eeco",
  "Tempo Traveller",
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    vehicle: "Any Vehicle",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const message = `Hello Shreenathji Travels,

I would like to book a taxi.

👤 Name: ${form.name}

📞 Mobile: ${form.phone}

📍 Pickup: ${form.pickup}

📍 Drop: ${form.drop}

📅 Date: ${form.date}

🕒 Time: ${form.time}

🚗 Vehicle: ${form.vehicle}

📝 Notes: ${form.notes}

Please share the fare and availability.

Thank you.`;

    window.open(
      `https://wa.me/919023801735?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-2xl">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Quick Booking
      </h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />

        <input
          name="pickup"
          placeholder="Pickup Location"
          value={form.pickup}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />

        <input
          name="drop"
          placeholder="Drop Location"
          value={form.drop}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="rounded-lg border p-3"
          />
        </div>

        <select
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        >
          {vehicles.map((vehicle) => (
            <option key={vehicle}>{vehicle}</option>
          ))}
        </select>

        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border p-3"
        />

        <button
          onClick={sendWhatsApp}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          <MessageCircle size={20} />
          Book on WhatsApp
        </button>
      </div>
    </div>
  );
}