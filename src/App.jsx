import { useState } from 'react'
import { motion } from "framer-motion";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Nosotros from './pages/Nosotros';
import Paquetes from './pages/Paquetes';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';



function App() {

  return (
    <MainLayout>
      <Home></Home>
      <Nosotros></Nosotros>
      <Servicios></Servicios>
      <SobreMi></SobreMi>
      <Paquetes></Paquetes>
      <Contacto></Contacto>
    </MainLayout>





  );
}

export default App
