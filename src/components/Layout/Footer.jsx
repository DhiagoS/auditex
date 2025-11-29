// components/Layout/Footer.jsx
import Link from 'next/link';

export default function Footer() {
    return (
        // Fondo: Negro Elegante (#1A1A1A)
        <footer className="bg-[#1A1A1A] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Columna 1: Marca y Misión */}
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        {/* Logo color Amarillo Dorado (#FFC600) */}
                        <div className="w-8 h-8 rounded-full bg-[#FFC600] flex items-center justify-center text-[#1A1A1A] font-extrabold text-sm">A</div>
                        <h4 className="font-extrabold text-xl text-white">Auditek</h4>
                    </div>
                    <p className="text-base text-white/80 mt-2">
                        Lideres en inspección, auditoría y soluciones de control.
                    </p>
                </div>

                {/* Columna 2: Navegación */}
                <div>
                    <h5 className="font-bold text-[#FFC600] mb-3 text-lg">Navegación</h5>
                    <ul className="text-base space-y-2 text-white/90">
                        <li><Link href="#services" className="hover:text-[#FFC600] transition">Servicios</Link></li>
                        <li><Link href="#how" className="hover:text-[#FFC600] transition">Proceso de Trabajo</Link></li>
                        <li><Link href="#trust" className="hover:text-[#FFC600] transition">Confianza</Link></li>
                    </ul>
                </div>

                {/* Columna 3: Servicios */}
                <div>
                    <h5 className="font-bold text-[#FFC600] mb-3 text-lg">Servicios Clave</h5>
                    <ul className="text-base space-y-2 text-white/90">
                        <li>Alarmas Monitoreadas</li>
                        <li>Cercos Eléctricos</li>
                        <li>Portones Automatizados</li>
                    </ul>
                </div>

                {/* Columna 4: Contacto */}
                <div>
                    <h5 className="font-bold text-[#FFC600] mb-3 text-lg">Contáctanos</h5>
                    <p className="text-base mt-2 text-white/90">Av. Ejemplo 123, Lima</p>
                    <p className="text-base text-white/90"><a href="tel:+51900000000" className='hover:underline'>+51 900 000 000</a></p>
                    <p className="text-base text-white/90"><a href="mailto:info@auditek.com.pe" className='hover:underline'>info@auditek.com.pe</a></p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/20 text-sm text-white/70 text-center">© {new Date().getFullYear()} Auditek. Todos los derechos reservados.</div>
        </footer>
    );
}