import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, MessageCircle } from "lucide-react";

interface FleetCardProps {
  name: string;
  image: string;
  seats: string;
  luggage: string;
  type: string;
  description: string;
  ac: boolean;
fuel: string;
bestFor: string;
}

export default function FleetCard(props: FleetCardProps) {
  const message = `Hello Shreenathji Travels,

I would like to book the ${props.name}.

Please share the fare and availability.

Thank you.`;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 bg-slate-100">
        <Image
          src={props.image}
          alt={props.name}
          fill
          className="object-contain p-6"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{props.name}</h3>

        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {props.type}
        </span>

        <p className="mt-4 text-slate-600">
          {props.description}
        </p>

        <div className="mt-5 flex gap-6 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Users size={18} />
            {props.seats}
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={18} />
            {props.luggage}
          </div>
        </div>
          <div className="mt-6 space-y-2 text-sm text-slate-700">
  <p>
    <strong>Air Conditioning:</strong> {props.ac ? "Yes" : "No"}
  </p>

  <p>
    <strong>Fuel:</strong> {props.fuel}
  </p>

  <p>
    <strong>Best For:</strong> {props.bestFor}
  </p>
</div>
        <Link
          href={`https://wa.me/919023801735?text=${encodeURIComponent(message)}`}
          target="_blank"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
        >
          <MessageCircle size={18} />
          Book This Vehicle
        </Link>
      </div>
    </div>
  );
}