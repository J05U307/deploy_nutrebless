import { PAQUETES } from "../data/data.js";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { whatsappLink } from "../utils/whatsapp";

/* ================= ANIMACIÓN CARD ================= */

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Paquetes() {
  return (
    <section id="paquetes" className="bg-[#CCABDA]/10 pt-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        {/* ===== TÍTULO ===== */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#075B5D]"
        >
          Nuestros Paquetes 
        </motion.h1>

        <div className="w-50 h-1 bg-[#6FC5CC] mx-auto mt-10 rounded-full" />


        {/* ===== CARDS ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {PAQUETES.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-60px" }}
            >
              <Card plan={plan} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* ===== FRANJA VERDE ===== */}
      <div className="bg-[#075B5D] py-24 px-6 text-center mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Un espacio creado para cuidar de ti
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Nutrición basada en ciencia, empatía y acompañamiento real
        </motion.p>
      </div>


    </section>
  );
}

/* ================= CARD ================= */

function Card({ plan }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      className={`h-full rounded-2xl p-8 bg-white border-2 shadow-lg
        flex flex-col
        ${plan.destacado ? "border-[#6FC5CC]" : "border-transparent"}
      `}
    >
      <div className="grow">
        <h3 className="text-xl font-bold text-[#075B5D] mb-2">
          {plan.nombre}
        </h3>

        <p className="text-3xl font-extrabold text-[#8474A1] mb-1">
          {plan.precio}
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Duración: {plan.duracion}
        </p>

        <ul className="space-y-3 text-sm text-gray-700">
          {plan.incluye.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#6FC5CC] mt-1 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappLink(
          `Hola 👋, me gustaría agendar el paquete "${plan.nombre}". ¿Podrían darme más información?`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 text-center bg-linear-to-r from-[#6FC5CC] to-[#075B5D]
          text-white font-semibold py-3 rounded-xl
          hover:opacity-90 transition-all"
      >
        Agendar ahora
      </a>
    </motion.div>
  );
}
