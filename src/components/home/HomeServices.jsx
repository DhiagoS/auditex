// src/components/Home/HomeServices.jsx (Versión Final Coherente)
import Link from 'next/link';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomeServices() {
    return (
        // Fondo Blanco (#FFFFFF) para continuidad con el Hero
        <section id="services" className="max-w-7xl mx-auto px-6 pt-32 pb-20 bg-white">
            <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-[#1A1A1A] text-center" 
            >
                Soluciones de Control y 
                {/* 🚨 CAMBIO: Color sólido #FFC600 para coincidir con el botón del Hero */}
                <span className="text-[#FFC600]"> Seguridad</span>
            </motion.h3>
            <p className="text-[#1A1A1A] mt-3 max-w-2xl mx-auto text-center text-xl">
                Nuestros servicios son la base de la toma de decisiones informada en tu industria.
            </p>

            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
                
                {/* Mapeo de Tarjetas */}
                {[0, 1, 2].map((index) => (
                    <motion.article 
                        key={index}
                        variants={cardVariants} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-8 bg-white rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300 relative overflow-hidden" 
                    >
                        {/* 🚨 CAMBIO: Borde superior sólido #FFC600 */}
                        <div 
                            className="absolute top-0 left-0 right-0 h-2 bg-[#FFC600]" 
                        ></div>
                        
                        <h4 className="text-2xl font-bold text-[#1A1A1A] mt-2">
                            {index === 0 ? 'Inspección Técnica' : index === 1 ? 'Auditoría y Certificación' : 'Capacitación y Soporte'}
                        </h4>
                        <p className="mt-3 text-lg text-[#1A1A1A]">
                            {index === 0 ? 'Inspecciones con reportes detallados, fotos geolocalizadas y total trazabilidad.' : 
                             index === 1 ? 'Evaluaciones para cumplimiento normativo, procesos de calidad y certificaciones industriales.' : 
                             'Cursos técnicos especializados y soporte post-servicio para mantener la calidad operativa.'}
                        </p>
                        <ul className="mt-6 text-base text-[#1A1A1A] space-y-3">
                            <li className="flex items-center gap-3">
                                {/* 🚨 CAMBIO: Icono sólido #FFC600 */}
                                <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                                {index === 0 ? 'Resultados en 24 horas' : index === 1 ? 'Estándares internacionales' : 'Instructores expertos'}
                            </li>
                            <li className="flex items-center gap-3">
                                {/* 🚨 CAMBIO: Icono sólido #FFC600 */}
                                <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                                {index === 0 ? 'Personal certificado' : index === 1 ? 'Procesos optimizados' : 'Actualizaciones constantes'}
                            </li>
                        </ul>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}