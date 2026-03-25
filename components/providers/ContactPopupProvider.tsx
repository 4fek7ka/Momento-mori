"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { siteConfig } from "@/data/site";

type ContactPopupContextType = {
  openPopup: () => void;
  closePopup: () => void;
};

const ContactPopupContext = createContext<ContactPopupContextType | null>(null);

export function useContactPopup() {
  const context = useContext(ContactPopupContext);

  if (!context) {
    throw new Error("useContactPopup must be used within ContactPopupProvider");
  }

  return context;
}

function isMobileDevice() {
  if (typeof window === "undefined") return false;

  const userAgent =
    navigator.userAgent ||
    navigator.vendor ||
    // @ts-expect-error legacy browser fallback
    window.opera ||
    "";

  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent.toLowerCase(),
  );
}

export default function ContactPopupProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const value = useMemo(
    () => ({
      openPopup: () => setIsOpen(true),
      closePopup: () => setIsOpen(false),
    }),
    [],
  );

  const handlePhoneClick = async (phone: string) => {
    if (isMobileDevice()) {
      window.location.href = `tel:${phone}`;
      return;
    }

    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(phone);

      setTimeout(() => {
        setCopiedPhone((current) => (current === phone ? null : current));
      }, 2000);
    } catch {
      setCopiedPhone(phone);

      setTimeout(() => {
        setCopiedPhone((current) => (current === phone ? null : current));
      }, 2000);
    }
  };

  return (
    <ContactPopupContext.Provider value={value}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
          <button
            type="button"
            aria-label="Закрити"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-[6px]"
          />

          <div className="relative z-[101] w-full max-w-[520px] overflow-hidden rounded-[28px] border border-[rgba(212,175,122,0.22)] bg-[linear-gradient(180deg,rgba(41,31,24,0.96)_0%,rgba(28,22,18,0.98)_100%)] p-6 text-[var(--text-main)] shadow-[0_24px_80px_rgba(0,0,0,0.5)] md:p-8">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-[rgba(255,255,255,0.03)]" />

            <button
              type="button"
              aria-label="Закрити"
              onClick={() => {
                setIsOpen(false);
                setCopiedPhone(null);
              }}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,122,0.26)] bg-[rgba(255,255,255,0.02)] text-[18px] text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              ×
            </button>

            <div className="pr-14">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]/80">
                Контакти
              </p>

              <h3
                className="mt-3 text-[34px] leading-[1.08] text-[var(--text-main)] md:text-[42px]"
                style={{ fontFamily: "serif" }}
              >
                Консультація 24/7
              </h3>

              <p className="mt-3 max-w-[420px] text-[17px] leading-8 text-[var(--text-secondary)]">
                Безкоштовно підкажемо, що робити далі, та допоможемо швидко
                зорієнтуватися в організаційних питаннях.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {siteConfig.contacts.phones.map((phone, index) => {
                const isCopied = copiedPhone === phone;

                return (
                  <button
                    key={phone}
                    type="button"
                    onClick={() => handlePhoneClick(phone)}
                    className="group flex w-full items-center justify-between rounded-[18px] border border-[rgba(212,175,122,0.18)] bg-[rgba(255,255,255,0.015)] px-5 py-4 text-left transition hover:border-[rgba(212,175,122,0.42)] hover:bg-[rgba(255,255,255,0.03)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,122,0.22)] bg-[rgba(212,175,122,0.08)] text-[var(--accent)]">
                        <FaPhoneAlt size={14} />
                      </div>

                      <div>
                        <p className="text-[20px] font-medium tracking-[0.01em] text-[var(--text-main)]">
                          {siteConfig.contacts.phonesFormatted[index]}
                        </p>
                        <p className="mt-1 text-[13px] text-[var(--text-muted)]">
                          Цілодобово без вихідних
                        </p>
                      </div>
                    </div>

                    <span className="text-[14px] font-medium text-[var(--accent)] transition group-hover:translate-x-[2px]">
                      {isCopied
                        ? "Скопійовано"
                        : isMobileDevice()
                          ? "Подзвонити"
                          : "Копіювати"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[rgba(212,175,122,0.14)] pt-5">
              <p className="text-[14px] leading-6 text-[var(--text-muted)]">
                <span className="text-[var(--text-secondary)]">Адреса:</span>{" "}
                {siteConfig.contacts.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </ContactPopupContext.Provider>
  );
}
