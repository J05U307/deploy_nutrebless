import { motion } from "framer-motion";
import perfil from "../assets/fer.webp";

/* ===== VARIANTES ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="overflow-hidden">

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* ===== TÍTULO ===== */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#075B5D]"
        >
          Sobre mí
        </motion.h1>

        <div className="w-24 h-1 bg-[#6FC5CC] mx-auto mt-4 rounded-full" />

        {/* ================= PERFIL PROFESIONAL ================= */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#6FC5CC]/20 rounded-3xl rotate-3" />
              <motion.img
                src={perfil}
                alt="Lic. Yessica Cusquisibán"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#075B5D]">
              Yessica Cusquisibán Alcantara
            </h2>

            <p className="text-[#6FC5CC] font-semibold tracking-wide">
              Nutricionista · CNP 9560
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              Licenciada en Nutrición Humana, egresada de la <strong>Universidad Peruana Unión</strong>,
              con formación continua en soporte nutricional, alimentación vegetariana, 
              alimentación complementaria, nutrición en paciente crítico y síndrome de
               realimentación..
            </p>

            <p className="text-gray-700 leading-relaxed text-justify">
              Colegiada en el Consejo Regional XX – Cajamarca del Colegio de
              Nutricionistas del Perú, comprometida con una atención ética,
              empática y basada en evidencia científica.
            </p>
          </motion.div>
        </div>

        {/* ================= VOCACIÓN ================= */}
        <div className="mt-28 max-w-4xl mx-auto">

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#075B5D]"
          >
            Mi vocación en nutrición
          </motion.h3>

          <motion.div className="mt-10 space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-justify"
            >
              Hola, mi nombre es Yessica Cusquisibán Alcantara, soy nutricionista y les voy a contar un poco sobre mí. 

            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-justify"
            >
              Nací en Cajamarca, Perú; donde realicé mis estudios primarios y secundarios. Desde adolescente tuve el interés de estudiar una carrera que me permita servir a las personas a través de ella; por ello, me incliné a estudiar una carrera de salud, Nutrición. Es así que realicé mis estudios en la Universidad Peruana Unión, durante esta etapa pude entender mejor importancia que tiene la nutrición en todas las etapas de vida, más aún siendo una carrera preventiva promocional, y saber que es mejor prevenir una enfermedad antes que tratarla.

            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-justify"
            >
              Realicé mi internado clínico en el Hospital Almenara Irigoyen, el internado comunitario en Iquitos; asimismo mi SERUMS en la ciudad de Bagua, y esta experiencia me ha llevado a considerar que mi principal objetivo como nutricionista es ayudar a otras personas a ganar salud de manera integral (físico, mental, social y espiritual).
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-gray-700 leading-relaxed text-justify"
            >
              Ello me ayudó a decidir emprender este proyecto <strong>Nutre Bless</strong>, 
              un espacio que se enfoque en tu salud y bienestar. 
              Quiero acompañarte a construir hábitos saludables y un estilo de vida que disfrutes, 
              que se mantenga para siempre y que tu alimentación te haga sentir bien, pero no a base de restricciones. 
              

            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mt-14 text-center text-xl md:text-2xl font-semibold text-[#075B5D]"
          >
            “Comer bien es el primer acto de amor propio”
          </motion.p>
        </div>


      </div>

      {/* ===== FRANJA VERDE FULL WIDTH ===== */}
      <div className="w-full bg-[#075B5D] py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Más que nutrición, un acompañamiento real
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-white/80 max-w-3xl mx-auto text-lg"
        >
          Cada persona es única y su proceso también.
          En Nutre Bless te acompañamos con ciencia, empatía y compromiso
          para lograr cambios reales y sostenibles.
        </motion.p>
      </div>


    </section>
  );
}
