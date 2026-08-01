import { ReactNode } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  const message = `Hello Shreenathji Travels,

I would like to enquire about your ${title} service.

Please share the details.

Thank you.`;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <Link
        href={`https://wa.me/919023801735?text=${encodeURIComponent(message)}`}
        target="_blank"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        <MessageCircle size={18} />
        Enquire on WhatsApp
      </Link>
    </div>
  );
}