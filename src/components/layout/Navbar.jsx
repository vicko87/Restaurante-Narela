import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-[#FF6347]/20">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#FF6347] text-3xl font-black tracking-wider cursor-pointer">
          Narela
        </div>

        {/* Menu hamburguesa (móvil) */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-8 h-0.5 bg-[#FF6347] rounded"></span>
          <span className="w-8 h-0.5 bg-[#FF6347] rounded"></span>
          <span className="w-8 h-0.5 bg-[#FF6347] rounded"></span>
        </button>

        {/* Links de navegación */}
        <ul className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex md:gap-12 md:flex-row 
          flex-col gap-6 
          absolute md:relative top-full md:top-0 left-0 md:left-auto 
          w-full md:w-auto 
          bg-black/98 md:bg-transparent 
          p-8 md:p-0 
          text-center md:text-left
        `}>
          <li className='text-white'>
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="text-white text-sm font-semibold tracking-wider hover:text-[#FF6347] transition-colors relative group"
            >
              INICIO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6347] group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className='text-white'>
            <a
              href="#carta"
              onClick={() => setIsOpen(false)}
              className="text-white text-sm font-semibold tracking-wider hover:text-[#FF6347] transition-colors relative group"
            >
              MENÚ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6347] group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className='text-white'>
            <a
              href="#galeria"
              onClick={() => setIsOpen(false)}
              className="text-white text-sm font-semibold tracking-wider hover:text-[#FF6347] transition-colors relative group"
            >
              GALERÍA
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6347] group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className='text-white'>
            <a
              href="#reservar"
              onClick={() => setIsOpen(false)}
              className="text-white text-sm font-semibold tracking-wider hover:text-[#FF6347] transition-colors relative group"
            >
              RESERVAR
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6347] group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li className='text-white'>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="text-white text-sm font-semibold tracking-wider hover:text-[#FF6347] transition-colors relative group"
            >
              CONTACTO
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6347] group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar