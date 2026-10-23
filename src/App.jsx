import { useState } from "react";
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Header from "./componentes/Header";
import Navbar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import GestionCursos from "./componentes/GestionCursos";
 
import Inicio from "./vistas/Inicio";
import Cursos from "./vistas/Cursos";
import Registro from "./vistas/Registros";
 
function App() {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      nombre: "Diseño Web",
      descripcion: "Creación de interfaces modernas y atractivas.",
      informacion: "Aprenderás HTML, CSS y fundamentos de diseño web.",
    },
    {
      id: 2,
      nombre: "Desarrollo de Software",
      descripcion: "Construcción de aplicaciones tecnológicas.",
      informacion: "Aprenderás programación y desarrollo de aplicaciones.",
    },
    {
      id: 3,
      nombre: "Bases de Datos",
      descripcion: "Diseño y administración de datos.",
      informacion: "Aprenderás modelado, normalización y SQL.",
    },
  ]);
 
  return (
    <BrowserRouter>
      <Header />
 
      <Navbar />
 
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
 
          <Route path="/cursos" element={<Cursos cursos={cursos} />} />
 
          <Route path="/registro" element={<Registro cursos={cursos} />} />
 
          <Route
            path="/administrar-cursos"
            element={<GestionCursos cursos={cursos} setCursos={setCursos} />}
          />
 
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>
 
      <Footer />
    </BrowserRouter>
  );
}
 
export default App;
 