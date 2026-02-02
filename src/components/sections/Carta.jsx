import { useState } from 'react';
import { motion } from 'framer-motion';

function Carta() {
  const [selectedLanguage, setSelectedLanguage] = useState('español');

  return (
    <section 
      id="carta" 
      className="relative min-h-screen flex flex-col items-center justify-center py-32 px-8"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/85"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-20">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[#C9A961] text-xs tracking-[0.6em] font-light italic uppercase">
            nuestra carta
          </p>
          <h2 className="text-8xl md:text-9xl font-serif italic text-[#C9A961] tracking-wider leading-none">
            Carta
          </h2>
        </motion.div>

        {/* Botones de idioma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-10"
        >
          {/* Botón Catalán */}
          <motion.button
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLanguage('català')}
            className={`border-2 ${
              selectedLanguage === 'català' 
                ? 'border-[#C9A961] bg-[#C9A961]/20 text-[#C9A961] shadow-2xl shadow-[#C9A961]/50' 
                : 'border-[#C9A961]/50 text-gray-300'
            } px-20 py-6 tracking-[0.4em] text-xs font-light uppercase backdrop-blur-sm hover:bg-[#C9A961]/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300`}
          >
            Català
          </motion.button>

          {/* Botón Español */}
          <motion.button
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedLanguage('español')}
            className={`border-2 ${
              selectedLanguage === 'español' 
                ? 'border-[#C9A961] bg-[#C9A961]/20 text-[#C9A961] shadow-2xl shadow-[#C9A961]/50' 
                : 'border-[#C9A961]/50 text-gray-300'
            } px-20 py-6 tracking-[0.4em] text-xs font-light uppercase backdrop-blur-sm hover:bg-[#C9A961]/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300`}
          >
            Español
          </motion.button>
        </motion.div>

        {/* Botón Carta de Vinos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#C9A961]/60 text-[#C9A961] px-24 py-6 tracking-[0.5em] text-xs font-light uppercase backdrop-blur-sm hover:bg-[#C9A961]/20 hover:border-[#C9A961] hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300"
          >
            Carta de Vins
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default Carta;