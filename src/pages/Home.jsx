import { motion } from "framer-motion";
import heroImage from "../assets/principal.webp";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import logo_completo from "../assets/logo_completo.webp";
import { scrollToSection } from "../utils/scrollToSection";

/* ===== VARIANTS ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main id="inicio">

      {/* ================= HERO ================= */}
      <section className="bg-[#CCABDA]/20">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={logo_completo}
              alt="Logo Nutre Bless"
              className="w-full max-w-105 md:max-w-130 mx-auto object-contain"
            />

            <p className="mt-6 text-gray-700 text-lg">
              Transformamos tu salud a través de una nutrición realista,
              flexible y basada en ciencia, con un acompañamiento humano
              y personalizado.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-[#075B5D] text-white px-6 py-3 rounded-xl hover:bg-[#064b4d] transition"
              >
                Agenda tu consulta
              </button>

              <button
                onClick={() => scrollToSection("paquetes")}
                className="border border-[#075B5D] text-[#075B5D] px-6 py-3 rounded-xl hover:bg-[#075B5D] hover:text-white transition"
              >
                Ver paquetes
              </button>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="w-full flex justify-center md:justify-end"
          >
            <img
              src={heroImage}
              alt="Nutre Bless nutrición y bienestar"
              className="w-full max-w-sm md:max-w-full h-64 md:h-105 object-cover rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ESENCIA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#075B5D]"
        >
          Nuestra esencia
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {/* MISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <div className="flex items-center gap-3">
              <FaBullseye className="text-[#6FC5CC] text-2xl" />
              <h3 className="text-xl font-semibold text-[#075B5D]">Misión</h3>
            </div>

            <p className="mt-4 text-gray-600">
             Brindar asesoramiento nutricional de calidad, personalizada y basada en evidencia científica, promoviendo un estilo de vida saludable para mejorar la calidad de vida de cada persona. Con el compromiso de acompañar en el proceso de cambio, con empatía, educación y herramientas prácticas.
            </p>
          </motion.div>

          {/* VISIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <div className="flex items-center gap-3">
              <FaEye className="text-[#6FC5CC] text-2xl" />
              <h3 className="text-xl font-semibold text-[#075B5D]">Visión</h3>
            </div>

            <p className="mt-4 text-gray-600">
              Ser un consultorio nutricional consolidado como un referente en salud y bienestar. Aspiramos a impactar positivamente en la comunidad, inspirando a más personas a transformar sus vidas a través de una alimentación saludable, consciente y sostenible, para alcanzar un equilibrio entre cuerpo, mente y espíritu.

            </p>
          </motion.div>

          {/* VALORES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <div className="flex items-center gap-3">
              <FaHeart className="text-[#6FC5CC] text-2xl" />
              <h3 className="text-xl font-semibold text-[#075B5D]">Valores</h3>
            </div>

            <ul className="mt-4 text-gray-600 space-y-2">
              <li><strong>Compromiso:</strong> Para brindar un servicio ético y responsable.</li>
              <li><strong>Calidad:</strong> Ofrecer un servicio de atención con altos estándares de calidad.</li>
              <li><strong>Servicio:</strong> Espíritu de compromiso para atender las necesidades y preocupaciones de cada paciente, siempre con trato amable y cálido.</li>
              <li><strong>Empatía:</strong> Escuchar y comprender las necesidades únicas de cada persona.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="bg-[#075B5D]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Comer bien es el primer acto de amor propio
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/80"
          >
            Empieza hoy a construir hábitos saludables y sostenibles.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            onClick={() => scrollToSection("paquetes")}
            className="mt-8 bg-[#6FC5CC] text-[#075B5D] px-8 py-3 rounded-xl font-medium hover:bg-[#5bb5bc] transition"
          >
            Quiero empezar
          </motion.button>
        </div>
      </section>

    </main>
  );
}
