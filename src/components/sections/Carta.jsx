import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Carta() {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showWines, setShowWines] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowMenu(true);
    setShowWines(false);
  };

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
      <div className="absolute inset-0 bg-black/85"></div>

      <AnimatePresence mode="wait">
        {!showMenu && !showWines ? (
          // Vista de selección
          <motion.div
            key="selector"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 max-w-6xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mb-12"
              style={{ marginBottom: '3rem' }} // Increase spacing between title and photos
            >
              <p className="text-[#C9A961] text-xs tracking-[0.6em] font-light italic uppercase">
                {t('carta.subtitle')}
              </p>
              <h2 className="text-8xl md:text-9xl font-serif italic text-[#C9A961] tracking-wider leading-none">
                Carta
              </h2>
            </motion.div>
            <motion.div className="h-12" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-row justify-center items-center gap-8 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeLanguage('ca')}
                className="border-2 border-[#C9A961]/50 text-gray-300 px-24 py-10 tracking-[0.4em] text-base font-light uppercase backdrop-blur-sm hover:bg-[#C9A961]/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 min-w-[240px]"
              >
                Català
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeLanguage('es')}
                className="border-2 border-[#C9A961]/50 text-gray-300 px-24 py-10 tracking-[0.4em] text-base font-light uppercase backdrop-blur-sm hover:bg-[#C9A961]/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 min-w-[240px]"
              >
                Español
              </motion.button>
            </motion.div>

            <motion.div className="h-16" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowWines(true)}
                className="border-2 border-[#C9A961]/50 text-gray-300 px-24 py-10 tracking-[0.4em] text-base font-light uppercase backdrop-blur-sm hover:bg-[#C9A961]/20 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300 min-w-[240px]"
              >
                Carta Vins
              </motion.button>
            </motion.div>
          </motion.div>
        ) : showWines ? (
          // Vista de Carta de Vinos
          <motion.div
            key="wines"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-3xl mx-auto"
          >
           
            <div className="bg-white rounded-lg shadow-2xl border border-[#C9A961]/20 p-12">
              {/* Header */}
              <div className="border-b border-[#C9A961]/20 pb-6 mb-10">
                <button
                  onClick={() => setShowWines(false)}
                  className="text-[#C9A961] hover:text-[#FF6347] flex items-center gap-2 text-base transition-colors mb-6"
                >
                  ← Volver
                </button>

                <h2 className="text-4xl font-serif italic text-center text-[#C9A961] tracking-wide">
                  Carta de Vins
                </h2>
              </div>

              {/* Contenido con padding interno */}
              <div className="space-y-8 max-h-[50vh] overflow-y-auto pr-4">
                
                {/* Vinos Blancos */}
                <section>
                  <h3 className="text-xl font-serif text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    Vinos Blancos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Albariño</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">18,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Verdejo</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">16,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Chardonnay</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">20,00 €</span>
                    </div>
                  </div>
                </section>

                {/* Vinos Tintos */}
                <section>
                  <h3 className="text-xl font-serif text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    Vinos Tintos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Rioja Crianza</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">22,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Ribera del Duero</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">24,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Priorat</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">28,00 €</span>
                    </div>
                  </div>
                </section>

                {/* Vinos Rosados */}
                <section>
                  <h3 className="text-xl font-serif text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    Vinos Rosados
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[200px]">Rosado de Navarra</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">15,00 €</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </motion.div>
        ) : (
          // Vista del menú de comida
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-4xl mx-auto"
          >
            {/* 🔧 CAMBIO PRINCIPAL: p-12 para padding uniforme en los 4 lados */}
            <div className="bg-white rounded-lg shadow-2xl border border-[#C9A961]/20 p-12">
              {/* Header - sin padding extra, usa el del contenedor */}
              <div className="border-b border-[#C9A961]/20 pb-4 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setShowWines(false);
                    }}
                    className="text-[#C9A961] hover:text-[#FF6347] flex items-center gap-2 text-base transition-colors"
                  >
                    ← {t('carta.back')}
                  </button>
                  
                  {/* Selector de idioma */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => i18n.changeLanguage('ca')}
                      className={`px-3 py-1 text-xs tracking-widest uppercase transition-colors ${
                        i18n.language === 'ca' 
                          ? 'text-[#C9A961] font-bold border-b-2 border-[#C9A961]' 
                          : 'text-gray-400 hover:text-[#C9A961]'
                      }`}
                    >
                      Català
                    </button>
                    <button
                      onClick={() => i18n.changeLanguage('es')}
                      className={`px-3 py-1 text-xs tracking-widest uppercase transition-colors ${
                        i18n.language === 'es' 
                          ? 'text-[#C9A961] font-bold border-b-2 border-[#C9A961]' 
                          : 'text-gray-400 hover:text-[#C9A961]'
                      }`}
                    >
                      Español
                    </button>
                  </div>
                </div>

                <h2 className="text-4xl font-serif italic text-center text-[#C9A961] tracking-wide">
                  Narela
                </h2>
              </div>

     
              <div className="space-y-6 max-h-[55vh] overflow-y-auto pr-4">
                
                {/* Entrantes */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.entrantes')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.panCoca')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">3,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.jamon')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">16,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.queso')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">14,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.croquetas')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">1,90 € unidad</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.gambas')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">9,50 €</span>
                    </div>
                  </div>
                </section>

                {/* Ensaladas */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.ensaladas')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.ensaladaNarela')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">11,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.burrata')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">12,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.cesar')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">10,50 €</span>
                    </div>
                  </div>
                </section>

                {/* Carnes */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.carnes')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.solomillo')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">26,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.pollo')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">16,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.entrecot')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">24,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.secreto')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">18,50 €</span>
                    </div>
                  </div>
                </section>

                {/* Mariscos */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.mariscos')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.pulpo')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">22,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.polpoBrasa')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">22,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.calamares')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">15,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.mejillones')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">13,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.langostinos')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">14,50 €</span>
                    </div>
                  </div>
                </section>

                {/* Pescados */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.pescados')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.dorada')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">23,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.lubina')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">24,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.salmón')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">19,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.bacalao')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">17,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.atún')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">13,50 €</span>
                    </div>
                  </div>
                </section>

                {/* Paellas */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.paella')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.paellaMariscos')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">22,00 €/pers</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.paellaMixta')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">20,00 €/pers</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.paellaVegetariana')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">16,00 €/pers</span>
                    </div>
                  </div>
                </section>

                {/* Postres */}
                <section>
                  <h3 className="text-xl uppercase tracking-wider font-light text-[#C9A961] mb-4 pb-2 border-b border-[#C9A961]/30">
                    {t('carta.postres')}
                  </h3>
                  <div className="space-y-2.5">
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.cremaCatalana')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">6,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.tartaQueso')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">7,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.brownie')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">7,50 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.helado')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">5,00 €</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-sm italic flex-shrink-0 min-w-[280px]">{t('carta.frutaTemporada')}</span>
                      <span className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></span>
                      <span className="text-[#C9A961] font-normal text-base flex-shrink-0">5,50 €</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Carta;