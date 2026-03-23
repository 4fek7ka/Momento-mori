export default function ContactsMapSection() {
  return (
    <section className="bg-[#2c2c2f]">
      <div className="h-[520px] w-full">
        <iframe
          title="Momento Mori map"
          src="https://www.google.com/maps?q=Одеса%2C%20вул.%20Віталія%20Нестеренка&z=16&output=embed"
          className="h-full w-full border-0 grayscale-[0.2] brightness-90"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
