// src/components/Home/HomeHero.jsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export default function HomeHero() {
    return (
        <section className="relative pt-20 pb-32 px-6 bg-[#FFFFFF]"> 
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
                
                <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
                    
                    {/* 🚨 TITULAR FINAL SELECCIONADO */}
                    <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-tight text-[#1A1A1A]">
                        Seguridad Inteligente, Vigilancia y <span className="text-[#FFC600]">Control Total 24/7</span>.
                    </motion.h2>
                    
                    {/* Texto secundario ajustado para complementar el titular */}
                    <motion.p variants={fadeInUp} className="mt-6 text-xl text-[#1A1A1A] max-w-xl">
                        Auditek te ofrece soluciones de seguridad y monitoreo de última generación, garantizando protección constante con tecnología avanzada y soporte experto.
                    </motion.p>

                    {/* ... El resto del código de la sección Hero se mantiene igual ... */}
                    <motion.div variants={fadeInUp} className="mt-10 flex gap-4">
                        {/* Botón Principal: Fondo Amarillo Dorado (#FFC600), Texto Negro Elegante */}
                        <Link 
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-medium shadow-2xl hover:bg-[#FCDA00] transition duration-300" 
                            href="#contact"
                        >
                            Contáctanos Ahora
                        </Link>
                        {/* Botón Secundario: Borde Negro Elegante */}
                        <Link 
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium hover:bg-gray-100 transition" 
                            href="#services"
                        >
                            Ver Servicios
                        </Link>
                    </motion.div>

                    <motion.ul variants={{ animate: { transition: { staggerChildren: 0.1 } } }} initial="initial" animate="animate" className="mt-10 grid grid-cols-3 gap-4 text-sm">
                        <motion.li variants={fadeInUp} className="bg-white p-4 rounded-xl shadow-lg border-t-2 border-t-[#FFC600]">
                            <strong className='text-[#1A1A1A]'>Monitoreo 24/7</strong>
                            <div className="text-gray-500">Reacción inmediata</div>
                        </motion.li>
                        <motion.li variants={fadeInUp} className="bg-white p-4 rounded-xl shadow-lg border-t-2 border-t-[#FFC600]">
                            <strong className='text-[#1A1A1A]'>Tecnología Avanzada</strong>
                            <div className="text-gray-500">Innovación en seguridad</div>
                        </motion.li>
                        <motion.li variants={fadeInUp} className="bg-white p-4 rounded-xl shadow-lg border-t-2 border-t-[#FFC600]">
                            <strong className='text-[#1A1A1A]'>Soporte Experto</strong>
                            <div className="text-gray-500">Asesoramiento continuo</div>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                {/* Columna de Imagen */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
                    className="flex items-center justify-center relative h-96 w-full"
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 w-full max-w-md">
                        



                        <Image src="/placeholder-security.jpg" alt="Seguridad Inteligente" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}