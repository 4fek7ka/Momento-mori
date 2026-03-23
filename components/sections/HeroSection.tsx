import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
  FaViber,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-[#1f1f1f] text-white">
      <div className="mx-auto grid min-h-[700px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2">
        {/* LEFT */}
        <div className="max-w-xl">
          {/* badge */}
          <div className="inline-flex rounded-full border border-white px-5 py-2 text-sm uppercase tracking-wide">
            Покупка частинами від mono
          </div>

          {/* subtitle */}
          <p className="mt-10 text-2xl leading-snug md:text-4xl">
            Ритуальна служба
            <br />
            нового формату
          </p>

          {/* title */}
          <h1 className="mt-6 text-5xl text-[var(--accent)] md:text-7xl">
            Momento mori
          </h1>

          {/* description */}
          <p className="mt-8 text-lg leading-8 text-white/80 md:text-xl">
            Організація прощання під ключ від{" "}
            <span className="text-[var(--accent)] font-semibold">
              10 500 грн
            </span>
            <br />
            Працюємо у всіх районах Одеси 24/7.
            <br />
            <span className="text-[var(--accent)] font-semibold">
              Безкоштовний
            </span>{" "}
            виїзд агента на місце.
          </p>

          {/* phone button */}
          <a
            href="tel:+380503661966"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-lg text-black"
          >
            +38 050 366 19 66
          </a>

          {/* icons */}
          <div className="mt-8 ml-2 flex gap-6 text-2xl text-[var(--accent)]">
            <FaInstagram />
            <FaTelegramPlane />
            <FaEnvelope />
            <FaViber />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[320px] w-full sm:h-[420px] md:h-[520px] lg:h-[620px]">
          <Image
            src="/images/hero/hero-main.png"
            alt="Hero image"
            fill
            priority
            className="object-contain object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
