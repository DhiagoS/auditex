// src/components/PortonAutomatizado/PortonTecnologia.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PortonTecnologia() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 bg-[#FFFFFF]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-extrabold text-[#1A1A1A]">
                        Motores de <span className='text-[#FFC600]'>Uso Intensivo</span>
                    </h2>
                    <p className="mt-4 text-[#1A1A1A] text-lg">
                        Solo instalamos motores que cumplen con los ciclos de apertura más exigentes, garantizando una vida útil prolongada.
                    </p>
                    <ul className="mt-8 space-y-4">
                        <li className='flex items-center gap-3'>
                            <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                            <span className="text-lg text-[#1A1A1A]">Control de torque adaptable</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                            <span className="text-lg text-[#1A1A1A]">Desbloqueo manual de emergencia</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <span className='text-xl text-[#FFC600] font-bold'>✔</span> 
                            <span className="text-lg text-[#1A1A1A]">Componentes libres de mantenimiento</span>
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
                        src="/placeholder-motor.png"
                        alt="Motor de portón automático"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </div>
        </section>
    );
}