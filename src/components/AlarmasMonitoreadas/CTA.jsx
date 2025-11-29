// src/components/AlarmasMonitoreadas/CTA.jsx
import { motion } from 'framer-motion';

export default function AlarmasCTA({ openModal }) {
  return (
    // Fondo Negro Elegante
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Protege lo que más importa <span className='text-[#FFC600]'>hoy mismo</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/90 text-xl"
        >
          Deja la seguridad de tu hogar o negocio en manos de expertos.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
        >
          <button
            onClick={openModal} 
            className="px-12 py-4 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-extrabold text-xl shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.05]"
          >
            Solicitar Instalación
          </button>
        </motion.div>
      </div>
    </section>
  );
}