import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Gallery() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeCategory] = useState('Todos');

  // Platos con imágenes reales
  const menuDishes = [
    // ENTRANTES
    {
      id: 1,
      name: 'Tabla de quesos variados',
      category: 'Entrantes',
      price: '14.50€',
      image: '/images/quesos.jpg',
      description: 'Variedad de quesos artesanales con acompañamientos',
     
    },
{
  id: 2,
  name: 'Croquetas caseras',
  category: 'Entrantes',
  price: '1.90€',
  image: '/images/croqueta.jpg',
  description: 'Croquetas artesanales de jamón, pollo o espinacas',
  ingredients: 'Bechamel casera, jamón ibérico/pollo/espinacas',
},
    {
  id: 13,
  name: 'Ensalada César',
  category: 'Entrantes',
  price: '10.50€',
  image: '/images/cesar.jpg',
  description: 'Ensalada César clásica con pollo, parmesano y crutones crujientes',
  ingredients: 'Lechuga romana, pollo a la parrilla, parmesano, salsa césar, crutones',
},

    // MARISCOS
     {
  id: 4,
  name: 'Pulpo a la Gallega',
  category: 'Entrantes',
  price: '22,00€',
  image: '/images/Pulpo.jpg',
  description: 'Pulpo cocido con pimentón de la Vera y aceite de oliva',
  ingredients: 'Pulpo gallego, pimentón, patatas, aceite',
},
    {
  id: 5,
  name: 'Calamares a la Romana',
  category: 'Entrantes',
  price: '15,50€',
  image: '/images/calamares.jpg',
  description: 'Calamares frescos rebozados y fritos al momento con limón',
  ingredients: 'Calamar fresco, harina, limón, aceite de oliva',
},
{
  id: 6,
  name: 'Mejillones al Vapor',
  category: 'Entrantes',
  price: '13,50€',
  image: '/images/mejillones.jpg',
  description: 'Frescos mejillones gallegos al vapor con vino blanco',
  ingredients: 'Mejillones gallegos, vino blanco, ajo, perejil',
},

    // Pescado
 {
  id: 7,
  name: 'Salmón a la Plancha con Salsa de Limón',
  category: 'Pescados',
  price: '19,00€',
  image:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800',
  description: 'Salmón fresco a la plancha con salsa de limón y hierbas aromáticas',
  ingredients: 'Salmón noruego, limón, mantequilla, eneldo, ajo',
},
   {
  id: 8,
  name: 'Solomillo de Ternera con Salsa de Champiñones',
  category: 'Carnes',
  price: '26€',
  image: '/images/solomillo.jpg',
  description: 'Solomillo de ternera a la parrilla con cremosa salsa de champiñones',
  ingredients: 'Solomillo de ternera, champiñones frescos, nata, vino blanco, ajo',
},
{
  id: 9,
  name: 'Secreto Ibérico',
  category: 'Carnes',
  price: '18,50€',
  image: '/images/secreto.jpg',
  description: 'Secreto ibérico a la parrilla con guarnición de patatas y pimientos',
  ingredients: 'Secreto ibérico, patatas, pimientos de padrón, sal Maldon',
},
    {
  id: 10,
  name: 'Paella de Marisco',
  category: 'Arroces',
  price: '22,00€',
  image: '/images/paella.jpg',
  description: 'Paella valenciana tradicional con mariscos frescos del Mediterráneo',
  ingredients: 'Arroz bomba, gambas, mejillones, almejas, calamar, azafrán, fumet',
},

    // Postres
{
  id: 11,
  name: 'Crema Catalana',
  category: 'Postres',
  price: '6,50€',
  image: '/images/crema.jpg',
  description: 'Crema catalana tradicional con azúcar caramelizado y canela',
  ingredients: 'Leche, yemas de huevo, azúcar, maicena, canela, limón',
},
  {
  id: 12,
  name: 'Brownie con Helado de Vainilla',
  category: 'Postres',
  price: '7,50€',
  image: '/images/brownie.jpg',
  description: 'Brownie de chocolate caliente con helado de vainilla artesanal',
  ingredients: 'Chocolate negro, nueces, helado de vainilla, sirope de chocolate',
},

  ];



  const filteredDishes = activeCategory === 'Todos' 
    ? menuDishes 
    : menuDishes.filter(dish => dish.category === activeCategory);

  return (
    <section id="galeria" className="relative min-h-screen bg-[#0a0a0a] py-24 px-4 md:px-8 flex flex-col items-center justify-center">
      {/* Fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961] via-transparent to-[#C9A961]"></div>
      </div>

      {/* Contenedor centrado */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Header elegante */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center  mt-20 relative z-10  flex flex-col gap-6"
        >
          <p className="text-[#C9A961] text-xs tracking-[0.6em] font-light italic uppercase mb-4">
            Descubre
          </p>
          <h2 className="text-6xl md:text-8xl font-serif italic text-[#C9A961] tracking-wider mb-6">
            Nuestro Menú
          </h2>
          <div className="w-20 h-0.5 bg-[#C9A961] mx-auto"></div>
        </motion.div>

        {/* Grid con imágenes animadas tipo video */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedDish(dish)}
                className="group cursor-pointer w-full max-w-sm"
              >
                {/* Card con imagen real animada */}
       <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#C9A961]/20 rounded-2xl overflow-hidden hover:border-[#C9A961]/60 transition-all duration-300 shadow-lg hover:shadow-[#C9A961]/20 h-[520px] flex flex-col">
                  
                  {/* Imagen con efecto de video vivo */}
                  <div className="relative  h-80 overflow-hidden">
                    {/* Imagen con zoom continuo (efecto video) */}
                    <motion.img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />

                    {/* Overlay oscuro que pulsa */}
                    <motion.div
                      className="absolute inset-0 bg-black"
                      animate={{
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Brillo que se mueve (efecto vapor/calor) */}
                    <motion.div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(201, 169, 97, 0.6) 0%, transparent 70%)'
                      }}
                      animate={{
                        x: [-50, 50, -50],
                        y: [-30, 30, -30],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.3
                      }}
                    />

                    {/* Partículas flotantes (vapor) */}
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#C9A961] rounded-full"
                        style={{
                          left: `${30 + i * 20}%`,
                          bottom: '10%'
                        }}
                        animate={{
                          y: [0, -100, 0],
                          opacity: [0, 0.6, 0],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 1.2,
                          ease: "easeOut"
                        }}
                      />
                    ))}

                    {/* Badge de categoría flotante */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-3 left-3 px-3 py-1 rounded-full backdrop-blur-md bg-[#C9A961]/90 text-black text-xs font-bold tracking-wider z-10"
                    >
                      {dish.category}
                    </motion.div>

                    {/* Precio flotante con pulso */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-3 right-3 px-4 py-1.5 rounded-full backdrop-blur-md bg-black/80 border border-[#C9A961] text-[#C9A961] text-sm font-bold z-10"
                    >
                      {dish.price}
                    </motion.div>

                    {/* Emoji flotante */}
                    <motion.div
                      className="absolute bottom-3 right-3 text-4xl z-10"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {dish.icon}
                    </motion.div>
                  </div>

                  {/* Contenido inferior */}
               <div className="p-6 flex-1 flex flex-col justify-between">
                    {/* Nombre del plato */}
                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-[#C9A961] transition-colors">
                      {dish.name}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Botón ver más */}
                    <motion.div
                      className="flex items-center gap-2 text-[#C9A961] text-xs font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span>VER DETALLES</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Brillo sutil al hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#C9A961]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

    {/* Modal con imagen animada */}
<AnimatePresence>
  {selectedDish && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-xl"
      onClick={() => setSelectedDish(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200
        }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#C9A961]/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <motion.button
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSelectedDish(null)}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#C9A961] hover:bg-[#FFD700] transition-colors"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>

        <div className="grid md:grid-cols-5">
          {/* Imagen animada - izquierda */}
          <div className="md:col-span-2 relative overflow-hidden h-48 sm:h-64 md:min-h-[500px]">
            {/* Imagen con zoom continuo */}
            <motion.img
              src={selectedDish.image}
              alt={selectedDish.name}
              className="w-full h-full object-cover"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Overlay con gradiente */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Badge flotante */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 px-3 py-1 sm:px-5 sm:py-2 rounded-full backdrop-blur-xl bg-[#C9A961] text-black text-xs sm:text-sm font-bold tracking-wider shadow-lg z-10"
            >
              {selectedDish.category}
            </motion.div>
          </div>

          {/* Contenido - derecha */}
          <div className="md:col-span-3 p-4 sm:p-6 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block self-start px-4 py-2 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl text-2xl sm:text-4xl font-bold mb-3 sm:mb-6 bg-[#C9A961]/20 border-2 border-[#C9A961] text-[#C9A961]"
            >
              {selectedDish.price}
            </motion.div>

            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl font-serif italic text-white mb-2 sm:mb-4 leading-tight"
            >
              {selectedDish.name}
            </motion.h2>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-6"
            >
              {selectedDish.description}
            </motion.p>

            <div className="w-12 sm:w-16 h-0.5 bg-[#C9A961] mb-3 sm:mb-6"></div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-4 sm:mb-8"
            >
              <p className="text-gray-400 text-sm sm:text-base italic">
                {selectedDish.ingredients}
              </p>
            </motion.div>

            <motion.a
              href="#reservar"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-10 sm:py-5 rounded-full bg-[#C9A961] hover:bg-[#FFD700] text-black text-sm sm:text-lg font-bold tracking-wider uppercase shadow-2xl shadow-[#C9A961]/50 transition-all self-start"
              onClick={() => setSelectedDish(null)}
            >
                    <span>RESERVAR MESA</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;