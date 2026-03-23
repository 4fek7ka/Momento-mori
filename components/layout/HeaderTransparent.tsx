import Link from "next/link";

export default function HeaderTransparent() {
  return (
    <header className="absolute top-0 z-50 w-full text-white">
      <div className="mx-auto flex h-[120px] max-w-[1600px] items-center justify-between px-8">
        {/* LEFT */}
        <div>
          <Link
            href="/"
            className="text-[42px] leading-none text-[#e1b16c]"
            style={{ fontFamily: "serif" }}
          >
            Momento mori
          </Link>
        </div>

        {/* CENTER */}
        <nav className="hidden items-center gap-10 text-[18px] md:flex">
          <Link href="/" className="hover:text-[#e1b16c]">
            Головна
          </Link>

          {/* 🔥 ссылка на секцию */}
          <Link href="/#services" className="hover:text-[#e1b16c]">
            Пакети послуг
          </Link>

          <Link href="/ritual-products" className="hover:text-[#e1b16c]">
            Ритуальні товари
          </Link>

          <Link href="/about" className="hover:text-[#e1b16c]">
            Про нас
          </Link>

          <Link href="/payment" className="hover:text-[#e1b16c]">
            Оплата
          </Link>

          <Link href="/contacts" className="hover:text-[#e1b16c]">
            Контакти
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="text-right text-[16px] leading-[1.4]">
          <p className="text-[#e1b16c]">Цілодобово:</p>
          <a href="tel:+380503661966" className="block">
            +38 050 366 19 66
          </a>
          <a href="tel:+380679661966" className="block">
            +38 067 966 19 66
          </a>
        </div>
      </div>
    </header>
  );
}
