import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
  FaViber,
} from "react-icons/fa";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[1400px] px-6 pb-4 pt-16">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          {/* LEFT */}
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
                  Телефони:
                </span>
              </p>

              {siteConfig.contacts.phones.map((phone, index) => (
                <p key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="underline underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    {siteConfig.contacts.phonesFormatted[index]}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div className="text-center">
            {/* LOGO */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Логотип Елізій"
                width={80}
                height={80}
                className="h-auto w-[64px] md:w-[80px]"
              />
            </div>

            <h3
              className="text-[42px] leading-none text-[var(--text-main)]"
              style={{ fontFamily: "serif" }}
            >
              {siteConfig.name}
            </h3>

            <p className="mt-4 text-[15px] text-[var(--text-secondary)]">
              {siteConfig.tagline}
            </p>

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
              <a href="#" className="transition hover:opacity-70">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="transition hover:opacity-70">
                <FaTelegramPlane size={20} />
              </a>
              <a href="#" className="transition hover:opacity-70">
                <FaEnvelope size={20} />
              </a>
              <a href="#" className="transition hover:opacity-70">
                <FaViber size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:text-right">
            <h3 className="text-[34px] leading-none text-[var(--text-main)]">
              Працюємо цілодобово
            </h3>

            <div className="mt-4 h-[3px] w-12 bg-[var(--accent)] md:ml-auto" />

            <div className="mt-6 text-[18px] leading-8 text-[var(--text-secondary)]">
              <p className="font-semibold text-[var(--text-main)]">Адреса:</p>
              <p>{siteConfig.contacts.address}</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-[var(--border-color)] pt-4">
          <div className="flex flex-col gap-3 text-[14px] italic text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
            <p>© Created by CemechKO</p>
            <p>All rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
