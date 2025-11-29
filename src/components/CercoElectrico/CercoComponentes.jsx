// src/components/CercoElectrico/CercoComponentes.jsx
import { motion } from 'framer-motion';

const materiales = [
    'Energizador Certificado (Alta Potencia)',
    'Postes de Fierro Galvanizado o Aluminio',
    'Aisladores UV de Alta Resistencia',
    'Alambre de Acero ACERADO',
    'Sirena de 30 Watts con Gabinete',
    'Batería de Respaldo 12V 4Ah/7Ah',
    'Letreros de Advertencia "Peligro"'
];

export default function CercoComponentes() {
    return (
        <section className="bg-gray-50 py-24 border-y border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-[#1A1A1A]">Kit de Instalación Profesional</h2>
                    <p className="mt-2 text-[#1A1A1A]/80">Utilizamos materiales que cumplen con la normativa IEC para garantizar seguridad y durabilidad.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {materiales.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#FFC600] transition duration-300"
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