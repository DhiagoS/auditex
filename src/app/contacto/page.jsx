// src/app/contacto/page.jsx (DISEÑO FINAL DE ALTA VISIBILIDAD)

'use client'; 

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Librerías de Formulario
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// ----------------------------------------------------------------------
// 1. ESQUEMA DE VALIDACIÓN (ZOD)
// ----------------------------------------------------------------------
const formSchema = z.object({
    nombre: z.string().min(3, "Mínimo 3 caracteres."),
    email: z.string().email("Email inválido."),
    telefono: z.string().min(7, "Teléfono inválido.").max(15, "Teléfono inválido."),
    servicio: z.string().min(1, "Seleccione un servicio."),
    detalles: z.string().max(500, "Máximo 500 caracteres.").optional(),
});

// ----------------------------------------------------------------------
// 2. COMPONENTES REUSABLES
// ----------------------------------------------------------------------

// Input Field
const FormInput = ({ label, name, type = 'text', register, errors, required, placeholder, className = '' }) => (
    <div className={className}>
        <label htmlFor={name} className="block text-sm font-semibold text-[#1A1A1A] mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            id={name}
            type={type}
            placeholder={placeholder}
            {...register(name)} 
            className={`w-full border rounded-xl shadow-sm p-3 transition duration-200 
                        focus:ring-4 focus:ring-[#FFC600]/30 focus:border-[#FFC600] 
                        ${errors[name] ? 'border-red-500' : 'border-[#1A1A1A]/20'}`}
        />
        {errors[name] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[name]?.message}</p>}
    </div>
);

// Select Field
const FormSelect = ({ label, name, options, register, errors, required }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-semibold text-[#1A1A1A] mb-1">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={name}
            {...register(name)} 
            className={`w-full border rounded-xl shadow-sm p-3 bg-white transition duration-200 
                        focus:ring-4 focus:ring-[#FFC600]/30 focus:border-[#FFC600] 
                        ${errors[name] ? 'border-red-500' : 'border-[#1A1A1A]/20'}`}
        >
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
        {errors[name] && <p className="text-red-500 text-xs mt-1 font-medium">{errors[name]?.message}</p>}
    </div>
);


// ----------------------------------------------------------------------
// 3. COMPONENTE PRINCIPAL
// ----------------------------------------------------------------------

export default function ContactoFormulario() {
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset 
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { servicio: 'Alarmas Monitoreadas', detalles: '' }
    });

    const [submitStatus, setSubmitStatus] = useState(null); 

    const serviciosOptions = useMemo(() => [
        'Alarmas Monitoreadas', 'Cerco Eléctrico', 'Portones Automáticos', 'Cámaras de Seguridad (CCTV)', 'Otros Servicios',
    ], []);


    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000)); 

        setSubmitStatus({ success: true, message: '¡Tu solicitud ha sido enviada con éxito! Te contactaremos pronto.' });
        reset(); 
    };


    return (
        <main className="min-h-screen bg-[#FBF8F1] py-16 px-6"> {/* Fondo Perla */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
                
                {/* Columna de Contacto Fijo (3/12) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-3 hidden lg:block"
                >
                    <div className="sticky top-20 bg-[#1A1A1A] text-white p-6 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#FFC600]">Contacto Directo</h3>
                        
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="text-xl text-[#FFC600] mr-3">📞</span>
                                <div><h4 className="font-semibold">Llámanos</h4>
                                <a href="tel:+51900000000" className="hover:underline text-white/80">+51 900 000 000</a></div>
                            </div>
                            
                            <div className="flex items-start">
                                <span className="text-xl text-[#FFC600] mr-3">📧</span>
                                <div><h4 className="font-semibold">Envíanos un correo</h4>
                                <a href="mailto:info@auditek.com.pe" className="hover:underline text-white/80">info@auditek.com.pe</a></div>
                            </div>
                            
                            <div className="flex items-start">
                                <span className="text-xl text-[#FFC600] mr-3">📍</span>
                                <div><h4 className="font-semibold">Oficina</h4>
                                <p className="text-white/80">Av. Principal #123, País</p></div>
                            </div>
                        </div>
                        
                        <Link href="/" className="mt-6 block text-sm text-white/60 hover:text-[#FFC600] transition duration-200">
                            ← Volver a Home
                        </Link>
                    </div>
                </motion.div>

                {/* Columna del Formulario (9/12) */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-9 bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100"
                >
                    <h2 className="text-5xl font-extrabold text-[#1A1A1A] mb-3">Solicitud de Cotización</h2>
                    <p className="text-xl text-[#1A1A1A]/70 mb-10">
                        Completa los datos para que tu experto en seguridad te contacte.
                    </p>

                    {submitStatus && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`p-4 mb-6 rounded-xl font-medium ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                        >
                            {submitStatus.message}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        
                        {/* Grupo 1: Contacto Principal */}
                        <FormInput label="Nombre Completo" name="nombre" register={register} errors={errors} required placeholder="Ej: Juan Pérez" className="col-span-1" />
                        <FormInput label="Correo Electrónico" name="email" type="email" register={register} errors={errors} required placeholder="contacto@ejemplo.com" className="col-span-1" />
                        <FormInput label="Teléfono de Contacto" name="telefono" type="tel" register={register} errors={errors} required placeholder="+51 9XX XXX XXX" className="col-span-1" />

                        {/* Grupo 2: Servicio */}
                        <FormSelect label="Servicio de Interés" name="servicio" options={serviciosOptions} register={register} errors={errors} required className="col-span-1" />

                        {/* Textarea */}
                        <div className="col-span-full">
                            <label htmlFor="detalles" className="block text-sm font-semibold text-[#1A1A1A] mb-1">Detalles de la Propiedad</label>
                            <textarea
                                id="detalles"
                                rows="5"
                                {...register("detalles")}
                                className="w-full border border-[#1A1A1A]/20 rounded-xl shadow-sm p-3 transition duration-200 focus:ring-4 focus:ring-[#FFC600]/30 focus:border-[#FFC600]"
                                placeholder="Indica el tipo de propiedad (casa/negocio/industria) y la dirección aproximada."
                            ></textarea>
                            {errors.detalles && <p className="text-red-500 text-xs mt-1 font-medium">{errors.detalles.message}</p>}
                        </div>

                        {/* Botón de Envío */}
                        <div className="col-span-full pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-extrabold text-xl shadow-xl hover:bg-[#e0b000] transition duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Validando y Enviando...' : 'Confirmar Solicitud'}
                            </button>
                        </div>
                        
                        <div className="col-span-full text-center text-xs text-gray-500 mt-2">
                            *Toda la información es confidencial.
                        </div>
                    </form>
                </motion.div>

            </div>
        </main>
    );
}