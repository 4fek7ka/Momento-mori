"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { servicePackages } from "@/data/servicePackages";
import ServiceCard from "@/components/sections/services/ServiceCard";

export default function ServicesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#2a2a2d] px-6 py-20 text-white" id="services">
      <div className="mx-auto max-w-[1400px]">
        <h2
          className="text-center text-4xl uppercase tracking-[0.18em] md:text-5xl"
          style={{ fontFamily: "serif" }}
        >
          Пакети послуг
        </h2>

        <p className="mt-6 text-center text-sm italic text-[var(--accent)] md:text-base">
          За бажанням ви можете додавати або видаляти будь-які пункти.
        </p>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-[-35px] top-1/2 z-10 hidden -translate-y-1/2 text-[var(--accent)] lg:block"
            aria-label="Попередній слайд"
          >
            <FaChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-[-35px] top-1/2 z-10 hidden -translate-y-1/2 text-[var(--accent)] lg:block"
            aria-label="Наступний слайд"
          >
            <FaChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".services-pagination",
              bulletClass: "services-bullet",
              bulletActiveClass: "services-bullet-active",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="h-full"
          >
            {servicePackages.map((item) => (
              <SwiperSlide key={item.id} className="!flex !h-auto">
                <ServiceCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 flex justify-center">
            <div className="services-pagination !static flex w-full items-center justify-center gap-3" />
          </div>

          <div className="mt-10 flex justify-center">
            <button className="rounded-full bg-[var(--accent)] px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white">
              Замовити
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
