import { useState, useEffect } from "react";
 
import { BrowserRouter,Routes,Route } from "react-router-dom";
 
import Header from "./componentes/Header";
import Navbar from "./componentes/NavBar";
import Footer from "./componentes/Footer";
import GestionCursos from "./componentes/GestionCursos";
 
import Inicio from "./vistas/inicio";
import Cursos from "./vistas/cursos";
import Registro from "./vistas/Registros";
import AcercaDe from "./vistas/AcercaDe";
import Usuarios from "./vistas/Usuarios";
import Aprendices from "./vistas/Aprendices";
import Instructores from "./vistas/Instructores"
import Fichas from "./vistas/Fichas";
import Competencias from "./vistas/Competencias";
import Evaluaciones from "./vistas/Evaluaciones";
import RegistroAprendizAPI from "./vistas/RegistroAprendizAPI.jsx";

 
function App() {
 
  // 1. Cargar los cursos guardados o utilizar los iniciales
  const [cursos, setCursos] = useState(() => {
 
    const cursosGuardados = localStorage.getItem("cursos");
 
    if (cursosGuardados !== null) {
      try {
        return JSON.parse(cursosGuardados);
      } catch {
        console.warn("No se pudieron leer los cursos guardados.");
      }
    }
 
    return [
      {
        id: 1,
        nombre: "Diseño Web",
        descripcion:
          "Creación de interfaces modernas y atractivas.",
        informacion:
          "Aprenderás HTML, CSS y fundamentos de diseño web."
      },
      {
        id: 2,
        nombre: "Desarrollo de Software",
        descripcion:
          "Construcción de aplicaciones y soluciones tecnológicas.",
        informacion:
          "Aprenderás programación y desarrollo de aplicaciones."
      },
      {
        id: 3,
        nombre: "Bases de Datos",
        descripcion:
          "Diseño y administración de datos.",
        informacion:
          "Aprenderás modelado, normalización y SQL."
      }
    ];
  });
 
  // 2. Guardar los cursos cuando cambie la lista
  useEffect(() => {
 
    localStorage.setItem(
      "cursos",
      JSON.stringify(cursos)
    );
 
  }, [cursos]);
 
  // 3. Mostrar la aplicación
  return (
    <BrowserRouter>
 
      <Header />
 
      <Navbar />
 
      <main>
 
        <Routes>
 
          <Route path="/" element={<Inicio /> } />
 
          <Route path="/cursos" element={ <Cursos cursos={cursos} /> } />
 
          <Route path="/registro" element={ <Registro cursos={cursos} /> } />

          <Route path="/usuarios" element={ <Usuarios  /> } />
 
          <Route path="/administrar-cursos" element={ <GestionCursos cursos={cursos} setCursos={setCursos} /> } />
 
          <Route path="/registro-api" element={ <RegistroAprendizAPI cursos={cursos} setCursos={setCursos} /> } />
 
          <Route path="*" element={ <h2>Página no encontrada</h2> } />

          <Route path="/aprendices" element={<Aprendices />} /> 

          <Route path="/instructores" element={<Instructores />} /> 

          <Route path="/fichas" element={<Fichas />} />

          <Route path="/competencias" element={<Competencias />} />

          <Route path="/evaluaciones" element={<Evaluaciones />} />

          <Route path="/acerca-de" element={ <AcercaDe /> } />

        </Routes>
 
      </main>
 
      <Footer />
 
    </BrowserRouter>
  );
}
 
export default App;