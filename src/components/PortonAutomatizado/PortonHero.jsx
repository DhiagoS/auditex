// src/components/PortonAutomatizado/PortonHero.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export default function PortonHero({ openModal }) {
    return (
        <section className="relative pt-24 pb-32 px-6 bg-[#FFFFFF] overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                <motion.div 
                    initial="initial" 
                    animate="animate" 
                    variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1A1A1A]">
                        Portones Automatizados <span className="text-[#FFC600]">Velocidad y Confort</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mt-6 text-xl text-[#1A1A1A] max-w-xl font-light">
                        Llega a casa seguro. Motores de alto rendimiento, apertura rápida y tecnología anti-clonación para tu tranquilidad.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="mt-10">
                        <button
                            onClick={openModal}
                            className="px-8 py-3 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-bold text-lg shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.02]"
                        >
                            Cotizar Motor
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
                        src="/placeholder-porton-hero.png" 
                        alt="Portón Automático Residencial" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}