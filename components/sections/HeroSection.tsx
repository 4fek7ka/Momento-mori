"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useContactPopup } from "@/components/providers/ContactPopupProvider";

export default function HeroSection() {
  const { name, tagline, contacts } = siteConfig;
  const { openPopup } = useContactPopup();

  return (
    <section className="bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-[1280px] items-center gap-12 px-5 py-14 md:px-6 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16 lg:py-20">
        {/* LEFT */}
        <div className="max-w-[560px]">
          {/* LOGO */}
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Логотип Елізій"
              width={110}
              height={110}
              priority
              className="h-auto w-[88px] md:w-[100px] lg:w-[110px]"
            />
          </div>

          {/* label */}
          <p className="text-[13px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {tagline}
          </p>

          {/* title */}
          <h1 className="mt-6 text-[42px] font-medium leading-[1.08] md:text-[56px] lg:text-[64px]">
            {name}
          </h1>

          {/* description */}
          <p className="mt-8 max-w-[500px] text-[17px] leading-8 text-[var(--text-secondary)] md:text-[18px]">
            Організація прощання з повагою, спокоєм і людяністю. Ми беремо на
            себе всі організаційні питання, щоб у складний момент ви могли
            зосередитися на головному.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button type="button" onClick={openPopup} className="btn-primary">
              Отримати допомогу
            </button>

            <button type="button" onClick={openPopup} className="btn-secondary">
              {contacts.phonesFormatted[0]}
            </button>
          </div>

          {/* meta */}
          <div className="mt-10 grid max-w-[520px] gap-5 border-t border-[var(--border-color)] pt-6 sm:grid-cols-3">
            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Адреса
              </p>
              <p className="mt-2 text-[16px] leading-7 text-[var(--text-secondary)]">
                {contacts.address}
              </p>
            </div>

            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Графік
              </p>
              <p className="mt-2 text-[16px] leading-7 text-[var(--text-secondary)]">
                24/7 без вихідних
              </p>
            </div>

            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Формат
              </p>
              <p className="mt-2 text-[16px] leading-7 text-[var(--text-secondary)]">
                Повний супровід
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[18px] bg-[var(--bg-secondary)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/hero/hero-main.png"
                alt="Ритуальні послуги Елізій"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* floating card */}
          <div className="absolute bottom-4 left-4 max-w-[260px] rounded-[14px] border border-[rgba(255,255,255,0.18)] bg-[rgb(245,239,231)] px-5 py-4 backdrop-blur-sm">
            <p className="text-[12px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Перший контакт
            </p>
            <p className="mt-2 text-[15px] leading-6 text-[var(--text-main)]">
              Виїзд агента та консультація без зайвого навантаження для родини.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
