import { aboutStats } from "@/data/aboutStats";

export default function AboutStatsSection() {
  return (
    <section className="bg-[#3b3b3d] px-8 py-14 text-white md:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid justify-center gap-12 text-center md:grid-cols-3 md:gap-20">
          {aboutStats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              {/* число меньше */}
              <p
                className="text-[48px] leading-none text-[#e1b16c] md:text-[56px]"
                style={{ fontFamily: "serif" }}
              >
                {item.value}
              </p>

              {/* линия по центру */}
              <div className="mt-4 h-[3px] w-[40px] bg-[#e1b16c]" />

              {/* текст компактнее */}
              <p className="mt-4 max-w-[220px] text-[15px] leading-6 text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
