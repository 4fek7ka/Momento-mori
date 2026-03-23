export default function PaymentIntroSection() {
  return (
    <section className="bg-[#3b3b3d] px-6 pb-20 pt-[150px] text-white">
      <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[20px] bg-black shadow-lg">
            <img
              src="/images/payment/mono-top.webp"
              alt="Покупка частинами monobank"
              className="h-[120px] w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-[20px] bg-black shadow-lg">
            <img
              src="/images/payment/mono-bottom.webp"
              alt="Ритуальна церемонія"
              className="h-[120px] w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-[720px]">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Головне – це пам&apos;ять
            <div className="p">Оплата – частинами.</div>
          </h1>

          <div className="mt-8 space-y-6 text-[18px] leading-8 text-[#e1b16c]">
            <p>
              Ми розуміємо, що прощання з близькою людиною часто стає
              несподіваним фінансовим навантаженням.
            </p>

            <p>
              Щоб ви могли організувати гідну церемонію, не економлячи на
              важливому, ми підключили офіційну{" "}
              <span className="font-semibold text-white">
                “Покупку частинами”
              </span>{" "}
              від monobank.
            </p>
          </div>

          <div className="mt-8 space-y-2 text-[18px] leading-8 text-white/95">
            <p>
              <span className="font-semibold text-white">Без переплат:</span>{" "}
              Чесна розстрочка без прихованих комісій.
            </p>
            <p>
              <span className="font-semibold text-white">Зручні терміни:</span>{" "}
              Розділіть суму на 3, 6 або 10 платежів.
            </p>
            <p>
              <span className="font-semibold text-white">Швидко:</span>{" "}
              Оформлення за 2 хвилини через ваш смартфон.
            </p>
          </div>

          <p className="mt-8 max-w-[640px] text-[18px] leading-8 text-[#e1b16c]">
            Зосередьтеся на прощанні, а фінансові питання вирішуйте у зручному
            для вас темпі.
          </p>

          <div className="mt-10">
            <button className="rounded-full bg-white px-10 py-4 text-sm font-medium uppercase tracking-[0.08em] text-[#3b3b3d] transition hover:opacity-90">
              ОФОРМИТИ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
