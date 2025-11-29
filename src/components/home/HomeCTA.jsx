// components/Home/HomeCTA.jsx
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomeCTA() {
  return (
    // Fondo: Negro Elegante (#1A1A1A) para máximo contraste
    <section id="contact" className="bg-[#1A1A1A] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h3 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl font-extrabold text-white leading-snug"
        >
          ¿Desea una auditoría y control <span className="text-[#FFC600]">sin compromiso</span>?
        </motion.h3>
        
        <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white/80 mt-4 text-xl"
        >
          Hable con nuestro equipo para un análisis de riesgo y una propuesta a medida.
        </motion.p>
        
        <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          {/* Botón Principal: Fondo Amarillo Dorado (#FFC600), Texto Negro Elegante */}
          <Link 
            className="px-10 py-4 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-bold text-xl shadow-2xl hover:bg-[#FCDA00] transition duration-300" 
            href="mailto:info@auditek.com.pe"
          >
            Enviar Solicitud
          </Link>
          
          {/* Botón Secundario: Borde Blanco para Máximo Contraste */}
          <a 
            className="px-10 py-4 rounded-xl border-2 border-white text-white font-medium text-xl hover:bg-white/10 transition duration-300 flex items-center gap-2" 
            href="tel:+51900000000"
          >
            Llamar Ahora 
          </a>
        </motion.div>
      </div>
    </section>
  );
}