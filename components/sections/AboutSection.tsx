"use client";

export default function AboutSection() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20 text-[var(--text-main)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 xl:grid-cols-[1.05fr_520px] xl:items-start">
        <div className="max-w-[760px]">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Про нас
          </p>

          <h2 className="mt-5 max-w-[520px] text-4xl font-medium leading-tight md:text-5xl">
            Ми – ритуальна служба нового формату.
          </h2>

          <div className="mt-10 space-y-6 text-[18px] leading-9 text-[var(--text-secondary)]">
            <p>
              Ми створили{" "}
              <span className="font-semibold text-[var(--text-main)]">
                Momento Mori
              </span>
              , щоб у найважчу хвилину ви відчували надійну опору. Ми віримо, що
              прощання має проходити з максимальною повагою до пам&apos;яті —
              спокійно, виважено та з турботою про почуття рідних.
            </p>

            <p>
              Коли ви звертаєтесь до нас, ви довіряєте не просто бізнесу, а
              людям.
            </p>
          </div>

          <div className="mt-10 text-[18px] leading-9 text-[var(--text-secondary)]">
            <p className="font-medium uppercase text-[var(--text-main)]">
              Наші принципи:
            </p>

            <p className="mt-3">
              <span className="font-medium text-[var(--text-main)]">
                Людяність:
              </span>{" "}
              Ми ставимося до вашого горя з повагою. Ми — родина, яка допомагає
              іншим родинам.
            </p>

            <p>
              <span className="font-medium text-[var(--text-main)]">
                Чесність:
              </span>{" "}
              Жодних прихованих платежів у моргах чи на кладовищі. Всі ціни
              фіксуються одразу.
            </p>

            <p>
              <span className="font-medium text-[var(--text-main)]">
                Підтримка:
              </span>{" "}
              Ми розуміємо фінансове навантаження, тому першими в місті ввели
              офіційну оплату частинами від Monobank.
            </p>
          </div>
        </div>

        <div className="mx-auto h-full w-full max-w-[520px] overflow-hidden bg-[var(--surface)]">
          <img
            src="/images/about/about-service.webp"
            alt="Підтримка та турбота ритуальної служби"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
