// src/app/servicios/alarmas-monitoreadas/page.jsx
'use client'; 
import { useState } from 'react';

// 1. Importamos el Navbar (El que acabamos de mejorar con Amarillo/Negro)
import Navbar from '@/components/Layout/Navbar';

// 2. Importamos el Modal
import CotizacionModal from '@/components/CotizacionModal'; 

// 3. Importamos los componentes internos de la página (Asegúrate de haberlos creado en los pasos anteriores)
import AlarmasHero from '@/components/AlarmasMonitoreadas/Hero';
import BeneficiosGrid from '@/components/AlarmasMonitoreadas/BeneficiosGrid';
import ComponentesSistema from '@/components/AlarmasMonitoreadas/ComponentesSistema';
import ProcesoMonitoreo from '@/components/AlarmasMonitoreadas/ProcesoMonitoreo';
import Testimonios from '@/components/AlarmasMonitoreadas/Testimonios';
import FAQ from '@/components/AlarmasMonitoreadas/FAQ';
import AlarmasCTA from '@/components/AlarmasMonitoreadas/CTA';

export default function AlarmasMonitoreadasPage() {
    // Estado para el modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Función para abrir el modal (se pasa a los botones)
    const openModal = () => setIsModalOpen(true);

    return (
        // Estilos Globales: Fondo Blanco (#FFFFFF) y Texto Negro (#1A1A1A)
        <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] antialiased">
            
            {/* Aquí va el Navbar Nuevo */}
            <Navbar />

            {/* Secciones de la Página */}
            <AlarmasHero openModal={openModal} />
            <BeneficiosGrid />
            <ComponentesSistema />
            <ProcesoMonitoreo />
            <Testimonios />
            <FAQ />
            
            {/* CTA Final (Fondo Negro con botón Amarillo) */}
            <AlarmasCTA openModal={openModal} /> 

            {/* NO FOOTER (Según tu indicación) */}
            
            {/* Modal de Cotización (Oculto por defecto) */}
            {isModalOpen && (
                <CotizacionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </main>
    );
}