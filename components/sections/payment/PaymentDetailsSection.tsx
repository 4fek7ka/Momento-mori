export default function PaymentDetailsSection() {
  return (
    <section className="bg-[var(--bg-main)] px-6 py-20 text-[var(--text-main)]">
      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1fr_520px] lg:items-start">
        {/* LEFT */}
        <div>
          <p className="text-[22px] leading-8 text-[var(--text-secondary)]">
            Покупка частинами
          </p>

          <h2 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
            monobank | Universal Bank
          </h2>

          <div className="mt-10 rounded-[28px] bg-[var(--bg-secondary)] px-8 py-8 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="text-7xl leading-none">🐾</div>

              <div>
                <p className="text-3xl font-semibold md:text-4xl">
                  Покупка
                  <br />
                  частинами
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[28px] border border-[var(--border-color)] bg-[var(--bg-secondary)] px-8 py-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Інформація
          </p>

          <div className="mt-6 space-y-6 text-[16px] leading-7 text-[var(--text-secondary)]">
            <div>
              <p className="font-semibold text-[var(--text-main)]">
                Надавач послуг:
              </p>
              <p className="mt-2">
                АТ «УНІВЕРСАЛ БАНК» ліцензія НБУ №92 від 10.10.2011, номер у
                держреєстрі банків № 226.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[var(--text-main)]">
                Характеристики продукту:
              </p>

              <ul className="mt-3 space-y-1">
                <li>— Мінімальна сума розстрочки: 1 грн</li>
                <li>— Максимальна сума розстрочки: 400 000 грн</li>
                <li>— Реальна річна процентна ставка: 0,000001%</li>
                <li>— Доступні строки платежів: 3–25</li>
                <li>
                  — Порядок погашення: щомісячні платежі рівними частинами
                </li>
                <li>— Перший платіж у момент оформлення покупки</li>
              </ul>
            </div>

            <div>
              <p>
                Інформація про істотні характеристики продукту та попередження
                розміщені на сайті продукту{" "}
                <a
                  href="https://chast.monobank.ua"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4 text-[var(--accent)]"
                >
                  chast.monobank.ua
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
