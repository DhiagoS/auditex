// src/components/PortonAutomatizado/PortonTipos.jsx
import { motion } from 'framer-motion';

const tipos = [
    { title: 'Corredizos', desc: 'Ideales para grandes aperturas, utilizan motores de piñón y cremallera de alto torque.' },
    { title: 'Batientes', desc: 'Perfectos para espacios limitados, usan brazos electromecánicos o hidráulicos discretos.' },
    { title: 'Levadizos', desc: 'Comunes en garajes, se deslizan verticalmente, minimizando el espacio requerido.' },
];

export default function PortonTipos() {
    return (
        <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Modelos Compatibles</h2>
                    <p className="mt-2 text-[#1A1A1A]/80">Automatizamos cualquier tipo de acceso vehicular existente.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {tipos.map((tipo, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:border-[#FFC600] transition duration-300"
                        >
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{tipo.title}</h3>
                            <p className="text-[#1A1A1A]/80">{tipo.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}