interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-5xl font-bold">{title}</h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          {description}
        </p>
      </div>
    </section>
  );
}