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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
    className="relative z-20 max-w-7xl mx-auto px-8 py-20 w-full"
  >
    {/* Título */}
    <div className="text-center mb-16">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#C9A961] text-sm tracking-[0.3em] font-light mb-6 italic"
      >
        ven a Narela
      </motion.p>
   <motion.h2 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] text-[#C9A961] flex items-center justify-center"
>
  <span className="text-white text-6xl mr-4">{'>'}</span>
  RESERVAR MESA
  <span className="text-white text-6xl ml-4">{'>'}</span>
</motion.h2>
    </div>

    {/* Grid: Formulario + Info */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Lado izquierdo: Formulario */}
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        {/* Primera fila - 2 inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Nombre"
            className="bg-transparent border border-[#C9A961]/40 px-6 py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="bg-transparent border border-[#C9A961]/40 px-6 py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors"
          />
        </div>

        {/* Segunda fila - 2 inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="number"
            placeholder="Nº comensales"
            className="bg-transparent border border-[#C9A961]/40 px-6 py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors"
          />
          <input
            type="date"
            className="bg-transparent border border-[#C9A961]/40 px-6 py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors"
          />
        </div>

        {/* Tercera fila - Input de hora */}
        <input
          type="time"
          placeholder="*Hora*"
          className="w-full bg-transparent border border-[#C9A961]/40 px-6 py-4 text-white placeholder-gray-400 focus:border-[#C9A961] focus:outline-none transition-colors"
        />

        {/* Botón enviar */}
        <div className="flex justify-center pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="border border-[#C9A961] text-[#C9A961] px-12 py-3 tracking-[0.3em] text-sm font-light hover:bg-[#C9A961] hover:text-black transition-all duration-300"
          >
            ENVIAR
          </motion.button>
        </div>
      </motion.form>

      {/* Lado derecho: Mapa e Información */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="space-y-8"
      >
        {/* Mapa */}
        <div className="w-full h-64 rounded-lg overflow-hidden border border-[#C9A961]/40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274289045095!2d2.3927841!3d41.5043397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3b7c3e3e3%3A0x0!2zNDHCsDMwJzE1LjYiTiAywrAyMyczNC4wIkU!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Información de contacto */}
        <div className="bg-black/40 backdrop-blur-sm border border-[#C9A961]/30 rounded-lg p-8 space-y-6">
          
          {/* Título */}
          <div className="text-center mb-6">
            <p className="text-[#C9A961] text-sm tracking-[0.3em] font-light mb-2 italic">
              Restaurante Narela
            </p>
            <h3 className="text-2xl font-bold text-[#C9A961] tracking-wider">
              TROBA'NS
            </h3>
          </div>

          {/* Dirección */}
          <div className="space-y-2">
            <h4 className="text-[#C9A961] font-semibold tracking-wider uppercase text-sm">
              Dirección
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Carrer Sant Anreu, 24, 08340 Vilassar de Mar, Barcelona
            </p>
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <h4 className="text-[#C9A961] font-semibold tracking-wider uppercase text-sm">
              Teléfono
            </h4>
            <a 
              href="tel:+34600700102" 
              className="text-gray-300 text-sm hover:text-[#C9A961] transition-colors"
            >
              (+34) 600 70 01 02
            </a>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <h4 className="text-[#C9A961] font-semibold tracking-wider uppercase text-sm">
              Email
            </h4>
            <a 
              href="mailto:restaurantnarela@gmail.com" 
              className="text-gray-300 text-sm hover:text-[#C9A961] transition-colors"
            >
              restaurantnarela@gmail.com
            </a>
          </div>

        </div>
      </motion.div>

    </div>
  </motion.div>
</section>
  );
}

export default Reservar;