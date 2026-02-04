import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Reservar() {
  const reservaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reservaRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);

  return (
    <section
      id="reservar"
      ref={reservaRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Background con parallax animado */}
      <motion.div
        style={{ scale, y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Contenido con parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20 w-full"
      >
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#C9A961] text-xs sm:text-sm tracking-[0.3em] font-light mb-6 sm:mb-8 italic"
          >
            ven a Narela
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#C9A961] flex items-center justify-center flex-wrap sm:whitespace-nowrap"
          >
            <span className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl mr-2 sm:mr-4">{'>'}</span>
            <span className="px-1 sm:px-0">RESERVAR MESA</span>
            <span className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl ml-2 sm:ml-4">{'<'}</span>
          </motion.h2>
        </div>

        {/* Formulario centrado */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6"
        >
          {/* Primera fila - 2 inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-transparent border border-[#C9A961]/40 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="bg-transparent border border-[#C9A961]/40 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Segunda fila - 2 inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="number"
              placeholder="Nº comensales"
              className="bg-transparent border border-[#C9A961]/40 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors text-sm sm:text-base"
            />
            <input
              type="date"
              className="bg-transparent border border-[#C9A961]/40 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors text-sm sm:text-base"
            />
          </div>

          {/* Tercera fila - Input de hora */}
          <input
            type="time"
            placeholder="*Hora*"
            className="w-full bg-transparent border border-[#C9A961]/40 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors text-sm sm:text-base"
          />

          {/* Botón enviar */}
          <div className="flex justify-center pt-4 sm:pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="border border-[#C9A961] text-[#C9A961] px-8 sm:px-12 py-3 tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-light hover:bg-[#C9A961] hover:text-black transition-all duration-300"
            >
              ENVIAR
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Reservar;