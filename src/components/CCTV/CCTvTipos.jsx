// src/components/CCTV/CCTvTipos.jsx
import { motion } from 'framer-motion';

const tipos = [
    { title: 'Cámaras Bullet', desc: 'Diseño robusto y visible para exteriores. Alta disuasión.' },
    { title: 'Cámaras Domo', desc: 'Discretas y estéticas, ideales para interiores y oficinas.' },
    { title: 'Cámaras PTZ', desc: 'Movimiento 360° y zoom potente para grandes áreas.' },
    { title: 'Cámaras IP', desc: 'Alta resolución y conexión directa a la red de datos.' },
];

export default function CCTvTipos() {
    return (
        <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Soluciones para cada Espacio</h2>
                    <p className="mt-2 text-[#1A1A1A]/80">Adaptamos el equipo según la necesidad de seguridad de tu entorno.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {tipos.map((tipo, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#FFC600] transition duration-300"
                        >
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{tipo.title}</h3>
                            <p className="text-[#1A1A1A]/80 text-sm">{tipo.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}