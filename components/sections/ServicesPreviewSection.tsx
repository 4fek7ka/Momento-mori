"use client";

import { services } from "@/data/previewPackages";

export default function ServicesPreviewSection() {
  return (
    <section className="bg-[#3b3b3d] px-6 py-20 text-white">
      <div className="mx-auto max-w-[1400px] space-y-10">
        {services.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={index}
              className={`grid items-stretch gap-0 lg:grid-cols-2 ${
                isReversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="h-full w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex h-full flex-col justify-center bg-[#2f2f31] px-10 py-10 md:px-14">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  — послуга —
                </p>

                <h3 className="mt-4 max-w-[420px] text-2xl font-semibold leading-snug text-[#e1b16c] md:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-6 max-w-[520px] space-y-4 text-[16px] leading-7 text-white/80">
                  {item.text.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="rounded-full border border-[#e1b16c] px-8 py-3 text-sm uppercase tracking-wide text-[#e1b16c] transition hover:bg-[#e1b16c] hover:text-black">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
