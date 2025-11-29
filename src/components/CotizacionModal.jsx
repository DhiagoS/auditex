// src/components/CotizacionModal.jsx (WIZARD DE 3 PASOS - DISEÑO DISTINTO)
'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Librerías de Formulario
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// ----------------------------------------------------------------------
// 1. ESQUEMA DE VALIDACIÓN (IDÉNTICO y Corregido)
// ----------------------------------------------------------------------
const formSchema = z.object({
    nombre: z.string().min(3, "Mínimo 3 caracteres."),
    email: z.string().email("Email inválido."),
    telefono: z.string().min(7, "Teléfono inválido.").max(15, "Teléfono inválido."),
    servicio: z.string().min(1, "Seleccione un servicio."),
    detalles: z.string().max(500, "Máximo 500 caracteres.").optional(), 
});

// ----------------------------------------------------------------------
// 2. COMPONENTES REUSABLES (Integrados con RHF y Paleta Final)
// ----------------------------------------------------------------------

// Input Field
const FormInput = ({ label, name, type = 'text', register, errors, required, placeholder, className = '' }) => (
    <div className={className}>
        <label htmlFor={name} className="block text-sm font-bold text-[#1A1A1A] mb-1">
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
        <label htmlFor={name} className="block text-sm font-bold text-[#1A1A1A] mb-1">
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
// 4. COMPONENTE MODAL PRINCIPAL (WIZARD)
// ----------------------------------------------------------------------

export default function CotizacionModal({ isOpen, onClose }) {
    
    // 🚨 ESTADO PARA CONTROLAR LOS PASOS
    const [step, setStep] = useState(1);
    const totalSteps = 3; 

    // Inicialización de RHF con Zod Resolver
    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting, isValid },
        trigger, // Necesario para validar campos antes de avanzar de paso
        getValues, // Necesario para mostrar valores en el resumen
        reset 
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { servicio: 'Alarmas Monitoreadas', detalles: '' }
    });

    const [submitStatus, setSubmitStatus] = useState(null);

    const serviciosOptions = useMemo(() => [
        'Alarmas Monitoreadas', 'Cerco Eléctrico', 'Portones Automáticos', 'Cámaras de Seguridad (CCTV)', 'Otros Servicios',
    ], []);


    // Función para avanzar al siguiente paso
    const handleNext = async () => {
        let fieldsToValidate = [];
        if (step === 1) {
            fieldsToValidate = ['nombre', 'email', 'telefono'];
        } else if (step === 2) {
            fieldsToValidate = ['servicio'];
        }

        const isStepValid = await trigger(fieldsToValidate, { shouldFocus: true });
        
        if (isStepValid) {
            setStep((prev) => prev + 1);
        }
    };
    
    // Función de envío final (solo se llama en el último paso)
    const onSubmit = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        
        setSubmitStatus({ success: true, message: '¡Solicitud enviada! Un experto te contactará en breve.' });
        reset(); 
        setStep(1); // Volver al inicio después del envío
    };


    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {/* 1. Fondo Oscuro (Overlay) */}
            <motion.div
                className="fixed inset-0 z-50 bg-[#1A1A1A]/90 flex items-center justify-center p-4 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose} 
            >
                {/* 2. Contenido del Modal (Tarjeta de Formulario) */}
                <motion.div
                    key={step} // Clave para asegurar la animación de cambio de paso
                    className="relative w-full max-w-xl rounded-2xl shadow-2xl bg-white p-6 md:p-8"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    {/* Botón de Cerrar */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[#1A1A1A]/60 hover:text-[#FFC600] z-10 p-2 rounded-full transition"
                    >
                        <span className="text-2xl font-light">×</span>
                    </button>
                    
                    <h2 className="text-3xl font-extrabold text-[#1A1A1A] mb-4">
                        Paso {step} de {totalSteps}
                    </h2>
                    
                    {/* Barra de Progreso */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                        <motion.div 
                            className="h-2 rounded-full bg-[#FFC600]"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / totalSteps) * 100}%` }}
                            transition={{ type: "tween", duration: 0.5 }}
                        />
                    </div>
                    
                    
                    {/* 🚨 ZONA DE CONTENIDO DINÁMICO POR PASO */}
                    <form onSubmit={step === totalSteps ? handleSubmit(onSubmit) : (e) => e.preventDefault()} className="grid grid-cols-2 gap-x-4 gap-y-6">
                        
                        {/* PASO 1: Datos Personales */}
                        {step === 1 && (
                            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-6">
                                <FormInput label="Nombre Completo" name="nombre" register={register} errors={errors} required placeholder="Ej: Juan Pérez" className="col-span-2"/>
                                <FormInput label="Correo Electrónico" name="email" type="email" register={register} errors={errors} required placeholder="contacto@ejemplo.com"/>
                                <FormInput label="Teléfono" name="telefono" type="tel" register={register} errors={errors} required placeholder="+51 9XX XXX XXX"/>
                            </motion.div>
                        )}

                        {/* PASO 2: Servicio y Detalles */}
                        {step === 2 && (
                            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="col-span-2 grid grid-cols-1 gap-y-6">
                                <FormSelect label="Servicio de Interés" name="servicio" options={serviciosOptions} register={register} errors={errors} required />
                                
                                <div>
                                    <label htmlFor="detalles" className="block text-sm font-bold text-[#1A1A1A] mb-1">Detalles Adicionales</label>
                                    <textarea
                                        id="detalles"
                                        rows="4"
                                        {...register("detalles")}
                                        className="w-full border border-[#1A1A1A]/20 rounded-xl shadow-sm p-3 transition duration-200 focus:ring-4 focus:ring-[#FFC600]/30 focus:border-[#FFC600]"
                                        placeholder="Escribe aquí el tipo de propiedad o dudas específicas..."
                                    ></textarea>
                                    {errors.detalles && <p className="text-red-500 text-xs mt-1 font-medium">{errors.detalles.message}</p>}
                                </div>
                            </motion.div>
                        )}
                        
                        {/* PASO 3: Resumen y Envío */}
                        {step === 3 && (
                            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="col-span-2">
                                <h3 className='text-xl font-bold mb-4 border-b border-gray-200 pb-2'>Resumen de la Solicitud:</h3>
                                <p className='text-md'>**Servicio:** {getValues('servicio')}</p>
                                <p className='text-md'>**Contacto:** {getValues('nombre')} ({getValues('telefono')})</p>
                                <p className='text-md'>**Email:** {getValues('email')}</p>
                                <p className='text-sm mt-4 italic text-[#1A1A1A]/70'>*Al confirmar, su solicitud será validada y enviada a nuestro equipo de ventas.*</p>
                            </motion.div>
                        )}
                        
                        {/* Área de Botones de Control */}
                        <div className="col-span-2 pt-2 flex justify-between">
                            {step > 1 && step < 4 && (
                                <button
                                    type="button"
                                    onClick={() => setStep((prev) => prev - 1)}
                                    className="px-6 py-3 rounded-xl bg-gray-200 text-[#1A1A1A] font-bold text-lg hover:bg-gray-300 transition"
                                >
                                    ← Anterior
                                </button>
                            )}
                            
                            <div className='flex-1 flex justify-end'>
                                {step < totalSteps && (
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-bold text-lg shadow-md hover:bg-gray-800 transition"
                                    >
                                        Siguiente →
                                    </button>
                                )}

                                {step === totalSteps && (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-3 rounded-xl bg-[#FFC600] text-[#1A1A1A] font-extrabold text-lg shadow-xl hover:bg-[#e0b000] transition disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Finalizando...' : 'Finalizar Envío'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}