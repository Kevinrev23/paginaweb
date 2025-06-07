"use client"
import { Navigation, Pagination, Scrollbar, A11y,EffectFade } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = () => {
  return (
   
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
            loop={true} // 🔁 Esto permite reiniciar al llegar al final
        autoplay={{
          delay: 5000,       // ⏱️ Tiempo entre slides (ms)
          disableOnInteraction: false, // Sigue autoplay incluso si el usuario interactúa
        }}
        className='bg-gray-950'
       
    >
      <SwiperSlide>
        <img
            src="/Banner-Web-Domicilios.jpg" // cambia esto a tu ruta
            alt="Marca"
        />
       </SwiperSlide>
      <SwiperSlide>
        <img
            src="/cerveza_slider.png" // cambia esto a tu ruta
            alt="Cerveza"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
            src="/Banner-Web-Economico.jpg" // cambia esto a tu ruta
            alt="Economico"
        />
      </SwiperSlide>
    </Swiper>
  )
}
