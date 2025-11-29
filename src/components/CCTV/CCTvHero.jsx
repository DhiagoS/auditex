// src/components/CCTV/CCTvHero.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export default function CCTvHero({ openModal }) {
    return (
        <section className="relative pt-24 pb-32 px-6 bg-[#FFFFFF] overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                <motion.div 
                    initial="initial" 
                    animate="animate" 
                    variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1A1A1A]">
                        Videovigilancia <span className="text-[#FFC600]">Inteligente</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mt-6 text-xl text-[#1A1A1A] max-w-xl font-light">
                        Supervisa tu propiedad desde cualquier lugar. Cámaras 4K, visión nocturna a color y alertas en tiempo real a tu celular.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="mt-10">
                        <button
                            onClick={openModal} // Llama a la Modal de Cotización
                            className="px-8 py-3 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-bold text-lg shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.02]"
                        >
                            Solicitar Asesoría
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ x: 50, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }} 
                    className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                >
                                        <Image 
                        src="/placeholder-cctv-hero.png" 
                        alt="Sistema CCTV Profesional" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}