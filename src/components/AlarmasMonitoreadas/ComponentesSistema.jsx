// src/components/AlarmasMonitoreadas/ComponentesSistema.jsx
import { motion } from 'framer-motion';

const equipo = [
    'Panel de Alarma Inteligente',
    'Sensores de Movimiento (PIR)',
    'Contactos Magnéticos para Puertas',
    'Sirena de Alta Potencia',
    'Batería de Respaldo',
    'Placa Disuasiva Exterior'
];

export default function ComponentesSistema() {
    return (
        <section className="bg-gray-50 py-20 border-y border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Equipamiento Incluido</h2>
                    <p className="mt-2 text-[#1A1A1A]/80">Tecnología inalámbrica de fácil instalación y alta seguridad.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {equipo.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                        >
                            {/* Check Dorado */}
                            <span className="text-[#FFC600] text-xl font-bold">✔</span>
                            <span className="text-lg text-[#1A1A1A] font-medium">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}