import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function HeaderTransparent() {
  return (
    <header className="absolute top-0 z-50 w-full text-[var(--text-main)]">
      <div className="mx-auto flex h-[120px] max-w-[1600px] items-center justify-between px-8">
        <div>
          <Link
            href="/"
            className="text-[42px] leading-none text-[var(--accent)]"
            style={{ fontFamily: "serif" }}
          >
            {siteConfig.name}
          </Link>
        </div>

        <nav className="hidden items-center gap-10 text-[18px] md:flex">
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

        <div className="text-right text-[16px] leading-[1.4]">
          <p className="text-[var(--accent)]">Цілодобово:</p>

          {siteConfig.contacts.phones.map((phone, index) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="block transition hover:text-[var(--accent)]"
            >
              {siteConfig.contacts.phonesFormatted[index]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
