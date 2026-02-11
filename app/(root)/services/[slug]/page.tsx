import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/constants";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.details.slug,
  }));
}


interface PageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: PageProps) {
  const service = services.find(
    (s) => s.details.slug === params.slug
  );

  if (!service) return {};

  return {
    title: `${service.details.hero.title} | TD Solar & Electric`,
    description: service.details.intro,
  };
}


export default function ServicePage({ params }: PageProps) {
  const service = services.find(
    (s) => s.details.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  const { details } = service;

  return (
    <section className="mx-auto max-w-screen px-6 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#001420]">
          {details.hero.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          <em>{details.hero.subtitle}</em>
        </p>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Copy */}
        <div className="lg:col-span-2 space-y-8">
          <p className="text-lg text-gray-700">
            {details.intro}
          </p>

          <p className="text-base text-gray-700">
            {details.overview}
          </p>

          {/* Services included */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              What We Do:
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {details.services_included.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Why it matters */}
          <div>
            {/*
            <h2 className="text-2xl font-semibold mb-4">
              Why This Service Matters
            </h2>
             */}
            <h6 className="text-gray-700">
              {details.why}
            </h6>
          </div>

          {/* Who it’s for 
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who This Is For
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              {details.who.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          */}
        </div>

        {/* Sidebar */}
        <aside className="bg-[#001420] text-white rounded-3xl p-8 space-y-6">
          <div className="flex justify-center">
            <Image
              src={service.img}
              alt={service.img_alt}
              width={160}
              height={160}
              className="object-cover rounded-full border-2 border-[#cde2f0] p-3 hover:bg-[#305c78]"
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold">
              {details.cta.headline}
            </h3>
            <p className="mt-2 text-sm text-white/80">
              {details.cta.text}
            </p>
          </div>

          <Link
            href={details.cta.link}
            className="block text-center rounded-full bg-[#cde2f0] text-[#001420] px-6 py-3 font-medium hover:bg-[#305c78] hover:text-white transition"
          >
            {details.cta.button_text}
          </Link>
        </aside>
      </div>
    </section>
  );
}
