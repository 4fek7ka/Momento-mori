"use client";

import { useContactPopup } from "@/components/providers/ContactPopupProvider";

export default function AboutHeroSection() {
  const { openPopup } = useContactPopup();

  return (
    <section
      className="relative min-h-[820px] overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/aboutPage/about-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1400px] items-center px-8 pb-20 pt-[150px]">
        <div className="grid w-full gap-32 md:grid-cols-[420px_minmax(0,1fr)] lg:gap-40">
          {/* LEFT */}
          <div className="max-w-[420px]">
            <p
              className="text-[28px] italic text-[var(--accent)] md:text-[32px]"
              style={{ fontFamily: "serif" }}
            >
              про нас
            </p>

            <h1 className="mt-6 text-[48px] font-semibold uppercase leading-[0.9] md:text-[64px] lg:text-[92px]">
              МИ
              <br />
              ПОРУЧ,
              <br />
              КОЛИ ЦЕ
              <br />
              <span className="relative inline-block">НАЙВАЖЛИВІШЕ</span>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="max-w-[720px] pt-15 md:pt-20 lg:pt-31">
            <div className="space-y-8 text-[18px] leading-[1.7] text-white/90 md:text-[19px]">
              <p>
                Ми поруч у складний момент і беремо на себе всі організаційні
                питання, щоб родина не залишалася з ними наодинці.
              </p>

              <p>
                Працюємо спокійно, делікатно та без зайвого тиску, зберігаючи
                порядок, ясність і повагу до кожної ситуації.
              </p>

              <p>
                Для нас важливо, щоб прощання проходило гідно, а всі необхідні
                рішення були прийняті точно, вчасно й без зайвого навантаження
                для близьких.
              </p>
            </div>

            <div className="mt-16">
              <button
                type="button"
                onClick={openPopup}
                className="btn-primary px-10 py-5 text-sm uppercase tracking-[0.04em]"
              >
                ЗВ’ЯЗАТИСЯ З НАМИ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
