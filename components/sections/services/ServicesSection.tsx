"use client";

import { servicePackages } from "@/data/servicePackages";
import ServiceCard from "@/components/sections/services/ServiceCard";

export default function ServicesSection() {
  const mainPackages = servicePackages.filter((item) => !item.isFeatured);

  return (
    <section
      id="services"
      className="bg-[var(--bg-secondary)] px-6 py-20 text-[var(--text-main)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            Формати супроводу
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">
            Пакети ритуальних послуг
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-[var(--text-secondary)]">
            Ми підготували кілька форматів супроводу, щоб ви могли обрати
            рішення відповідно до ваших потреб, побажань та бюджету.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {mainPackages.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[760px] text-center">
          <p className="text-[15px]  leading-7 text-[var(--text-muted)]">
            За потреби наповнення кожного пакета може бути змінене або доповнене
            індивідуально.
          </p>

          <div className="mt-8">
            <button className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-[var(--accent)] px-6 py-3 text-[15px] font-medium text-[var(--bg-main)] transition hover:brightness-95">
              Отримати консультацію
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
