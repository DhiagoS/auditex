// components/Home/HomeHowItWorks.jsx
import { motion } from 'framer-motion';

const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const steps = [
    { 
        number: 1, 
        title: 'Planificación Estratégica', 
        description: 'Analizamos tus necesidades específicas y definimos el alcance de la intervención y los estándares a aplicar.',
        icon: '📝'
    },
    { 
        number: 2, 
        title: 'Ejecución Certificada', 
        description: 'Implementación del servicio con equipos de última generación y personal altamente capacitado bajo procedimientos ISO.',
        icon: '🔬'
    },
    { 
        number: 3, 
        title: 'Entrega de Resultados', 
        description: 'Generación de reportes claros y trazables con recomendaciones accionables y soporte post-servicio.',
        icon: '✅'
    },
];

export default function HomeHowItWorks() {
    return (
        <section id="how" className="bg-white py-20 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-[#0B2747] text-center"
                >
                    Nuestro Proceso Simplificado
                </motion.h3>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-center text-lg mb-12">
                    Trabajamos bajo una metodología probada que garantiza la precisión y la confianza en cada etapa.
                </p>

                <div className="mt-6 grid gap-10 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            variants={stepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ delay: index * 0.15 }} // Animación secuencial
                            className="p-8 bg-gray-50 rounded-xl shadow-lg border border-gray-200 transform hover:shadow-2xl transition duration-300"
                        >
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='text-3xl font-extrabold text-[#FFB700]'>{step.number}</span>
                                <h4 className="font-bold text-xl text-[#0B2747]">{step.title}</h4>
                            </div>
                            <p className="mt-2 text-sm text-gray-700">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}