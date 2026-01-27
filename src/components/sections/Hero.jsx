import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-black text-white h-screen flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Contenido */}
      <div className="relative z-10">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          Bienvenido a <span className="text-[#FF6347]">Narela</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-200 font-light"
        >
          El sabor que siempre recordarás
        </motion.p>
      </div>

      {/* Indicador de scroll animado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 cursor-pointer"
        onClick={() => {
          document.getElementById('sobre-nosotros')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;