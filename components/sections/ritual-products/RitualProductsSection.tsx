import { ritualProducts } from "@/data/ritualProducts";

export default function RitualProductsSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black text-white"
      style={{
        backgroundImage: "url('/images/ritual-products/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center justify-center px-6 py-16">
        <div className="w-full max-w-[1000px] bg-[#3b3b3d]/95 px-10 py-12 shadow-2xl md:px-16 md:py-14">
          <h1 className="text-center text-5xl font-semibold text-white md:text-4xl">
            Ритуальна атрибутика
          </h1>

          <p className="mt-6 text-center text-[15px] italic text-[#e1b16c] md:text-[16px]">
            Ми підібрали для вас товари високої якості за чесними цінами.
          </p>

          <div className="mt-12 space-y-9">
            {ritualProducts.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full border border-white/20 shadow-lg">
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

                    <p className="shrink-0 text-[16px] font-medium text-[#e1b16c] md:text-[18px]">
                      {item.price}
                    </p>
                  </div>

                  <p className="mt-2 max-w-[640px] text-[13px] leading-6 text-white/70 md:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button className="rounded-full border border-white px-10 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-black">
              Завантажити прайс
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
