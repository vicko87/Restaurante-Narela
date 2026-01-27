import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="sobre-nosotros" className="bg-[#1a1f2e] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Contenedor principal con grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
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
                <span className="font-serif italic">Qui Som</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              En Narela, ens enorgulleix oferir una experiència culinària on la qualitat 
              dels ingredients és insuperable. Cada ingredient es selecciona amb cura per 
              a oferir-te no sols menjar excepcional, sinó una experiència gastronòmica 
              que delecta els teus sentits i crea records duradors.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-b-2 border-[#FF6347] text-[#FF6347] pb-2 tracking-[0.2em] text-sm font-light hover:text-white hover:border-white transition-colors"
            >
              CONEIX-NOS
            </motion.button>
          </motion.div>
        </div>

        {/* Sección de características - Diseño elegante */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Característica 1 */}
          <div className="bg-[#0f1419] p-8 rounded-lg border border-gray-800 hover:border-[#FF6347]/50 transition-all duration-300">
            <div className="w-12 h-12 bg-[#FF6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#FF6347]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Qualitat Premium</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ingredients frescos seleccionats diàriament dels millors proveïdors locals
            </p>
          </div>

          {/* Característica 2 */}
          <div className="bg-[#0f1419] p-8 rounded-lg border border-gray-800 hover:border-[#FF6347]/50 transition-all duration-300">
            <div className="w-12 h-12 bg-[#FF6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#FF6347]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Xefs Experts</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Equip culinari amb més de 20 anys d'experiència en alta gastronomia
            </p>
          </div>

          {/* Característica 3 */}
          <div className="bg-[#0f1419] p-8 rounded-lg border border-gray-800 hover:border-[#FF6347]/50 transition-all duration-300">
            <div className="w-12 h-12 bg-[#FF6347]/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#FF6347]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Ambient Únic</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Un espai elegant i acollidor dissenyat per a crear moments inoblidables
            </p>
          </div>
        </motion.div>

        {/* Estadísticas elegantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#0f1419] to-[#1a1f2e] p-12 rounded-lg border border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-[#FF6347]">15+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Anys d'experiència</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-[#FF6347]">50+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Plats únics</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-[#FF6347]">10k+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Clients feliços</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-[#FF6347]">★★★★★</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Valoració mitjana</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;