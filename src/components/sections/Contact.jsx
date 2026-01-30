import { motion } from 'framer-motion';

function Contact() {
  return (
    <section id="contacto" className="bg-[#0a0a0a] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
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

          {/* Contenido - Grid de 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            {/* Columna 1: Dirección y Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
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
                  href="tel:+34682788039" 
                  className="text-gray-300 hover:text-[#C9A961] transition-colors block"
                >
                  (+34) 600 70 01 02
                </a>
              </div>
            </motion.div>

            {/* Columna 2: Horarios Entre Semana */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#C9A961]">Horarios</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Lunes</span>
                  <span className="text-gray-200">08:30 – 00:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Martes</span>
                  <span className="text-gray-200 italic">Cerrado</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Miércoles</span>
                  <span className="text-gray-200">08:30 – 00:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Jueves</span>
                  <span className="text-gray-200">08:30 – 00:00</span>
                </div>
              </div>
            </motion.div>

            {/* Columna 3: Horarios Fin de Semana */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#C9A961] opacity-0">Horarios</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Viernes</span>
                  <span className="text-gray-200">08:30 – 01:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Sábado</span>
                  <span className="text-gray-200">09:00 – 01:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Domingo</span>
                  <span className="text-gray-200">09:00 – 17:00</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Información adicional */}
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