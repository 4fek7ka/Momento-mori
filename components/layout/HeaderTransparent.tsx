import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

export default function HeaderTransparent() {
  return (
    <header className="absolute top-0 z-50 w-full text-white">
      <div className="mx-auto flex h-[120px] max-w-[1600px] items-center justify-between px-8">
        <div>
          <Link
            href="/"
            className="text-[42px] leading-none text-[#e1b16c]"
            style={{ fontFamily: "serif" }}
          >
            Momento mori
          </Link>
        </div>

        <nav className="hidden items-center gap-10 text-[18px] md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#e1b16c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
