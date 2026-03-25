"use client";

import { useContactPopup } from "@/components/providers/ContactPopupProvider";

const principles = [
  {
    title: "Людяність важливіша за формальність.",
    text: "У складний момент родині потрібні не шаблонні дії, а делікатне ставлення, спокій і повага.",
  },
  {
    title: "Чесність важливіша за гучні обіцянки.",
    text: "Ми відкрито пояснюємо вартість послуг, фіксуємо домовленості та не допускаємо прихованих платежів.",
  },
  {
    title: "Підтримка важливіша за зайві слова.",
    text: "Беремо на себе організаційні питання, щоб ви могли зосередитися на головному та пройти цей період спокійніше.",
  },
];

export default function AboutSection() {
  const { openPopup } = useContactPopup();

  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-24 text-[var(--text-main)]">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-[860px]">
          <p className="text-[13px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            Про нас
          </p>

          <h2 className="mt-6 text-[38px] font-medium leading-[1.2] md:text-[52px]">
            Ми беремо на себе складне.
            <br />
            Ви зберігаєте спокій.
          </h2>

          <p className="mt-6 max-w-[600px] text-[16px] leading-7 text-[var(--text-secondary)]">
            Ритуальний супровід — це відповідальність, де важливі повага,
            делікатність і чітка організація.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          {principles.map((item) => (
            <div key={item.title}>
              <h3 className="text-[26px] font-medium leading-[1.3] text-[var(--text-main)]">
                {item.title}
              </h3>

              <div className="mt-5 h-px w-[72px] bg-[var(--accent)] opacity-70" />

              <p className="mt-6 text-[16px] leading-7 text-[var(--text-secondary)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA (новое) */}
        <div className="mt-20 flex justify-center">
          <button
            type="button"
            onClick={openPopup}
            className="inline-flex min-h-[52px] items-center justify-center rounded-[12px] border border-[var(--border-color)] px-8 py-4 text-[15px] font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-main)] hover:border-[var(--accent)]"
          >
            Зв’язатися з нами
          </button>
        </div>
      </div>
    </section>
  );
}
