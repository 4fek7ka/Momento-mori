export default function ContactsHeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/contacts/contacts-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(20,16,14,0.76)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.28),rgba(20,16,14,0.18),rgba(0,0,0,0.22))]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-[140px] md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_420px] lg:gap-20">
          <div>
            <div className="grid max-w-[700px] gap-y-6 text-white">
              <div className="grid grid-cols-[160px_1fr] items-start gap-6 border-b border-[rgba(255,255,255,0.10)] pb-6">
                <p className="text-[22px] font-medium text-white">Адреса</p>
                <div className="text-[16px] leading-7 text-[var(--text-secondary)]">
                  <p>Одеса, вул. Віталія Нестеренка</p>
                </div>
              </div>

              <div className="grid grid-cols-[160px_1fr] items-start gap-6 border-b border-[rgba(255,255,255,0.10)] pb-6">
                <p className="text-[22px] font-medium text-white">Телефон</p>
                <div className="text-[16px] leading-7 text-[var(--text-secondary)]">
                  <a
                    href="tel:+380503661966"
                    className="block underline underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    +38 (050) 366 19 66
                  </a>
                  <a
                    href="tel:+380679661966"
                    className="block underline underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    +38 (067) 966 19 66
                  </a>
                  <a
                    href="tel:+380633661966"
                    className="block underline underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    +38 (063) 366 19 66
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[160px_1fr] items-start gap-6 pb-2">
                <p className="text-[22px] font-medium text-white">E-mail</p>
                <div className="text-[16px] leading-7 text-[var(--text-secondary)]">
                  <a
                    href="mailto:momento.mori.ritual@gmail.com"
                    className="underline underline-offset-4 transition hover:text-[var(--accent)]"
                  >
                    momento.mori.ritual@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-[520px]">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Виникли питання?
              </h1>

              <p className="mt-5 text-[18px] italic text-[var(--accent)]">
                Ми на зв’язку 24/7.
              </p>

              <div className="mt-8 space-y-5 text-[16px] leading-8 text-[rgba(255,255,255,0.82)]">
                <p>
                  Ми розуміємо, що зараз у вас може бути багато питань, а сил
                  шукати відповіді — немає. Не залишайтеся з цим наодинці.
                </p>

                <p>
                  Просто залиште свій номер телефону. Наш черговий адміністратор
                  передзвонить вам протягом 5 хвилин, делікатно вислухає та
                  допоможе розібратися з будь-яким питанням — від документів до
                  вартості.
                </p>

                <p>
                  Це{" "}
                  <span className="font-medium text-[var(--accent)]">
                    безкоштовно
                  </span>{" "}
                  і ні до чого вас не зобов’язує.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-[140px]">
            <div className="rounded-[28px] bg-[rgba(37,31,27,0.82)] px-7 py-8 shadow-[0_14px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm md:px-8 md:py-9">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-[rgba(255,255,255,0.86)]"
                  >
                    Ім&apos;я*
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Введіть своє ім’я*"
                    className="h-12 w-full rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.22)] px-5 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.38)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-[rgba(255,255,255,0.86)]"
                  >
                    Телефон*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Введіть свій номер телефону*"
                    className="h-12 w-full rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.22)] px-5 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.38)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-[rgba(255,255,255,0.86)]"
                  >
                    Текст
                  </label>
                  <textarea
                    id="message"
                    placeholder="Введіть своє повідомлення"
                    rows={5}
                    className="w-full rounded-[22px] border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.22)] px-5 py-4 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.38)]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--bg-main)] transition hover:opacity-90"
                >
                  ВІДПРАВИТИ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
