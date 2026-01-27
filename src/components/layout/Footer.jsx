function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* Sección principal del footer */}
     

       

      

      {/* Sección inferior con logos y derechos */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
      
            {/* Enlaces legales y copyright */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex gap-6 text-xs text-gray-400">
                <a href="#aviso-legal" className="hover:text-[#FF6347] transition-colors">
                  Aviso Legal
                </a>
                <a href="#privacidad" className="hover:text-[#FF6347] transition-colors">
                  Política de Privacidad
                </a>
                <a href="#cookies" className="hover:text-[#FF6347] transition-colors">
                  Política de Cookies
                </a>
              </div>
              <p className="text-xs text-gray-500">
                &copy; 2026 Restaurante Narela. Todos los derechos reservados.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer