"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/previewPackages";

export default function ServicesPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = services[activeIndex];

  return (
    <section className="bg-[var(--bg-main)] px-6 py-24 text-[var(--text-main)]">
      <div className="mx-auto grid max-w-[1280px] gap-12 xl:grid-cols-[420px_minmax(0,1fr)] xl:items-start">
        {/* LEFT */}
        <div>
          <p className="text-[13px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
            Напрями послуг
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">
            Основні формати супроводу
          </h2>

          <div className="mt-12 divide-y divide-[var(--border-color)] border-t border-[var(--border-color)]">
            {services.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-full items-center justify-between py-5 text-left transition"
                >
                  <div>
                    <p
                      className={`text-[22px] font-medium leading-tight transition md:text-[26px] ${
                        isActive
                          ? "text-[var(--text-main)]"
                          : "text-[var(--text-secondary)]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>

                  <span
                    className={`ml-6 text-[20px] transition ${
                      isActive
                        ? "translate-x-1 text-[var(--accent)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="relative overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--surface)]">
            <div className="relative h-[460px] w-full">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 720px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(31,26,23,0.78),rgba(31,26,23,0.12))]" />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[18px] border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Активний напрям
              </p>

              <h3 className="mt-4 text-[28px] font-medium leading-tight text-[var(--text-main)]">
                {activeItem.title}
              </h3>

              <p className="mt-5 text-[16px] leading-7 text-[var(--text-secondary)]">
                {activeItem.description}
              </p>
            </div>

            <div className="mt-8">
              <button className="btn-secondary w-full justify-center ">
                {activeItem.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
