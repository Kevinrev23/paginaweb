import React from 'react'

export const Footer = () => {
  return (
        <footer className="bg-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* Menú */}
        <div>
          <h3 className="font-bold text-3xl mb-2">Menú</h3>
          <ul className="space-y-1">
            <li className='text-xl'>¿quienes somos?</li>
            <li className='text-xl'>sucripciones y retiros</li>
            <li className='text-xl'>Descargas</li>
          </ul>
        </div>

        {/* Políticas */}
        <div>
          <h3 className="font-bold text-3xl mb-2">Políticas</h3>
          <ul className="space-y-1">
            <li className='text-xl'>manual de política web</li>
            <li className='text-xl'>aviso de privacidad</li>
            <li className='text-xl'>tratamiento de datos</li>
          </ul>
        </div>

        {/* Portal */}
        <div>
          <h3 className="font-bold text-3xl mb-2">Portal</h3>
          <ul className="space-y-1">
            <li className='text-xl'>proveedores</li>
            <li className='text-xl' >empleados</li>
            <li className='text-xl'>trabaja con nosotros</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior azul */}
      <div className="bg-blue-800 text-white text-center text-xs py-3">
        Mercamio y Mercatodo © 2025 – Todos los derechos reservados.
      </div>
    </footer>
  )
}
