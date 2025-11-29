// src/components/CercoElectrico/CTA.jsx
import { motion } from 'framer-motion';

export default function CercoCTA({ openModal }) {
  return (
    // 🚨 CAMBIO: Fondo Negro Profundo (#111111) para máximo contraste y seriedad
    <section className="py-24 bg-[#111111]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white"
        >
          ¿Listo para blindar tu perímetro?
        </motion.h2>
        <p className="mt-6 text-white/90 text-xl">
          Solicita hoy una visita técnica gratuita y protege lo que es tuyo.
        </p>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
        >
          <button
            onClick={openModal} 
            // Botón: Amarillo (#FFC600) con Texto Negro (#000000) para máxima legibilidad
            className="px-12 py-4 rounded-xl bg-[#FFC600] text-black font-extrabold text-xl shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.05]"
          >
            Solicitar Presupuesto
          </button>
        </motion.div>
      </div>
    </section>
  );
}