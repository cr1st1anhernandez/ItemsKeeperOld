'use client';

import { Collection } from '@/components/Collection';
import { collections } from '@/mocks/collections';
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon } from 'lucide-react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TopCollections = () => {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex items-center gap-6 pl-6">
        <h2 className="text-2xl font-semibold md:text-4xl lg:text-3xl">Top collections</h2>
        <SparklesIcon className="text-orange-400" />
      </header>
      <div className="relative flex max-w-screen-2xl gap-4">
        <ChevronLeftIcon
          className="animate-fade-left animate-infinite animate-duration-[1500ms] absolute left-0 top-1/2 z-20 flex -translate-y-1/2 rotate-90 flex-col items-center gap-2 opacity-20"
          size={40}
        />
        <ChevronRightIcon
          className="animate-fade-right animate-infinite animate-duration-[1500ms] absolute right-0 top-1/2 z-20 flex -translate-y-1/2 -rotate-90 flex-col items-center gap-2 opacity-20"
          size={40}
        />
        <Swiper
          spaceBetween={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index} className="p-6">
              <Collection {...collection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
