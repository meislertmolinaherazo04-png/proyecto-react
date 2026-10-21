import Header from "./componentes/Header"
import Curso from "./componentes/Curso"
import Footer from "./componentes/Footer"
import NavBar from "./componentes/NavBar"
import RegistroAprendiz from "./componentes/RegistroAprendiz"
import PresentacionAprendiz from "./componentes/PresentacionAprendiz"


function App() {

  function saludar() {
    alert("¡Bienvenido al Centro nacional Colombo Aleman!");
  }
  return (
    <div> 
      <Header />
      <NavBar /> 
      
      <main id="inicio">
        <h2>Bienvenidos a nuestro portal de formacion</h2>

        <button onClick={saludar}>
          Haz click aqui
        </button>

        <section id="cursos">
          <h2>Nuestros cursos</h2>
          <p>Ofrecemos una variedad de cursos para ayudarte a desarrollar tus habilidades y alcanzar tus metas profesionales.</p>

          <Curso 
            nombre="Desarrollo web"
            descripcion="Aprende a crear paginas web modernas y atractivas."
            />
          <Curso 
            nombre="Bases de Datos"
            descripcion="Aprende a gestionar y manipular bases de datos."
            />
          <Curso 
            nombre="Inteligencia Artificiañ"
            descripcion="Aprende a desarrollar soluciones basadas en inteligencia artifical."
            />

          <Curso 
            nombre="Programacion con java"
            descripcion="Aprende a usar java."
            />

          <Curso 
            nombre="Curso de Python"
            descripcion="Aprende a usar python."
            />

        </section>

        <section id="nosotros">
          <h2>Sobre nosotros</h2>
          <p>Somos un centro de formación comprometido con el desarrollo de nuestros estudiantes y la excelencia educativa.</p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>Puedes contactarnos a través de nuestro correo electrónico o número de teléfono para mas informacion sobre nuestros cursos.</p>
        </section>

        </main>

        <h2>Otros cursos</h2>
        <p>Explora más opciones de aprendizaje en nuestra plataforma.</p>
        
        <RegistroAprendiz/>

        <PresentacionAprendiz/>

        <Footer />
        

    </div>
  );
}

export default App;
