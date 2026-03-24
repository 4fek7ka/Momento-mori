"use client";

import { FaCheckCircle } from "react-icons/fa";
import { vipImages, vipItems } from "@/data/vipPackage";

export default function VipSection() {
  return (
    <section className="bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 xl:grid-cols-[440px_minmax(0,1fr)] xl:items-start">
          <div className="grid grid-cols-2 gap-5">
            {vipImages.map((src, index) => (
              <div key={index} className="overflow-hidden bg-[var(--surface)]">
                <img
                  src={src}
                  alt={`VIP послуга ${index + 1}`}
                  className="h-[180px] w-full object-cover md:h-[220px]"
                />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              VIP-пакет від{" "}
              <span className="text-[var(--accent)]">150 000 грн</span>
            </h2>

            <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-[var(--text-secondary)]">
              Наш VIP-пакет ритуальних послуг — це гарантія елітного супроводу
              та бездоганної церемонії прощання, що гідна світлої пам’яті Вашої
              близької людини.
            </p>

            <p className="mt-6 max-w-[760px] text-[16px] leading-8 text-[var(--text-secondary)]">
              VIP-пакет передбачає ексклюзивний вибір труни-саркофага з
              рідкісних порід дерева. Процесія супроводжується катафалком
              преміум-класу (наприклад, Cadillac) та комфортабельним транспортом
              для гостей, з можливістю залучення ескорту та духового оркестру,
              траурного ансамблю або хорового квартету.
              <br />
              Організовується елітна церемонія прощання в індивідуально
              оформленому залі або спеціально встановленому шатрі з
              ексклюзивними флористичними композиціями з квітів та ритуальним
              ліфтом для опускання труни. Пакет включає повне юридичне
              оформлення документів та організацію поминальної трапези у
              престижному ресторані.
            </p>

            <div className="mt-8">
              <button className="btn-primary rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wide">
                VIP КОНСУЛЬТАЦІЯ
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {vipItems.map((column, colIndex) => (
            <ul
              key={colIndex}
              className="space-y-5 text-[16px] leading-7 text-[var(--text-secondary)]"
            >
              {column.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 shrink-0 text-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
