"use client";

import { FaPhone } from "react-icons/fa";

export default function PhoneFloatingButton() {
  return (
    <a
      href="tel:+380XXXXXXXXX" // вставь свой номер
      className="fixed bottom-6 right-6 z-50 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg-main)] shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition hover:scale-105 hover:brightness-95"
    >
      <FaPhone size={22} />
    </a>
  );
}
