"use client";

import { FaChurch, FaBoxOpen, FaTruck, FaFileAlt } from "react-icons/fa";

const features = [
  {
    icon: FaChurch,
    title: "Ритуальні послуги",
    text: "Організація поховання або кремації в Одесі та області.",
  },
  {
    icon: FaBoxOpen,
    title: "Ритуальні товари",
    text: "Ритуальна атрибутика за доступними цінами.",
  },
  {
    icon: FaTruck,
    title: "Похоронний транспорт",
    text: "Транспортування тіла в морг, послуги катафалка, транспорт для перевезення рідних та близьких.",
  },
  {
    icon: FaFileAlt,
    title: "Оформлення документів",
    text: "Підготовка документації будь-якої складності.",
  },
];

export default function CondolenceSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#1a0804] text-white"
      style={{
        backgroundImage: "url('/images/condolence/flowers-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(36,8,0,0.75))]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div className="max-w-[560px] text-center xl:text-left">
            <h2 className="text-4xl font-semibold md:text-5xl">
              Співчуваємо Вашій втраті
            </h2>

            <div className="mt-5 flex justify-center xl:justify-start">
              <span className="text-2xl text-[var(--accent)]">❦</span>
            </div>

            <p className="mt-8 text-2xl leading-relaxed text-[#e4b166]">
              Ми допоможемо Вам у скрутну хвилину.
              <br />
              Ми працюємо цілодобово.
            </p>

            <div className="mt-10">
              <button className="rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-wide text-[#5b463e] transition hover:opacity-90">
                ПОТРІБНА ДОПОМОГА
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center text-[var(--accent)]">
                    <Icon size={38} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[17px] leading-7 text-white/85">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
