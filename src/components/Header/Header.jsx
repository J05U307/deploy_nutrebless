import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo_blanco.webp";
import { scrollToSection } from "../../utils/scrollToSection";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);



  const menuItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Nosotros", id: "nosotros" },
    { label: "Servicios", id: "servicios" },
    { label: "Sobre mí", id: "sobre-mi" },
    { label: "Paquetes", id: "paquetes" },
    { label: "Contacto", id: "contacto" },
  ];


  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#CCABDA] text-white shadow-md sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3"
          onClick={() => scrollToSection("inicio")}>
          <img
            src={logo}
            alt="NutreBless logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold">
            {/*Nutre bless*/}
          </span>
        </div>


        {/* Menú */}
        <ul className="hidden md:flex gap-6 font-medium">
          {menuItems.map(item => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-[#6FC5CC] transition-colors"
            >
              {item.label}
            </li>
          ))}

        </ul>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61582499979459"
            className="hover:text-[#6FC5CC] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/nutrebless?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:text-[#6FC5CC] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/51984834787?text=Hola%20%F0%9F%91%8B%2C%20vengo%20desde%20la%20p%C3%A1gina%20web%20de%20Nutre%20Bless%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20una%20consulta%20nutricional.%20Gracias%20%F0%9F%98%8A"
            className="hover:text-[#6FC5CC] transition-colors"
            aria-label="Whatsapp"
          >
            <FaWhatsapp />
          </a>

          
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>


      </nav>

      {menuOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#CCABDA] px-6 pb-4 flex flex-col gap-4 font-medium"
        >
          {menuItems.map(item => (
            <li
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMenuOpen(false); // 👈 cerrar menú
              }}
              className="cursor-pointer hover:text-[#6FC5CC]"
            >
              {item.label}
            </li>
          ))}



        </motion.ul>
      )}

    </motion.header>
  );
}
