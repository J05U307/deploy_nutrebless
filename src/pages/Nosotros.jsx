import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import consultorio1 from "../assets/consultorio1.webp";
import consultorio2 from "../assets/consultorio2.webp";
import consultorio3 from "../assets/consultorio3.webp";
import logo from "../assets/logo_colores_circulo.webp";

//const images = [consultorio1, consultorio2, consultorio3];

const images = [
    { src: consultorio1, alt: "Consultorio de nutrición Nutre Bless en Cajamarca" },
    { src: consultorio2, alt: "Espacio de atención nutricional profesional en Cajamarca" },
    { src: consultorio3, alt: "Centro de asesoría nutricional Nutre Bless" },
];


/* ===== VARIANTES ===== */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function Nosotros() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () =>
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <section id="nosotros" className="scroll-mt-24" >

            {/* ===== SECCIÓN SUPERIOR ===== */}
            <div className="bg-[#CCABDA]/10 py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* LOGO + TITULO */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center gap-4 mb-12"
                    >
                        <motion.img
                            src={logo}
                            alt="Nutre Bless"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="w-28 md:w-36"
                        />

                        <h2 className="text-3xl md:text-4xl font-bold text-[#075B5D] tracking-wide">
                            Nutre Bless
                        </h2>


                        <span className="w-20 h-1 bg-[#6FC5CC] rounded-full" />
                    </motion.div>

                    {/* TEXTO */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                        className="max-w-4xl mx-auto text-center text-gray-700 space-y-5 leading-relaxed"
                    >


                        <motion.p variants={fadeUp}>
                            Somos <strong>Nutre Bless</strong>, un <strong>consultorio de nutrición en Cajamarca</strong> que transforma tu salud brindando una atención personalizada, empática y centrada en cada persona.
                        </motion.p>


                        <motion.p variants={fadeUp}>
                            Creemos en una nutrición realista, flexible y basada en evidencia científica, que respete tus creencias, hábitos y estilo de vida. Aquí no juzgamos ni imponemos dietas estrictas.
                        </motion.p>


                        <motion.p variants={fadeUp}>
                            Nos alegra que hayas decidido dar este primer paso: priorizar tu salud y bienestar. Con educación nutricional y acompañamiento constante, descubrirás que los cambios sí son posibles
                        </motion.p>
                    </motion.div>

                    {/* ===== CARRUSEL DESTACADO ===== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 relative max-w-5xl mx-auto"
                    >
                        <div className="overflow-hidden rounded-3xl shadow-2xl relative
                h-72 md:h-96 lg:h-[45vh] xl:h-[50vh]">



                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={index}
                                    src={images[index].src}
                                    alt={images[index].alt}

                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* OVERLAY + TEXTO */}
                            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                                <p className="text-white text-lg md:text-xl font-medium max-w-md">
                                    Un espacio diseñado para tu bienestar físico y emocional
                                </p>
                            </div>
                        </div>

                        {/* BOTONES */}
                        <button
                            onClick={prev}
                            className="absolute top-1/2 -translate-y-1/2 left-4
                            bg-white/90 hover:bg-white text-[#075B5D]
                            p-3 rounded-full shadow-lg"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={next}
                            className="absolute top-1/2 -translate-y-1/2 right-4
                            bg-white/90 hover:bg-white text-[#075B5D]
                            p-3 rounded-full shadow-lg"
                        >
                            <FaChevronRight />
                        </button>

                        {/* INDICADORES */}
                        <div className="flex justify-center gap-2 mt-6">
                            {images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 rounded-full transition-all ${i === index
                                        ? "w-6 bg-[#075B5D]"
                                        : "w-2 bg-[#6FC5CC]"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ===== FRANJA FINAL ===== */}
            <div className="bg-[#075B5D] py-24 px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-white"
                >
                    Un espacio creado para cuidar de ti
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-white/80 max-w-2xl mx-auto"
                >
                    Asesoría nutricional profesional, planes personalizados y acompañamiento constante para mejorar tu salud de forma sostenible.

                </motion.p>
            </div>
        </section>
    );
}
