// src/components/CercoElectrico/CercoProceso.jsx
import { motion } from 'framer-motion';

const pasos = [
  { n: '01', t: 'Visita Técnica', d: 'Medimos el perímetro y evaluamos los puntos vulnerables de la propiedad.' },
  { n: '02', t: 'Instalación', d: 'Fijación de postes, tendido de líneas y conexión eléctrica bajo norma.' },
  { n: '03', t: 'Puesta en Marcha', d: 'Pruebas de voltaje, activación de alarma y capacitación de uso.' },
];

export default function CercoProceso() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-16">Instalación en 3 Pasos</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {pasos.map((paso, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 mx-auto bg-[#FFC600] rounded-full flex items-center justify-center text-3xl font-bold text-[#1A1A1A] mb-6 shadow-lg">
                {paso.n}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{paso.t}</h3>
              <p className="text-[#1A1A1A]/80">{paso.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}