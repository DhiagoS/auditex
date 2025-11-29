// src/app/servicios/cerco-electrico/page.jsx
'use client'; 
import { useState } from 'react';

// Layout Global
import Navbar from '@/components/Layout/Navbar';
import CotizacionModal from '@/components/CotizacionModal'; 

// 🚨 CORRECCIÓN DE IMPORTACIONES (Coinciden con tu imagen):
import CercoHero from '@/components/CercoElectrico/CercoHero';
import CercoBeneficios from '@/components/CercoElectrico/CercoBeneficios'; // Asumiendo que el nombre completo es CercoBeneficios.jsx
import CercoComponentes from '@/components/CercoElectrico/CercoComponentes'; // Asumiendo que el nombre completo es CercoComponentes.jsx
import CercoProceso from '@/components/CercoElectrico/CercoProceso';
import CercoCTA from '@/components/CercoElectrico/CercoCTA';

export default function CercoElectricoPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] antialiased">
            
            <Navbar /> 

            <CercoHero openModal={openModal} />
            <CercoBeneficios />
            <CercoComponentes />
            <CercoProceso />
            
            <CercoCTA openModal={openModal} /> 

            {/* Modal */}
            {isModalOpen && (
                <CotizacionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </main>
    );
}