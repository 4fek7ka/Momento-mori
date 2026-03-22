import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#1f1f1f] text-white">
      <div className="mx-auto grid min-h-[720px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2">
        <div className="max-w-xl">
          <div className="inline-flex rounded-full border border-white px-5 py-3 text-sm uppercase tracking-wide">
            Покупка частинами від mono
          </div>

          <p className="mt-14 text-3xl leading-snug md:text-5xl">
            Ритуальна служба
            <br />
            нового формату
          </p>

          <h1 className="mt-8 text-5xl text-[#d2ab67] md:text-7xl">
            Momento mori
          </h1>

          <p className="mt-10 text-xl leading-10 text-white/90 md:text-2xl">
            Організація прощання під ключ від{" "}
            <span className="font-semibold text-[#d2ab67]">10 500</span> грн.
            <br />
            Працюємо у всіх районах Одеси 24/7.
            <br />
            <span className="font-semibold text-[#d2ab67]">
              Безкоштовний
            </span>{" "}
            виїзд агента на місце.
          </p>

          <a
            href="tel:+380503661966"
            className="mt-12 inline-flex rounded-full bg-white px-10 py-5 text-2xl text-[#3a3a3a] transition hover:opacity-90"
          >
            +38 050 366 19 66
          </a>

          <div className="mt-10 flex gap-6 text-[#d2ab67]">
            <span>IG</span>
            <span>TG</span>
            <span>MAIL</span>
            <span>VIBER</span>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[620px]">
          <Image
            src="/images/hero.png"
            alt="Свеча и роза"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
