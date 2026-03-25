import { ritualProducts } from "@/data/ritualProducts";

export default function RitualProductsSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/ritual-products/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(18,18,18,0.78)]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 pb-24 pt-[170px] md:pb-32">
        <div className="grid gap-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-24">
          <div>
            <p
              className="text-[28px] italic leading-none text-[var(--accent)] md:text-[32px]"
              style={{ fontFamily: "serif" }}
            >
              атрибутика
            </p>
          </div>

          <div>
            <h1 className="max-w-[760px] text-4xl font-semibold uppercase leading-[1.05] md:text-5xl lg:text-[64px]">
              РИТУАЛЬНІ ТОВАРИ
              <br />
              ТА СУПУТНЄ
              <br />
              ОФОРМЛЕННЯ
            </h1>

            <p className="mt-8 max-w-[720px] text-[18px] leading-[1.75] text-white/75 md:text-[19px]">
              Ми допомагаємо підібрати все необхідне для церемонії — спокійно,
              делікатно й без зайвого навантаження. У переліку нижче —
              найпоширеніші категорії ритуальної атрибутики та супутніх послуг.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10">
          {ritualProducts.map((item) => (
            <div
              key={item.title}
              className="grid gap-6 border-b border-white/10 py-8 md:grid-cols-[120px_minmax(0,1fr)_140px] md:items-start md:gap-8"
            >
              <div className="overflow-hidden rounded-[14px] bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[96px] w-full object-cover md:h-[88px]"
                />
              </div>

              <div>
                <h3 className="text-[22px] font-medium text-white md:text-[24px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[720px] text-[14px] leading-[1.8] text-white/70 md:text-[15px]">
                  {item.description}
                </p>
              </div>

              <div className="md:text-right">
                <p className="text-[16px] font-medium text-[var(--accent)] md:text-[18px]">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button className="btn-primary px-10 py-4 text-sm uppercase tracking-[0.08em]">
            Завантажити прайс
          </button>
        </div>
      </div>
    </section>
  );
}
