function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Sección principal del footer */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
  <p className="text-sm text-gray-500">
    &copy; 2026 Restaurante Narela. Todos los derechos reservados.
  </p>

  <div className="flex flex-wrap gap-8 text-sm text-gray-400 ml-auto">
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

      {/* Divisor */}
      <div className="border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-16">
      
        </div>
      </div>
    </footer>
  )
}

export default Footer