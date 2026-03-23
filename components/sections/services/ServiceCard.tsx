import { FaCheckCircle } from "react-icons/fa";
import type { ServicePackage } from "@/data/servicePackages";

type ServiceCardProps = {
  item: ServicePackage;
};

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <article className="flex h-full w-full flex-col bg-[#3a3a3d] px-8 py-8 text-white">
      <div className="mx-auto flex h-[340px] w-full max-w-[360px] items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="mt-6 text-center text-[22px] font-medium tracking-wide">
        {item.title}
      </h3>

      <p className="mt-6 text-center text-[18px]">
        <span className="font-semibold text-[var(--accent)]">Вартість:</span>{" "}
        {item.price}
      </p>

      <p className="mx-auto mt-8 max-w-[290px] text-center text-[16px] font-semibold leading-7">
        {item.description}
      </p>

      <ul className="mt-8 flex-1 space-y-4 text-[16px] leading-7">
        {item.items.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheckCircle className="mt-1 shrink-0 text-white" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-sm font-semibold text-white/20">
        {item.id}
      </p>
    </article>
  );
}
