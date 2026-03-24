import Link from "next/link";
import {
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
  FaViber,
} from "react-icons/fa";
import { navigationLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[1400px] px-6 pb-4 pt-16">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          <div>
            <h3
              className="text-[34px] leading-none text-[var(--text-main)]"
              style={{ fontFamily: "serif" }}
            >
              Контакти
            </h3>

            <div className="mt-4 h-[3px] w-12 bg-[var(--accent)]" />

            <div className="mt-6 space-y-1 text-[18px] leading-8 text-[var(--text-secondary)]">
              <p>
                <span className="font-semibold text-[var(--text-main)]">
                  Телефон:
                </span>{" "}
                <a
                  href="tel:+380503661966"
                  className="underline underline-offset-4 transition hover:text-[var(--accent)]"
                >
                  +38 (050) 366 19 66
                </a>
              </p>

              <p>
                <a
                  href="tel:+380679661966"
                  className="underline underline-offset-4 transition hover:text-[var(--accent)]"
                >
                  +38 (067) 966 19 66
                </a>
              </p>

              <p>
                <a
                  href="tel:+380633661966"
                  className="underline underline-offset-4 transition hover:text-[var(--accent)]"
                >
                  +38 (063) 366 19 66
                </a>
              </p>
            </div>

            <div className="mt-5 text-[18px] leading-8 text-[var(--text-secondary)]">
              <p className="font-semibold text-[var(--text-main)]">Email:</p>
              <a
                href="mailto:momento.mori.ritual@gmail.com"
                className="underline underline-offset-4 transition hover:text-[var(--accent)]"
              >
                momento.mori.ritual@gmail.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3
              className="text-[42px] leading-none text-[var(--text-main)]"
              style={{ fontFamily: "serif" }}
            >
              Momento Mori
            </h3>

            <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[16px] text-[var(--text-muted)]">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="underline underline-offset-4 transition hover:text-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex justify-center gap-6 text-[14px] text-[var(--accent)]">
              <a
                href="#"
                className="transition hover:opacity-70"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="transition hover:opacity-70"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="mailto:momento.mori.ritual@gmail.com"
                className="transition hover:opacity-70"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="#"
                className="transition hover:opacity-70"
                aria-label="Viber"
              >
                <FaViber size={20} />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-[34px] leading-none text-[var(--text-main)]">
              Працюємо цілодобово
            </h3>

            <div className="mt-4 h-[3px] w-12 bg-[var(--accent)] md:ml-auto" />

            <div className="mt-6 text-[18px] leading-8 text-[var(--text-secondary)]">
              <p className="font-semibold text-[var(--text-main)]">Адреса:</p>
              <p>м. Одеса,</p>
              <p>вул. Віталія Нестеренка</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border-color)] pt-4">
          <div className="flex flex-col gap-3 text-[14px] italic text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
            <p>© Created by TUZLOVA</p>
            <p>All rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
