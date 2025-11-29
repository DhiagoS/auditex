// src/app/page.jsx

'use client'; 
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HomeHero from '@/components/Home/HomeHero';
import HomeServices from '@/components/Home/HomeServices';
import HomeHowItWorks from '@/components/Home/HomeHowItWorks';
import HomeTrust from '@/components/Home/HomeTrust';
import HomeCTA from '@/components/Home/HomeCTA';
import { motion } from 'framer-motion'; 

export default function Home() {
    return (
        // Fondo Blanco Puro y Texto Negro Elegante
        <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A] antialiased"> 
            <Navbar /> 
            
            <HomeHero />
            <HomeServices />
            <HomeHowItWorks />
            <HomeTrust />
            <HomeCTA />

            <Footer /> 
        </main>
    );
}