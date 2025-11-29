// src/components/CercoElectrico/CercoHero.jsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export default function CercoHero({ openModal }) {
    return (
        <section className="relative pt-24 pb-32 px-6 bg-[#FFFFFF] overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                
                <motion.div 
                    initial="initial" 
                    animate="animate" 
                    variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                >
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1A1A1A]">
                        Cerco Eléctrico de <span className="text-[#FFC600]">Alto Voltaje</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mt-6 text-xl text-[#1A1A1A] max-w-xl font-light">
                        La barrera física y psicológica definitiva. Protección perimetral certificada, segura y legal para tu propiedad.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="mt-10 flex gap-4">
                        {/* Botón Principal: Dorado */}
                        <button
                            onClick={openModal}
                            className="px-8 py-3 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-bold text-lg shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.02]"
                        >
                            Cotizar Instalación
                        </button>
                        {/* Botón Secundario: Borde Negro */}
                        <Link
                            href="#beneficios"
                            className="px-8 py-3 rounded-xl border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-lg hover:bg-gray-100 transition duration-300"
                        >
                            Características
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Imagen */}
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                >
                    <Image
                        src="/placeholder-cerco-hero.jpg" // Asegúrate de tener esta imagen en public/
                        alt="Cerco eléctrico de seguridad"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}