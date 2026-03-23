export default function AboutHeroSection() {
  return (
    <section
      className="relative min-h-[820px] overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/aboutPage/about-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1400px] items-center px-8 pb-20 pt-[150px]">
        <div className="max-w-[980px]">
          <p
            className="text-[34px] italic leading-none text-[#e1b16c]"
            style={{ fontFamily: "serif" }}
          >
            про нас
          </p>

          <h1 className="mt-6 max-w-[980px] text-5xl font-semibold uppercase leading-[1.15] md:text-6xl">
            МИ ПРАЦЮЄМО В ОДЕСІ З 2019 РОКУ.
          </h1>

          <div className="mt-10 space-y-7 text-[18px] leading-[1.55] text-white/95">
            <p className="inline bg-black/20 px-1 py-0.5">
              За цей час ми пройшли шлях від допомоги знайомим до створення
              ритуальної служби європейського рівня.
            </p>

            <p className="inline bg-black/20 px-1 py-0.5">
              Цифри нижче — це не просто статистика. Це реальні історії родин,
              яким ми допомогли пережити втрату гідно, без зайвого стресу та
              бюрократії. Наш досвід дозволяє вирішувати питання будь-якої
              складності: від оформлення документів до міжнародних перевезень.
            </p>

            <p className="inline bg-black/20 px-1 py-0.5">
              Ми працюємо офіційно (ФОП), прозоро і несемо перед вами особисту
              відповідальність, адже репутація нашої сім’ї — це наш головний
              капітал.
            </p>
          </div>

          <div className="mt-12">
            <button className="rounded-full bg-[#e1b16c] px-10 py-5 text-sm font-medium uppercase tracking-[0.04em] text-white transition hover:opacity-90">
              ЗАВАНТАЖИТИ ВИТЯГ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
