import  { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function About() {
  const reservaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: reservaRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);

  return (
    <>
      <section id="sobre-nosotros" className="bg-[#1a1f2e] text-white">
        <div className='py-32 px-8'>
          <div className="max-w-7xl mx-auto">
            
            {/* Contenedor principal con grid */}
            <div className="flex flex-col lg:flex-row gap-40 items-center">
              
              {/* Lado izquierdo - Imágenes */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500" 
                    alt="Plato gourmet"
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                </div>
                <div className="pt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500" 
                    alt="Restaurante interior"
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Lado derecho - Texto */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-[#FF6347] text-sm tracking-[0.3em] font-light mb-4">
                    UNA EXPERIENCIA
                  </p>
                  <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                    <span className="font-serif italic">Quiénes Somos</span>
                  </h2>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  En Narela, nos enorgullece ofrecer una experiencia culinaria donde la calidad 
                  de los ingredientes es insuperable. Cada ingrediente se selecciona con cuidado 
                  para ofrecerte no solo comida excepcional, sino una experiencia gastronómica 
                  que deleita tus sentidos y crea recuerdos duraderos.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-b-2 border-[#FF6347] text-[#FF6347] pb-2 tracking-[0.2em] text-sm font-light hover:text-white hover:border-white transition-colors"
                >
                  CONÓCENOS
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
          className="relative z-20 max-w-5xl mx-auto px-8 py-20"
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] text-[#C9A961]"
            >
              <span className="text-white">{'><'}</span>RESERVAR MESA<span className="text-white">{'><'}</span>
            </motion.h2>
          </div>

          {/* Formulario */}
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Primera fila - 4 inputs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

            {/* Segunda fila - Input de hora */}
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
        </motion.div>
      </section>
    </>
  );
}

export default About;