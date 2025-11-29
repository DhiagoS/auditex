'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const preguntas = [
  { q: "¿Qué pasa si se corta la luz o el internet?", a: "El sistema cuenta con una batería de respaldo de larga duración y comunicación vía chip GPRS (celular), por lo que sigue conectado a nuestra central sin problemas." },
  { q: "¿Puedo controlar la alarma desde mi celular?", a: "Sí, todos nuestros planes incluyen una App móvil gratuita desde donde puedes armar, desarmar y ver el estado de tu alarma en tiempo real." },
  { q: "¿Cuánto tardan en instalar el sistema?", a: "Una instalación residencial estándar se realiza en menos de 24 horas, dejando el sistema 100% operativo y probado el mismo día." },
  { q: "¿El equipo es alquilado o comprado?", a: "Ofrecemos ambas modalidades. Puedes comprar el equipo y pagar solo el monitoreo, o acceder a un plan de comodato (alquiler) con menor costo inicial." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12"
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="space-y-4">
          {preguntas.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#1A1A1A]/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-[#FFC600]' : 'text-[#1A1A1A]'}`}>
                  {item.q}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-[#FFC600]' : 'text-[#1A1A1A]'}`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 text-[#1A1A1A]/80 bg-gray-50 border-t border-gray-100">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}