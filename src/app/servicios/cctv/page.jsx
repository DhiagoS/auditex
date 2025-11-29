// src/app/servicios/cctv/page.jsx (Versión Limpia y Optimizada)
'use client'; 
import { useState } from 'react';
import dynamic from 'next/dynamic'; 

// Imports estáticos (solo Hero, ya que Navbar se quita)
import CCTvHero from '@/components/CCTV/CCTvHero'; 
import Navbar from '@/components/Layout/Navbar';

// DEFINICIONES DINÁMICAS (Necesarias para definir las variables antes de usarlas)
const CCTvBeneficios = dynamic(() => import('@/components/CCTV/CCTvBeneficios'), { ssr: false });
const CCTvTipos = dynamic(() => import('@/components/CCTV/CCTvTipos'), { ssr: false });
const CCTvAnalitica = dynamic(() => import('@/components/CCTV/CCTvAnalitica'), { ssr: false });
const CCTvCTA = dynamic(() => import('@/components/CCTV/CCTvCTA'), { ssr: false });
const CotizacionModal = dynamic(() => import('@/components/CotizacionModal'), { ssr: false, loading: () => null }); 


export default function CCTvPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] antialiased">
            
            {/* 🚨 NAV BAR NO ESTÁ PRESENTE AQUÍ (Correcto) */}
            <Navbar /> 

            {/* Carga normal */}
            <CCTvHero openModal={openModal} />
            
            {/* Carga dinámica (funcionará ahora) */}
            <CCTvBeneficios />
            <CCTvTipos />
            <CCTvAnalitica />
            
            {/* CTA Final */}
            <CCTvCTA openModal={openModal} /> 

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