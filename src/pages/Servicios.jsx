import { motion } from "framer-motion";
import {
  FaAppleAlt,
  FaChild,
  FaUserAlt,
  FaLeaf,
  FaDumbbell,
  FaCheckCircle,
} from "react-icons/fa";

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white pt-20">

      {/* ===== TÍTULO ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-[#075B5D]"
      >
        Nuestros Servicios
      </motion.h2>

      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Programas nutricionales personalizados, adaptados a tu etapa de vida,
        objetivos y necesidades.
      </p>


      {/* ===== PROGRAMAS ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-semibold text-[#075B5D] mb-10 text-center"
        >
          Programas nutricionales según tu objetivo
        </motion.h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programas.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#CCABDA]/10 p-6 rounded-2xl shadow-sm"
            >
              <item.icon className="text-[#6FC5CC] text-3xl mb-4" />
              <h4 className="text-lg font-semibold text-[#075B5D]">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== LO MEJOR PARA TI ===== */}
      <div className="bg-[#075B5D] mt-24 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white"
          >
            Lo mejor para ti
          </motion.h3>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Un enfoque integral para acompañarte de forma segura, humana
            y sostenible.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {beneficios.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/10 p-5 rounded-xl text-left"
              >
                <FaCheckCircle className="text-[#6FC5CC] text-xl mt-1" />
                <p className="text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}

/* ===== DATA ===== */

const programas = [
  {
    title: "Sobrepeso y obesidad",
    desc: "Reducción de peso con enfoque saludable y sostenible.",
    icon: FaAppleAlt,
  },
  {
    title: "Ganancia de masa muscular",
    desc: "Planificación nutricional orientada al rendimiento y fuerza.",
    icon: FaDumbbell,
  },
  {
    title: "Alimentación complementaria",
    desc: "Introducción segura y adecuada de alimentos en la infancia.",
    icon: FaChild,
  },
  {
    title: "Niños y adolescentes",
    desc: "Nutrición para el crecimiento y desarrollo saludable.",
    icon: FaChild,
  },
  {
    title: "Adultos y adultos mayores",
    desc: "Prevención y manejo nutricional en cada etapa de vida.",
    icon: FaUserAlt,
  },
  {
    title: "Alimentación vegetariana",
    desc: "Planes balanceados, completos y basados en evidencia.",
    icon: FaLeaf,
  },
];

const beneficios = [
  "Evaluación nutricional (antropométrica, bioquímica, clínica y dietética)",
  "Definición y trazado de objetivos personalizados",
  "Plan nutricional adaptado a tu estilo de vida",
  "Acompañamiento constante a lo largo de tu proceso",
];
