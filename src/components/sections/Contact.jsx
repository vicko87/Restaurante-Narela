import { motion } from 'framer-motion';

function Contact() {
  return (
    <section
      id="contacto"
      // 🔧 CAMBIO 1: centrado vertical y horizontal + altura mínima
      className="bg-[#0a0a0a] text-white py-20 px-8 flex items-center justify-center min-h-screen"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Título */}
          <div>
            <p className="text-[#C9A961] text-sm tracking-[0.3em] font-light mb-4 italic">
              visítanos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-[#C9A961]">
              Restaurante Narela
            </h2>
          </div>

          {/* Contenido - Grid */}
          <div
            // 🔧 CAMBIO 2: place-items-center para centrar columnas
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center place-items-center"
          >
            
            {/* Columna 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              // 🔧 CAMBIO 3: flex + items-center
              className="space-y-6 flex flex-col items-center text-center"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#C9A961]">Ubicación</h3>
                <p className="text-gray-300 leading-relaxed">
                  Carrer Sant Anreu, 24<br />
                  08340 Vilassar de Mar<br />
                  Barcelona, España
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#C9A961]">Contacto</h3>
                <a
                  href="tel:+34600700102"
                  className="text-gray-300 hover:text-[#C9A961] transition-colors block"
                >
                  (+34) 600 70 01 02
                </a>
              </div>
            </motion.div>

            {/* Columna 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              // 🔧 CAMBIO 3 aplicado también aquí
              className="space-y-4 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#C9A961]">Horarios</h3>

              <div className="space-y-3 max-w-xs">
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Lunes</span>
                  <span className="text-gray-200">08:30 – 00:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Martes</span>
                  <span className="text-gray-200 italic">Cerrado</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Miércoles</span>
                  <span className="text-gray-200">08:30 – 00:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Jueves</span>
                  <span className="text-gray-200">08:30 – 00:00</span>
                </div>
              </div>
            </motion.div>

            {/* Columna 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              // 🔧 CAMBIO 3 aplicado también aquí
              className="space-y-4 flex flex-col items-center text-center"
            >
              {/* 🔧 CAMBIO 4: invisible en vez de opacity-0 */}
              <h3 className="text-xl font-semibold mb-6 text-[#C9A961] invisible">
                Horarios
              </h3>

              <div className="space-y-3 max-w-xs">
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Viernes</span>
                  <span className="text-gray-200">08:30 – 01:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Sábado</span>
                  <span className="text-gray-200">09:00 – 01:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2 w-64">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-gray-200">09:00 – 17:00</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info extra */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 border-t border-gray-800"
          >
            <p className="text-gray-400 text-sm">
              Reservas recomendadas para fines de semana y días festivos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
