import { motion } from 'framer-motion';

const testimonios = [
  { nombre: 'Carlos M.', texto: 'La respuesta fue inmediata cuando se activó la alarma por error. Me siento mucho más seguro.', rol: 'Cliente Hogar' },
  { nombre: 'Empresa Logística S.A.', texto: 'Auditek nos brindó la solución exacta para nuestros almacenes. El monitoreo es impecable.', rol: 'Cliente Corporativo' },
  { nombre: 'Ana María G.', texto: 'La instalación fue limpia y rápida. La app móvil es muy fácil de usar para activar la alarma.', rol: 'Cliente Residencial' },
];

export default function Testimonios() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-12"
        >
          Lo que dicen nuestros <span className="text-[#FFC600]">clientes</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#FFC600]"
            >
              <div className="text-[#FFC600] text-4xl mb-4">★★★★★</div>
              <p className="text-[#1A1A1A] italic mb-6">"{item.texto}"</p>
              <div>
                <h4 className="font-bold text-[#1A1A1A]">{item.nombre}</h4>
                <span className="text-sm text-[#1A1A1A]/60">{item.rol}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}