"use client";

import Image from "next/image";
import { vipGroups, vipImages } from "@/data/vipPackage";

export default function VipSection() {
  return (
    <section className="bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,520px)] xl:items-center">
          <div className="max-w-[720px]">
            <p className="text-[13px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Преміальний формат
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">
              Преміальний супровід
            </h2>

            <div className="mt-6 inline-flex rounded-[10px] bg-[rgba(0,0,0,0.18)] px-4 py-2 text-[15px] font-medium">
              <span className="text-[var(--text-secondary)]">
                Вартість:&nbsp;
              </span>
              <span className="text-[var(--accent)]">від 150 000 грн</span>
            </div>

            <p className="mt-8 max-w-[680px] text-[17px] leading-8 text-[var(--text-secondary)]">
              Індивідуально організований формат прощання для родин, яким
              важливі високий рівень сервісу, делікатна координація всіх етапів
              та особлива увага до деталей церемонії.
            </p>

            <p className="mt-5 max-w-[680px] text-[16px] leading-8 text-[var(--text-secondary)]">
              Ми поєднуємо преміальне оформлення, церемоніальний супровід,
              транспорт, флористику та повну організацію події в єдине спокійне
              та гідне рішення.
            </p>

            <div className="mt-8">
              <button className="btn-primary">
                Отримати преміальну консультацію
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <div className="relative h-[420px] overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--surface)]">
              <Image
                src={vipImages[0]}
                alt="Преміальне оформлення церемонії"
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 60vw, 420px"
              />
            </div>

            <div className="grid gap-4">
              <div className="relative h-[202px] overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--surface)]">
                <Image
                  src={vipImages[1]}
                  alt="Деталі преміального супроводу"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>

              <div className="relative h-[202px] overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--surface)]">
                <Image
                  src={vipImages[2]}
                  alt="Організація преміального прощання"
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {vipGroups.map((group) => (
            <div key={group.title} className="pt-4">
              <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Напрям
              </p>

              <h3 className="mt-3 text-[24px] font-medium leading-tight text-[var(--text-main)]">
                {group.title}
              </h3>

              <div className="mt-5 h-px w-full bg-[var(--border-color)]" />

              <p className="mt-5 text-[15px] leading-7 text-[var(--text-secondary)]">
                {group.title === "Церемонія та оформлення" &&
                  "Урочисте оформлення простору прощання, ритуальна атрибутика та церемоніальні деталі."}
                {group.title === "Супровід та атмосфера" &&
                  "Координація процесії, музичний супровід та візуальні елементи пам’яті."}
                {group.title === "Організація та логістика" &&
                  "Транспорт, підготовка локації, документи та повний організаційний супровід."}
              </p>

              <div className="mt-6 space-y-3 text-[15px] leading-7 text-[var(--text-secondary)]">
                {group.items.slice(0, 5).map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
