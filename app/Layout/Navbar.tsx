"use client"; // si usas App Router en Next.js 13+

import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backweb text-white px-4 py-3">
      <div className="flex items-center justify-around mx-10">
        {/* Botón de domicilio */}
        <a href="#" className=" hover:bg-blue-700 text-xs">        
          <img
            src="/domicilios.png" // cambia esto a tu ruta
            alt="Marca"
            className="h-16"
          />
        </a>

        {/* Botón móvil */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6 text-md font-semibold">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Volante</a>
          <a href="#" className="hover:underline">Sucursales</a>
          <a href="#" className="hover:underline">Cocina</a>
        </div>
      </div>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 text-sm font-semibold px-2">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Volante</a>
          <a href="#" className="hover:underline">Sucursales</a>
          <a href="#" className="hover:underline">Cocina</a>
        </div>
      )}
    </nav>
  );
}