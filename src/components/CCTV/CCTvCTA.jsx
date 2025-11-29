// src/components/CCTV/CCTvCTA.jsx
import { motion } from 'framer-motion';

export default function CCTvCTA({ openModal }) {
    return (
        // Fondo Negro Profundo (#111111)
        <section className="py-24 bg-[#111111] px-6 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-white"
            >
                No pierdas ni un detalle
            </motion.h2>
            <p className="mt-6 text-white/90 text-xl">
                Protege tu patrimonio con la mejor tecnología de video.
            </p>
            <div className="mt-10">
                <button 
                    onClick={openModal} 
                    className="px-12 py-4 rounded-xl bg-[#FFC600] text-black font-extrabold text-xl shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.05]"
                >
                    Instalar Cámaras
                </button>
            </div>
        </section>
    );
}