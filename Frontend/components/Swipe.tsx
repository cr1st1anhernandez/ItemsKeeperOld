'use client';
import { Collection } from '@/components/Collection';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Swipe = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Collection
          name="Plants"
          description="Full collection of all my favorites plants, flowers and trees"
          category="Nature"
          items={43}
          imageUrl="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Collection
          name="Plants"
          description="Full collection of all my favorites plants, flowers and trees"
          category="Nature"
          items={43}
          imageUrl="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Collection
          name="Plants"
          description="Full collection of all my favorites plants, flowers and trees"
          category="Nature"
          items={43}
          imageUrl="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Collection
          name="Plants"
          description="Full collection of all my favorites plants, flowers and trees"
          category="Nature"
          items={43}
          imageUrl="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Collection
          name="Plants"
          description="Full collection of all my favorites plants, flowers and trees"
          category="Nature"
          items={43}
          imageUrl="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Collection
          name="Plants"
          description="Full collection of all my favorites plants, flowers and trees"
          category="Nature"
          items={43}
          imageUrl="https://images.unsplash.com/photo-1707581471193-183252f0d85b?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </SwiperSlide>
    </Swiper>
  );
};
