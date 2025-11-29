// src/components/AlarmasMonitoreadas/BeneficiosGrid.jsx
import { motion } from 'framer-motion';

const beneficios = [
  { title: 'Monitoreo Real', icon: '', desc: 'Supervisión constante por operadores certificados desde nuestra central.' },
  { title: 'Alertas App', icon: '', desc: 'Notificaciones instantáneas a tu celular ante cualquier evento.' },
  { title: 'Respuesta Rápida', icon: '', desc: 'Protocolo de acción inmediata con autoridades y serenazgo.' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BeneficiosGrid() {
  return (
    <section id="beneficios" className="max-w-7xl mx-auto px-6 py-20 bg-[#FFFFFF]">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-16"
      >
        Tranquilidad <span className="text-[#FFC600]">Absoluta</span>
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3">
        {beneficios.map((beneficio, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.2 }}
            className="p-8 bg-white rounded-xl shadow-2xl relative overflow-hidden group hover:shadow-3xl transition duration-300"
          >
            {/* Borde Superior Dorado */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#FFC600]"></div>
            
            <span className="text-4xl block mb-4 filter drop-shadow-md">{beneficio.icon}</span>
            <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#FFC600] transition duration-300">{beneficio.title}</h3>
            <p className="mt-3 text-lg text-[#1A1A1A]">{beneficio.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}