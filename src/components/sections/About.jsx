import  { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function About() {
  return (
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
  );
}

export default About;