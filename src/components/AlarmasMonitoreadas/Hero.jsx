// src/components/AlarmasMonitoreadas/Hero.jsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export default function AlarmasHero({ openModal }) {
    return (
        <section className="relative pt-24 pb-32 px-6 bg-[#FFFFFF] overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                {/* Texto y Animaciones */}
                <motion.div 
                    initial="initial" 
                    animate="animate" 
                    variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1A1A1A]">
                        Alarmas Monitoreadas <span className="text-[#FFC600]">24/7</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mt-6 text-xl text-[#1A1A1A] max-w-xl font-light">
                        Protección inteligente con monitoreo en tiempo real. Respuesta inmediata ante cualquier emergencia con tecnología de punta.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="mt-10 flex gap-4">
                        {/* Botón Principal: Amarillo Dorado Sólido */}
                        <button
                            onClick={openModal}
                            className="px-8 py-3 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-bold text-lg shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.02]"
                        >
                            Solicitar Cotización
                        </button>
                        {/* Botón Secundario: Borde Negro */}
                        <Link
                            href="#beneficios"
                            className="px-8 py-3 rounded-xl border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-lg hover:bg-gray-100 transition duration-300"
                        >
                            Ver Beneficios
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Imagen */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl"
                >
                    

[Image of a security system diagram]

                    <Image
                        src="/placeholder-alarmas-hero.png"
                        alt="Sistema de alarmas monitoreadas"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}