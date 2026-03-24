import { ritualProducts } from "@/data/ritualProducts";

export default function RitualProductsSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/ritual-products/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(25,20,18,0.6)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-6 pb-16 pt-[140px]">
        <div className="w-full max-w-[1000px] bg-[var(--bg-secondary)] px-10 py-12 md:px-16 md:py-14">
          <h1 className="text-center text-4xl font-semibold text-white md:text-5xl">
            Ритуальна атрибутика
          </h1>

          <p className="mt-6 text-center text-[15px] italic text-[var(--accent)] md:text-[16px]">
            Ми підібрали для вас товари високої якості за чесними цінами.
          </p>

          <div className="mt-12 space-y-9">
            {ritualProducts.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full border border-white/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <div className="flex min-w-0 items-center gap-4">
                    <h3 className="shrink-0 text-[20px] font-medium text-white md:text-[22px]">
                      {item.title}
                    </h3>

                    <div className="h-px min-w-[30px] flex-1 bg-white/20" />

                    <p className="shrink-0 text-[16px] font-medium text-[var(--accent)] md:text-[18px]">
                      {item.price}
                    </p>
                  </div>

                  <p className="mt-2 max-w-[640px] text-[13px] leading-6 text-white/75 md:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button className="btn-primary px-10 py-3 text-sm uppercase tracking-[0.12em]">
              Завантажити прайс
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
