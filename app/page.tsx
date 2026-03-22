export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Ритуальные услуги
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Momento Mori
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
          Организация похорон, кремации и ритуальных услуг в Одессе.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Наши услуги
          </a>

          <a
            href="#contacts"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
          >
            Контакты
          </a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Услуги</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Здесь позже добавим карточки пакетов, карусель и остальные секции.
        </p>
      </section>

      <section id="contacts" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold md:text-3xl">Контакты</h2>
        <p className="mt-4 text-white/75">
          Телефон, адрес, форма связи — добавим следующим шагом.
        </p>
      </section>
    </main>
  );
}
