// components/Home/HomeTrust.jsx
'use client'; 
import { motion } from 'framer-motion';

const stats = [
    { value: '+1,200', label: 'Inspecciones hechas' },
    { value: '98%', label: 'Satisfacción del Cliente', accent: true },
    { value: '+200', label: 'Empresas atendidas' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomeTrust() {
    return (
        <section id="trust" className="max-w-7xl mx-auto px-6 py-20">
            <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-[#0B2747] text-center"
            >
                Resultados que Generan <span className='text-[#FFB700]'>Confianza</span>
            </motion.h3>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-center text-lg mb-12">
                Nuestros números reflejan el compromiso con la calidad y la excelencia en el servicio.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index}
                        variants={cardVariants} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ delay: index * 0.15 }} // Animación secuencial
                        className={`p-8 bg-white rounded-xl shadow-xl text-center border ${stat.accent ? 'border-[#FFB700] bg-[#FFB700]/5' : 'border-gray-200'}`}
                    >
                        <div className={`text-4xl font-extrabold ${stat.accent ? 'text-[#FFB700]' : 'text-[#0B2747]'}`}>{stat.value}</div>
                        <div className="text-base text-gray-600 mt-2">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Aquí se pueden añadir logos de clientes si los tienes */}
            <div className='mt-16 text-center text-gray-500 text-sm'>
                <p>Nuestra experiencia abarca más de 10 industrias y sectores.</p>
            </div>
        </section>
    );
}