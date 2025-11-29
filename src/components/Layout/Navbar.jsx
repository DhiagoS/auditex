// src/components/Layout/Navbar.jsx
'use client'; 
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Definición de los servicios (Rutas internas)
const SERVICIOS_DE_PRODUCTO = [
    { 
        name: 'Alarmas Monitoreadas', 
        link: '/servicios/alarmas-monitoreadas', 
        desc: 'Protección 24/7 con respuesta inmediata.' 
    },
    { 
        name: 'Cercos Eléctricos', 
        link: '/servicios/cerco-electrico', 
        desc: 'Disuasión perimetral de alta seguridad.' 
    },
    { 
        name: 'Portones Automatizados', 
        link: '/servicios/portones-automatizados', 
        desc: 'Control de acceso vehicular inteligente.' 
    },
    { 
        name: 'Cámaras de Seguridad (CCTV)', 
        link: '/servicios/cctv', 
        desc: 'Videovigilancia remota y analítica.' 
    },
];

// Componente de Dropdown (Menú Desplegable)
const ServicesDropdown = ({ isOpen, onClose }) => {
    
    const menuVariants = {
        hidden: { opacity: 0, y: 10, transition: { duration: 0.2 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    className="absolute top-full -left-10 mt-2 rounded-xl shadow-2xl bg-white w-[500px] z-50 overflow-hidden"
                    style={{ borderTop: '4px solid #FFC600' }} // Borde superior dorado
                    onMouseLeave={onClose}
                >
                    <div className="grid grid-cols-2 p-2 gap-2">
                        {SERVICIOS_DE_PRODUCTO.map((item, index) => (
                            <Link key={index} href={item.link} onClick={onClose}>
                                <div className="group p-4 rounded-lg hover:bg-gray-50 transition duration-200 cursor-pointer h-full">
                                    <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#FFC600] transition flex items-center gap-2">
                                        {item.name}
                                        <span className="opacity-0 group-hover:opacity-100 transition text-[#FFC600] text-sm">→</span>
                                    </h4>
                                    <p className="text-xs text-[#1A1A1A]/70 mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    {/* Footer del Dropdown */}
                    <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                        <Link href="#contact" onClick={onClose} className="text-xs font-bold text-[#1A1A1A] hover:text-[#FFC600] transition uppercase tracking-wide">
                            Ver todos los servicios
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// Componente Principal de Navegación
export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm transition duration-300 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo y Marca */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Logo: Fondo Dorado (#FFC600) y Letra Negra (#1A1A1A) */}
                    <div className="w-10 h-10 rounded-full bg-[#FFC600] flex items-center justify-center text-[#1A1A1A] font-extrabold text-xl shadow-md group-hover:scale-105 transition duration-300">
                        A
                    </div>
                    <div>
                        <h1 className="text-xl font-extrabold text-[#1A1A1A] tracking-tight">Auditek</h1>
                    </div>
                </Link>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex items-center gap-8 text-base font-medium">
                    
                    {/* Menú de Servicios con Dropdown */}
                    <div 
                        className="relative h-full flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-[#1A1A1A] hover:text-[#FFC600] transition duration-200 py-4">
                            Servicios 
                            <span className={`text-[10px] transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#FFC600]' : 'text-gray-400'}`}>▼</span>
                        </button>
                        
                        <ServicesDropdown 
                            isOpen={isServicesOpen} 
                            onClose={() => setIsServicesOpen(false)}
                        />
                    </div>

                    <Link className="text-[#1A1A1A] hover:text-[#FFC600] transition duration-200" href="#how">Proceso</Link>
                    <Link className="text-[#1A1A1A] hover:text-[#FFC600] transition duration-200" href="#trust">Nosotros</Link>
                    
                    {/* Botón Contacto: Fondo Dorado y Texto Negro */}
                    <Link className="ml-4 px-6 py-2.5 rounded-full bg-[#FFC600] text-[#1A1A1A] font-bold shadow-lg hover:bg-[#e0b000] hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5" href="#contact">
                        Contacto
                    </Link>
                </nav>

                {/* Botón Menú Móvil */}
                <button className="md:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-gray-100 transition">
                    <span className="text-2xl">☰</span>
                </button>
            </div>
        </header>
    );
}