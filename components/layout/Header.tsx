import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#3b3939] text-white">
      <div className="mx-auto flex h-[130px] max-w-[1600px] items-center justify-between px-8">
        <div className="shrink-0">
          <Link
            href="/"
            className="text-[42px] leading-none text-[var(--accent)]"
            style={{ fontFamily: "serif" }}
          >
            Momento mori
          </Link>
        </div>

        <nav className="hidden items-center gap-12 text-[20px] md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
