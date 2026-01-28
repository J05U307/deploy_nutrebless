import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaInstagram,
    FaEnvelope
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

/* ===== ANIMACIONES ===== */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export default function Contacto() {
    const [nombre, setNombre] = useState("");
    const [celular, setCelular] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);

    /* ===== ALERTA FLOTANTE ===== */
    const [alerta, setAlerta] = useState({
        visible: false,
        mensaje: "",
        tipo: "success", // success | error
    });

    const mostrarAlerta = (mensaje, tipo = "success") => {
        setAlerta({ visible: true, mensaje, tipo });

        setTimeout(() => {
            setAlerta({ visible: false, mensaje: "", tipo });
        }, 1500);
    };

    /* ===== VALIDACIONES ===== */
    const validarFormulario = () => {
        if (nombre.trim().length < 3) {
            mostrarAlerta("El nombre debe tener al menos 3 letras", "error");
            return false;
        }

        if (!/^[0-9]{9}$/.test(celular)) {
            mostrarAlerta("El celular debe tener 9 dígitos", "error");
            return false;
        }

        if (mensaje.trim().length < 10) {
            mostrarAlerta(
                "El mensaje debe tener al menos 10 caracteres",
                "error"
            );
            return false;
        }

        return true;
    };

    /* ===== ENVÍO ===== */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarFormulario()) return;

        setLoading(true);

        const textoWhatsApp = `Hola ${nombre}, te escribimos desde *Nutre Bless* para responder tu consulta.`;
        const whatsappCodificado = encodeURIComponent(textoWhatsApp);

        emailjs
            .send(
                "service_u1n287h",
                "template_ciywbou",
                {
                    nombre,
                    celular,
                    mensaje,
                    whatsapp: whatsappCodificado
                },
                "HlZnQDW40ekpsAD8W"
            )
            .then(() => {
                mostrarAlerta("✅ Mensaje enviado correctamente", "success");
                setNombre("");
                setCelular("");
                setMensaje("");
            })
            .catch(() => {
                mostrarAlerta("❌ Error al enviar el mensaje", "error");
            })
            .finally(() => setLoading(false));
    };

    return (
        <section id="contacto" className="bg-[#CCABDA]/20 relative">
            {/* ===== ALERTA FLOTANTE ===== */}
            {/* ===== ALERTA CENTRADA ===== */}
            {alerta.visible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className={`px-8 py-6 rounded-2xl shadow-2xl text-center max-w-sm w-full
                         ${alerta.tipo === "success"
                                ? "bg-linear-to-r from-[#6FC5CC] to-[#075B5D] text-white"
                                : "bg-linear-to-r from-[#D97777] to-[#7F1D1D] text-white"
                            }`}
                    >
                        <p className="text-lg font-semibold mb-2">
                            {alerta.tipo === "success" ? "¡Mensaje enviado!" : "Ocurrió un error"}
                        </p>

                        <p className="text-sm opacity-90">
                            {alerta.mensaje}
                        </p>
                    </motion.div>
                </motion.div>
            )}



            <div className="max-w-7xl mx-auto py-20 px-6">
                {/* ===== TÍTULO ===== */}
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-[#203131] mb-20"
                >
                    Contáctanos
                </motion.h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto -mt-12 mb-16">
                    Comunícate con nosotros para recibir asesoría
                    nutricional personalizada, planes de alimentación y seguimiento profesional.
                </p>


                {/* ===== GRID ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* ===== FORM + INFO ===== */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        className="flex flex-col gap-6"
                    >
                        {/* ===== FORMULARIO ===== */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
                        >
                            <input
                                type="text"
                                placeholder="Nombre completo"
                                value={nombre}
                                onChange={(e) =>
                                    setNombre(e.target.value)
                                }
                                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6FC5CC]"
                            />

                            <input
                                type="tel"
                                placeholder="Número de celular"
                                value={celular}
                                onChange={(e) =>
                                    setCelular(e.target.value)
                                }
                                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6FC5CC]"
                            />

                            <textarea
                                rows="3"
                                placeholder="Escribe tu mensaje"
                                value={mensaje}
                                onChange={(e) =>
                                    setMensaje(e.target.value)
                                }
                                className="border rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#6FC5CC]"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-linear-to-r from-[#6FC5CC] to-[#075B5D] text-white font-semibold py-3 rounded-xl hover:opacity-90 disabled:opacity-60"
                            >
                                {loading ? "Enviando..." : "Enviar mensaje"}
                            </button>
                        </form>

                        {/* ===== INFO ===== */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">

                            {/* TELÉFONO */}
                            <a
                                href="tel:+51984834787"
                                className="flex items-center gap-4 hover:text-[#075B5D] transition"
                            >
                                <FaPhoneAlt className="text-[#6FC5CC] text-xl" />
                                <span>984 834 787</span>
                            </a>

                            {/* EMAIL */}
                            <a
                                href="mailto:nutrebless@gmail.com?subject=Consulta%20Nutricional&body=Hola%20Nutre%20Bless,%20me%20gustaría%20recibir%20información%20sobre%20una%20consulta%20nutricional."
                                className="flex items-center gap-4 hover:text-[#075B5D] transition"
                            >
                                <FaEnvelope className="text-[#6FC5CC] text-xl" />
                                <span>nutrebless@gmail.com</span>
                            </a>

                            {/* UBICACIÓN */}
                            <a
                                href="https://maps.app.goo.gl/zSNiFFk7uuYWNVRd6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 hover:text-[#075B5D] transition"
                            >
                                <FaMapMarkerAlt className="text-[#6FC5CC] text-xl" />
                                <span>Cajamarca, Perú</span>
                            </a>

                            {/* WHATSAPP */}
                            <a
                                href="https://wa.me/51984834787?text=Hola%20👋,%20vengo%20desde%20la%20página%20web%20de%20Nutre%20Bless%20y%20me%20gustaría%20recibir%20información%20sobre%20una%20consulta%20nutricional.%20Gracias%20😊"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6FC5CC] to-[#075B5D] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                            >
                                <FaWhatsapp />
                                Escríbenos por WhatsApp
                            </a>

                        </div>

                    </motion.div>

                    {/* ===== MAPA ===== */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden min-h-[380px]" >
                        <iframe title="Consultorio de nutricionista en Cajamarca - Nutre Bless"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5213961443305!2d-78.50269852507385!3d-7.181186392823826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25bd5db406f47%3A0x35029ba6413d8261!2sConsultorio%20Nutricional%20Nutre%20Bless!5e0!3m2!1ses-419!2spe!4v1767193639254!5m2!1ses-419!2spe"
                            className="w-full h-full border-0"
                            loading="lazy" allowFullScreen />
                    </motion.div>
                </div>
            </div>

            <p className="sr-only">
                Nutricionista en Cajamarca, consulta nutricional, asesoría nutricional profesional,
                planes de alimentación, bajar de peso, control de peso, nutrición clínica, atención nutricional en Cajamarca.
            </p>

        </section>


    );
}