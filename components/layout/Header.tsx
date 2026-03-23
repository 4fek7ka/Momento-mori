import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#3b3939] text-white">
      <div className="mx-auto flex h-[130px] max-w-[1600px] items-center justify-between px-8">
        {/* LEFT */}
        <div className="shrink-0">
          <Link
            href="/"
            className="text-[42px] leading-none text-[var(--accent)]"
            style={{ fontFamily: "serif" }}
          >
            Momento mori
          </Link>
        </div>

        {/* CENTER */}
        <nav className="hidden items-center gap-12 text-[20px] md:flex">
          <Link href="/" className="transition hover:text-[var(--accent)]">
            Головна
          </Link>

          {/* 🔥 ссылка на секцию */}
          <Link
            href="/#services"
            className="transition hover:text-[var(--accent)]"
          >
            Пакети послуг
          </Link>

          <Link
            href="/ritual-products"
            className="transition hover:text-[var(--accent)]"
          >
            Ритуальні товари
          </Link>

          <Link href="/about" className="transition hover:text-[var(--accent)]">
            Про нас
          </Link>

          <Link
            href="/payment"
            className="transition hover:text-[var(--accent)]"
          >
            Оплата
          </Link>

          <Link
            href="/contacts"
            className="transition hover:text-[var(--accent)]"
          >
            Контакти
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="text-right text-[18px] leading-[1.5]">
          <p className="text-[var(--accent)]">Цілодобово:</p>
          <a
            href="tel:+380503661966"
            className="block hover:text-[var(--accent)]"
          >
            +38 050 366 19 66
          </a>
          <a
            href="tel:+380679661966"
            className="block hover:text-[var(--accent)]"
          >
            +38 067 966 19 66
          </a>
        </div>
      </div>
    </header>
  );
}
