import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-white h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Bienvenido a Narela 🍽️</h1>
      <p className="text-xl md:text-2xl mb-8">El sabor que siempre recordarás</p>
      <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-white text-lg font-semibold transition transform hover:scale-105">
        Reservar Ahora
      </button>
    </motion.section>
  );
}

export default Hero;

