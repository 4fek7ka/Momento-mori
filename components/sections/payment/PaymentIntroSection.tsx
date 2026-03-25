export default function PaymentIntroSection() {
  return (
    <section className="bg-[var(--bg-secondary)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[1400px] px-8 pb-24 pt-[170px] md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_540px]">
          {/* LEFT */}
          <div className="max-w-[760px]">
            <p
              className="text-[28px] italic leading-none text-[var(--accent)] md:text-[32px]"
              style={{ fontFamily: "serif" }}
            >
              оплата частинами
            </p>

            <h1 className="mt-8 text-4xl font-semibold uppercase leading-[1.02] md:text-5xl lg:text-[72px]">
              ГІДНЕ
              <br />
              ПРОЩАННЯ
              <br />
              БЕЗ ПАУЗИ
            </h1>

            <div className="mt-10 max-w-[620px] space-y-6 text-[18px] leading-[1.75] text-[var(--text-secondary)] md:text-[19px]">
              <p>
                Ми розуміємо, що організація церемонії часто стає не лише
                емоційним, а й фінансовим випробуванням.
              </p>

              <p>
                Саме тому пропонуємо офіційну можливість оформити{" "}
                <span className="text-[var(--text-main)]">
                  «Покупку частинами»
                </span>{" "}
                від monobank — щоб ви могли вирішити важливе зараз, без зайвого
                тиску в цей момент.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-sm uppercase tracking-[0.12em] text-[var(--text-muted)]">
              <span>3–25 платежів</span>
              <span>оформлення онлайн</span>
              <span>офіційний сервіс monobank</span>
            </div>

            <div className="mt-14">
              <button className="btn-primary px-10 py-4 text-sm uppercase tracking-[0.06em]">
                ОФОРМИТИ
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-end">
            <div className="w-full overflow-hidden rounded-[20px] border border-white/10 bg-[var(--bg-main)]">
              <div className="relative h-[520px]">
                <img
                  src="/images/payment/mono-top.png"
                  alt="Покупка частинами monobank"
                  className="h-full w-full object-cover"
                />

                {/* затемнение */}
                <div className="absolute inset-0 bg-black/50" />

                {/* контент */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <div className="mt-4 border-t border-white/20 pt-5">
                    <p className="text-2xl font-semibold leading-tight md:text-3xl">
                      Покупка
                      <br />
                      частинами
                    </p>

                    <p className="mt-4 max-w-[340px] text-[15px] leading-[1.7] text-white/80">
                      Офіційний інструмент, який дозволяє розподілити оплату на
                      кілька рівних платежів.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
