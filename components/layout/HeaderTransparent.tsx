"use client";

import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function HeaderTransparent() {
  return (
    <header className="absolute top-0 z-50 w-full text-[var(--text-main)]">
      <div className="mx-auto flex h-[120px] max-w-[1600px] items-center justify-between px-8">
        {/* LOGO + NAME */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Логотип Елізій"
            width={64}
            height={64}
            priority
            className="h-auto w-[52px] md:w-[64px] opacity-90"
          />

          <span
            className="text-[36px] leading-none text-[var(--accent)] md:text-[42px]"
            style={{ fontFamily: "serif" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* NAV */}
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

        {/* CONTACT */}
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
