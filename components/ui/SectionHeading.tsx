interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold tracking-wide text-yellow-700">
        {badge}
      </span>

      <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}