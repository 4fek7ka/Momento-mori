import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ContactPopupProvider from "@/components/providers/ContactPopupProvider";
import PhoneFloatingButton from "@/components/layout/PhoneFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Momento mori",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContactPopupProvider>
          {children}

          {/* FLOATING PHONE BUTTON (глобально) */}
          <PhoneFloatingButton />
        </ContactPopupProvider>
      </body>
    </html>
  );
}
