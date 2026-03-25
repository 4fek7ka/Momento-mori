import { siteConfig } from "@/data/site";

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
      <div className="absolute inset-0 bg-[rgba(20,16,14,0.72)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22),rgba(20,16,14,0.08),rgba(0,0,0,0.2))]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 pb-24 pt-[170px] md:pb-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20">
          {/* LEFT */}
          <div className="max-w-[760px]">
            <p
              className="text-[28px] italic leading-none text-[var(--accent)] md:text-[32px]"
              style={{ fontFamily: "serif" }}
            >
              контакти
            </p>

            <h1 className="mt-8 text-4xl font-semibold uppercase leading-[1.04] md:text-5xl lg:text-[68px]">
              МИ ПОРУЧ,
              <br />
              КОЛИ ПОТРІБНА
              <br />
              ДОПОМОГА
            </h1>

            <p className="mt-8 max-w-[620px] text-[18px] leading-[1.75] text-[rgba(255,255,255,0.78)] md:text-[19px]">
              Ви можете зв’язатися з нами у будь-який момент. Ми відповідаємо
              спокійно, делікатно й без зайвих формальностей.
            </p>

            <div className="mt-14 max-w-[700px] border-t border-white/10">
              <div className="grid gap-4 border-b border-white/10 py-6 md:grid-cols-[170px_1fr]">
                <p className="text-[15px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Адреса
                </p>
                <p className="text-[18px] text-white">
                  {siteConfig.contacts.address}
                </p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-6 md:grid-cols-[170px_1fr]">
                <p className="text-[15px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Телефони
                </p>
                <div className="space-y-2 text-[18px] text-white">
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

              <div className="grid gap-4 py-6 md:grid-cols-[170px_1fr]">
                <p className="text-[15px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  Графік
                </p>
                <p className="text-[18px] text-white">Цілодобово, 24/7</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-[40px]">
            <div className="border border-white/10 bg-[rgba(28,22,19,0.88)] p-8 backdrop-blur-sm md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Зворотний зв’язок
              </p>

              <h2 className="mt-5 text-2xl font-semibold uppercase leading-[1.15] md:text-3xl">
                ЗАЛИШТЕ
                <br />
                ПОВІДОМЛЕННЯ
              </h2>

              <p className="mt-5 max-w-[360px] text-[15px] leading-[1.75] text-[rgba(255,255,255,0.72)]">
                Якщо вам зручніше, ми можемо зв’язатися з вами у відповідь на
                повідомлення.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-[rgba(255,255,255,0.82)]"
                  >
                    Ім’я
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ваше ім’я"
                    className="h-12 w-full border border-white/10 bg-[rgba(0,0,0,0.16)] px-4 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.36)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-[rgba(255,255,255,0.82)]"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Ваш номер телефону"
                    className="h-12 w-full border border-white/10 bg-[rgba(0,0,0,0.16)] px-4 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.36)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-[rgba(255,255,255,0.82)]"
                  >
                    Повідомлення
                  </label>
                  <textarea
                    id="message"
                    placeholder="Ваше повідомлення"
                    rows={5}
                    className="w-full border border-white/10 bg-[rgba(0,0,0,0.16)] px-4 py-4 text-sm text-white outline-none placeholder:text-[rgba(255,255,255,0.36)]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full border border-[var(--accent)] px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-[var(--bg-main)]"
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
