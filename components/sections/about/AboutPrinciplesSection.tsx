export default function AboutPrinciplesSection() {
  const principles = [
    {
      number: "01",
      title: "Повага",
      description:
        "Ми організовуємо прощання делікатно, без зайвого тиску та поспіху, з увагою до кожної ситуації.",
    },
    {
      number: "02",
      title: "Підтримка",
      description:
        "Беремо на себе організаційні питання, щоб родина могла зосередитися на головному й не залишалася з цим наодинці.",
    },
    {
      number: "03",
      title: "Гідність",
      description:
        "Для нас важливо, щоб кожне прощання проходило спокійно, впорядковано й з відчуттям внутрішньої поваги.",
    },
  ];

  return (
    <section className="bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[1400px] px-8 py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-24">
          <div>
            <p
              className="text-[28px] italic leading-none text-[var(--accent)] md:text-[32px]"
              style={{ fontFamily: "serif" }}
            >
              наш підхід
            </p>
          </div>

          <div className="max-w-[900px]">
            <h2 className="text-4xl font-semibold uppercase leading-[1.02] md:text-5xl lg:text-[64px]">
              ТЕ, ЩО МИ ВВАЖАЄМО
              <br />
              СПРАВДІ ВАЖЛИВИМ
            </h2>

            <p className="mt-8 max-w-[720px] text-[18px] leading-[1.75] text-[var(--text-secondary)] md:text-[20px]">
              У цій роботі для нас важливі не гучні слова, а спокій, точність і
              внутрішня повага до кожної родини та кожної ситуації.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-white/10 md:mt-24 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[320px] flex-col justify-between bg-[var(--bg-main)] px-8 py-8 md:px-10 md:py-10"
            >
              <span className="text-sm tracking-[0.18em] text-[var(--text-muted)]">
                {item.number}
              </span>

              <div className="mt-10">
                <h3 className="text-[30px] font-semibold leading-none md:text-[34px]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[17px] leading-[1.75] text-[var(--text-secondary)] md:text-[18px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
