// src/app/servicios/portones-automatizados/page.jsx
'use client'; 
import { useState } from 'react';

// Layout
import Navbar from '@/components/Layout/Navbar';
import CotizacionModal from '@/components/CotizacionModal'; 

// Componentes Específicos
import PortonHero from '@/components/PortonAutomatizado/PortonHero';
import PortonBeneficios from '@/components/PortonAutomatizado/PortonBeneficios';
import PortonTipos from '@/components/PortonAutomatizado/PortonTipos';
import PortonTecnologia from '@/components/PortonAutomatizado/PortonTecnologia';
import PortonCTA from '@/components/PortonAutomatizado/PortonCTA';

export default function PortonesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] antialiased">
            
            <Navbar /> 

            <PortonHero openModal={openModal} />
            <PortonBeneficios />
            <PortonTipos />
            <PortonTecnologia />
            
            {/* CTA con Fondo Negro Profundo */}
            <PortonCTA openModal={openModal} /> 

            {/* SIN FOOTER */}
            
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