"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function HeaderTransparent() {
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
      <header className="absolute top-0 z-50 w-full text-[var(--text-main)]">
        <div className="mx-auto flex h-[120px] max-w-[1600px] items-center justify-between px-6 md:px-8">
          {/* LOGO + NAME */}
          <Link
            href="/"
            className="flex items-center gap-3 md:gap-4"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.png"
              alt="Логотип Елізій"
              width={64}
              height={64}
              priority
              className="h-auto w-[42px] opacity-90 md:w-[52px] lg:w-[64px]"
            />

            <span
              className="text-[28px] leading-none text-[var(--accent)] md:text-[36px] lg:text-[42px]"
              style={{ fontFamily: "serif" }}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* DESKTOP NAV */}
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

          {/* DESKTOP CONTACT */}
          <div className="hidden text-right text-[16px] leading-[1.4] md:block">
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

          {/* MOBILE BURGER */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(212,175,135,0.4)] bg-[rgba(10,10,10,0.45)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition duration-300 hover:border-[var(--accent)] md:hidden"
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
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[380px] flex-col border-l border-[rgba(212,175,135,0.18)] bg-[rgba(15,15,15,0.96)] px-6 pb-8 pt-[120px] backdrop-blur-xl shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
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

          <div className="mt-10 border-t border-[rgba(255,255,255,0.08)] pt-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--accent)]">
              Цілодобово
            </p>

            <div className="mt-4 space-y-3">
              {siteConfig.contacts.phones.map((phone, index) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className={`block transition hover:text-[var(--accent)] ${
                    index === 0
                      ? "text-[22px] font-medium text-[var(--text-main)]"
                      : "text-[18px] text-[var(--text-secondary)]"
                  }`}
                >
                  {siteConfig.contacts.phonesFormatted[index]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
