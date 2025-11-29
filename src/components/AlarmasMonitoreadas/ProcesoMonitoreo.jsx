import { motion } from 'framer-motion';

const pasos = [
  { 
    numero: '01', 
    titulo: 'Detección', 
    desc: 'Los sensores de alta precisión detectan cualquier intrusión, humo o movimiento inusual en la propiedad.' 
  },
  { 
    numero: '02', 
    titulo: 'Señal a Central', 
    desc: 'El panel envía una alerta encriptada en milisegundos a nuestra Central de Monitoreo 24/7.' 
  },
  { 
    numero: '03', 
    titulo: 'Verificación y Acción', 
    desc: 'Un operador experto verifica la alerta y despacha inmediatamente a las fuerzas de seguridad (PNP/Serenazgo).' 
  },
];

export default function ProcesoMonitoreo() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#1A1A1A]">¿Cómo funciona?</h2>
          <p className="mt-4 text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto">
            Un protocolo de seguridad infalible en 3 pasos.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pasos.map((paso, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 border-2 border-[#1A1A1A]/5 rounded-2xl hover:border-[#FFC600] transition duration-300 group"
            >
              <span className="text-6xl font-black text-[#FFC600] opacity-20 group-hover:opacity-100 transition duration-300 absolute top-4 right-6">
                {paso.numero}
              </span>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mt-4 mb-3 relative z-10">
                {paso.titulo}
              </h3>
              <p className="text-[#1A1A1A]/80 relative z-10 leading-relaxed">
                {paso.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}