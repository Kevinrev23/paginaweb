"use client"
import React from 'react'

export const Descuentos = () => {
    const imagenes = [
    {
      src: '/descuentos/Frutas-y-Verduras_Feed-1024x1024.png',
      alt: '15% en frutas y verduras',
    },
    {
      src: '/descuentos/Pescados-Mariscos_Feed-2048x2048.png',
      alt: '15% en pollo crudo',
    },
    {
      src: '/descuentos/Pollo-Crudo_Feed-1024x1024.png',
      alt: '15% en pescados y mariscos',
    },
  ];

  return (
    <section className='w-fulll py-24'>
        <h2 className="text-center text-3xl md:text-6xl font-bold text-blue-800  mb-10">
          Días de descuentos
        </h2>
        <div className='flex justify-evenly items-center pt-20 mb-10' >
        {imagenes.map((img, idx) => (
         <div key={idx} className=' w-[420px] h-[420px] '>
            <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className='rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300'
             />
            </div>
          ))}
        </div>
    </section>

  )
}
