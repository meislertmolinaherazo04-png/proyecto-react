import { Link } from "react-router-dom"
 
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
 
      <Link to="/cursos">Cursos</Link>
 
      <Link to="/registro">Registro</Link>
 
      <Link to="/administrar-cursos">Administrar Cursos</Link>

      <Link to="/usuarios">Usuarios</Link>

      <Link to="/registro-api">Registro API</Link>

      <Link to="/aprendices">Aprendices</Link> 

      <Link to="/instructores">Instructores</Link> 

      <Link to="/fichas">Fichas</Link> 

      <Link to="/competencias">Competencias</Link>

      <Link to="/evaluaciones">Evaluaciones</Link>

      <Link to="/acerca-de">Acerca de</Link>

    </nav>
  );
}
 
export default Navbar;