"use client";

import { FaCheckCircle } from "react-icons/fa";
import type { ServicePackage } from "@/data/servicePackages";
import { useContactPopup } from "@/components/providers/ContactPopupProvider";

type ServiceCardProps = {
  item: ServicePackage;
};

export default function ServiceCard({ item }: ServiceCardProps) {
  const { openPopup } = useContactPopup();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-[var(--shadow-soft)]">
      <div className="flex h-[330px] items-center justify-center border-b border-[var(--border-color)] bg-[var(--bg-main)] px-6 py-8">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-auto max-w-full object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 py-6">
        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
            Формат {item.id}
          </p>

          <h3 className="mt-3 text-[22px] font-semibold leading-tight text-[var(--text-main)] md:text-[24px]">
            {item.title}
          </h3>

          <div className="mt-5 inline-flex rounded-[10px] bg-[rgba(0,0,0,0.18)] px-4 py-2 text-[15px] font-medium mb-5">
            <span className="text-[var(--text-secondary)]">
              Вартість:&nbsp;
            </span>
            <span className="text-[var(--accent)]">{item.price}</span>
          </div>

          <p className="mt-10 min-h-[96px] text-[16px] leading-8 text-[var(--text-secondary)]">
            {item.description}
          </p>
        </div>

        <ul className="mt-6 flex-1 space-y-4 text-[15px] leading-7 text-[var(--text-secondary)]">
          {item.items.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="mt-[6px] shrink-0 text-[13px] text-[var(--accent)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-4">
          <button
            onClick={openPopup}
            className="inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-[var(--border-color)] px-5 py-3 text-[15px] font-medium text-[var(--text-main)] transition hover:bg-[var(--bg-main)]"
          >
            Дізнатися більше
          </button>
        </div>
      </div>
    </article>
  );
}
