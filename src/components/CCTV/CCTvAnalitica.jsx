// src/components/CCTV/CCTvAnalitica.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CCTvAnalitica() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 bg-[#FFFFFF]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-extrabold text-[#1A1A1A]">
                        Más que video: <span className='text-[#FFC600]'>Inteligencia Artificial</span>
                    </h2>
                    <p className="mt-4 text-[#1A1A1A] text-lg">
                        Nuestros sistemas transforman el video en datos. Detecta intrusos reales y filtra falsas alarmas provocadas por mascotas o viento.
                    </p>
                    <ul className="mt-8 space-y-4">
                        <li className='flex items-center gap-3'>
                            <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                            <span className="text-lg text-[#1A1A1A]">Detección de cruce de línea</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                            <span className="text-lg text-[#1A1A1A]">Reconocimiento de matrículas (LPR)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                            <span className="text-lg text-[#1A1A1A]">Conteo de personas</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                >
                    <Image
                        src="/placeholder-analitica.png"
                        alt="Analítica de Video"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </div>
        </section>
    );
}