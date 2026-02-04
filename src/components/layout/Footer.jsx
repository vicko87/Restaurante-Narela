function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-8">
      {/* Contenedor centrado y compacto */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Restaurante Narela. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#aviso-legal" className="hover:text-[#C9A961] transition-colors">
              Aviso Legal
            </a>
            <a href="#privacidad" className="hover:text-[#C9A961] transition-colors">
              Política de Privacidad
            </a>
            <a href="#cookies" className="hover:text-[#C9A961] transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer