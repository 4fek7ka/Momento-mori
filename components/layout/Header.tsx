"use client";

import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(18,18,18,0.85)] border-b border-[var(--border-color)] text-[var(--text-main)]">
      <div className="mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-6">
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png" // путь к логотипу
            alt="Логотип Елізій"
            width={48}
            height={48}
            priority
            className="h-auto w-[40px] md:w-[48px]"
          />

          <span
            className="text-[28px] tracking-wide text-[var(--accent)] md:text-[32px]"
            style={{ fontFamily: "serif" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-10 text-[16px] md:flex">
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

        {/* CONTACT */}
        <div className="hidden text-right md:block">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Цілодобово
          </p>

          {siteConfig.contacts.phones.map((phone, i) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className={`block transition hover:text-[var(--accent)] ${
                i === 0
                  ? "mt-1 text-[18px] font-medium"
                  : "text-[15px] text-[var(--text-secondary)]"
              }`}
            >
              {siteConfig.contacts.phonesFormatted[i]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
