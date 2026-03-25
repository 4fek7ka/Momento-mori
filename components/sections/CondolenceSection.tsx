"use client";

import { useContactPopup } from "@/components/providers/ContactPopupProvider";

const features = [
  {
    title: "Ритуальні послуги",
    text: "Організація поховання або кремації в Одесі та області з повним супроводом.",
  },
  {
    title: "Транспорт та логістика",
    text: "Катафалк, перевезення, організація процесії та супровід родини.",
  },
  {
    title: "Оформлення документів",
    text: "Повне юридичне оформлення та вирішення всіх організаційних питань.",
  },
  {
    title: "Ритуальні товари",
    text: "Добір якісної ритуальної атрибутики відповідно до бюджету та побажань родини.",
  },
];

export default function CondolenceSection() {
  const { openPopup } = useContactPopup();

  return (
    <section
      className="relative overflow-hidden text-[var(--text-main)]"
      style={{
        backgroundImage: "url('/images/condolence/flowers-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(31,26,23,0.75)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(31,26,23,0.6),rgba(31,26,23,0.9))]" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-24">
        <div className="text-center">
          <p className="mx-auto text-[13px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            Підтримка поруч
          </p>

          <h2 className="mt-5 text-4xl font-medium md:text-5xl">
            Співчуваємо Вашій втраті
          </h2>

          <div className="flex justify-center">
            <p className="mt-8 max-w-[640px] text-center text-[18px] leading-8 text-[var(--text-secondary)]">
              Ми поруч, щоб взяти на себе всі організаційні питання та допомогти
              пройти цей складний період спокійно та гідно.
            </p>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={openPopup}
              className="btn-primary px-10 py-4 text-sm font-semibold uppercase tracking-wide"
            >
              Отримати допомогу
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {features.map((item, index) => (
            <div key={index} className="max-w-[520px]">
              <h3 className="text-[20px] font-medium text-[var(--text-main)]">
                {item.title}
              </h3>

              <div className="mt-3 h-px w-full bg-[var(--border-color)]" />

              <p className="mt-4 text-[16px] leading-7 text-[var(--text-secondary)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
