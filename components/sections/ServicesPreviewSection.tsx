"use client";

import { services } from "@/data/previewPackages";

export default function ServicesPreviewSection() {
  return (
    <section className="bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)]">
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
              <div className="h-full w-full overflow-hidden bg-[var(--surface)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-full flex-col justify-center bg-[var(--bg-secondary)] px-10 py-10 md:px-14">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  — послуга —
                </p>

                <h3 className="mt-4 max-w-[420px] text-2xl font-semibold leading-snug text-[var(--text-main)] md:text-3xl">
                  {item.title}
                </h3>

                <div className="mt-6 max-w-[520px] space-y-4 text-[16px] leading-7 text-[var(--text-secondary)]">
                  {item.text.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="btn-secondary rounded-full px-8 py-3 text-sm uppercase tracking-wide">
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
