'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,A11y,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const logos = [
  { src: '/proveedores/Adulped_2024-1.png', alt: 'Ricordi' },
  { src: '/proveedores/cadadia.png', alt: 'Viejo Viñedo' },
  { src: '/proveedores/Cerveza-LLave_2024.png', alt: 'Riscossa' },
  { src: '/proveedores/Fanz.png', alt: 'Aloe Vera' },
  { src: '/proveedores/Farmes_2024-1.png', alt: 'VIP Baby' },
  { src: '/proveedores/marca_tentacion.png', alt: 'VIP Baby' },
  { src: '/proveedores/Mercatodo.png', alt: 'VIP Baby' },
  { src: '/proveedores/Mercamio.png', alt: 'VIP Baby' },
  { src: '/proveedores/Riscossa_2024.png', alt: 'VIP Baby' },
  { src: '/proveedores/Seletti.png', alt: 'VIP Baby' },
  { src: '/proveedores/PRIME-CAT-LITTER-Logo_page-0002.jpg', alt: 'VIP Baby' },
  { src: '/proveedores/ViejoVinedo.png', alt: 'VIP Baby' },
  { src: '/proveedores/Vino-Rcordi_2024.png', alt: 'VIP Baby' },
  { src: '/proveedores/Vip-Baby_2024.png', alt: 'VIP Baby' },
];

export const Proveedores = () => {
  return (
   
    <Swiper
    className=' shadow-2xl mb-6'
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={40}
      slidesPerView={4}
 

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
            loop={true} // 🔁 Esto permite reiniciar al llegar al final
        autoplay={{
          delay: 3000,   // ⏱️ Tiempo entre slides (ms)
          disableOnInteraction: false, // Sigue autoplay incluso si el usuario interactúa
        }}

       
    >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx} className="">
              <img
                src={logo.src}
                alt={logo.alt}
                className=""
              />
            </SwiperSlide>
          ))}

    </Swiper>
  )
}
