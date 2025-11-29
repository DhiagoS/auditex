// src/components/CCTV/CCTvBeneficios.jsx
import { motion } from 'framer-motion';

const items = [
    { title: 'Visión 4K Ultra HD', icon: '👁️', desc: 'Calidad de imagen superior para identificar rostros y matrículas con claridad.' },
    { title: 'Acceso Remoto Total', icon: '📱', desc: 'Visualiza tus cámaras en vivo o grabaciones desde tu smartphone o tablet.' },
    { title: 'Color en Oscuridad', icon: '🌙', desc: 'Tecnología ColorVu para ver imágenes a color incluso en la noche.' }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CCTvBeneficios() {
    return (
        <section className="py-20 bg-[#FFFFFF] px-6">
            <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-center text-[#1A1A1A] mb-16"
            >
                Ojos que todo lo <span className="text-[#FFC600]">Ven</span>
            </motion.h2>

            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
                {items.map((item, index) => (
                    <motion.div 
                        key={index} 
                        variants={cardVariants}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ delay: index * 0.2 }} 
                        className="p-8 bg-white rounded-xl shadow-2xl relative overflow-hidden group hover:shadow-3xl transition duration-300 border border-gray-50"
                    >
                        {/* Borde Superior Dorado */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-[#FFC600]"></div>
                        
                        <span className="text-4xl block mb-4">{item.icon}</span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-[#FFC600] transition duration-300">{item.title}</h3>
                        <p className="mt-3 text-lg text-[#1A1A1A]">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}