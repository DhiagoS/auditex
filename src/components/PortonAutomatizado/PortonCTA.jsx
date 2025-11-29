// src/components/PortonAutomatizado/PortonCTA.jsx
import { motion } from 'framer-motion';

export default function PortonCTA({ openModal }) {
    return (
        // Fondo Negro Profundo (#111111)
        <section className="py-24 bg-[#111111] px-6 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-white"
            >
                Moderniza tu acceso hoy mismo
            </motion.h2>
            <p className="mt-6 text-white/90 text-xl">
                Seguridad, confort y valor para tu propiedad.
            </p>
            <div className="mt-10">
                <button 
                    onClick={openModal} 
                    className="px-12 py-4 rounded-xl bg-[#FFC600] text-black font-extrabold text-xl shadow-2xl hover:bg-[#e0b000] transition duration-300 transform hover:scale-[1.05]"
                >
                    Solicitar Visita Técnica
                </button>
            </div>
        </section>
    );
}