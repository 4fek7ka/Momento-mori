"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[rgba(18,18,18,0.85)] text-[var(--text-main)] backdrop-blur-md">
        <div className="mx-auto flex h-[96px] max-w-[1400px] items-center justify-between px-6">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.png"
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

          {/* DESKTOP NAV */}
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

          {/* DESKTOP CONTACT */}
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

          {/* BURGER */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,135,0.45)] bg-[rgba(30,20,14,0.95)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition duration-300 hover:border-[var(--accent)] md:hidden"
          >
            <span className="relative flex h-[18px] w-[22px] flex-col justify-between">
              <span
                className={`block h-[2px] w-[22px] rounded-full bg-[var(--accent)] transition duration-300 ${
                  isMenuOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[22px] rounded-full bg-[var(--accent)] transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[22px] rounded-full bg-[var(--accent)] transition duration-300 ${
                  isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[70] md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* PANEL */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[380px] flex-col border-l border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 pb-8 pt-[120px] shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* NAV */}
          <nav className="flex flex-col gap-6 text-[22px]">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[rgba(255,255,255,0.08)] pb-4 transition hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CONTACT */}
          <div className="mt-10 border-t border-[rgba(255,255,255,0.08)] pt-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Цілодобово
            </p>

            <div className="mt-4 space-y-3">
              {siteConfig.contacts.phones.map((phone, i) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className={`block transition hover:text-[var(--accent)] ${
                    i === 0
                      ? "text-[22px] font-medium text-[var(--text-main)]"
                      : "text-[18px] text-[var(--text-secondary)]"
                  }`}
                >
                  {siteConfig.contacts.phonesFormatted[i]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
