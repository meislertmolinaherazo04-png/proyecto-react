import { Link } from "react-router-dom"
 
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
 
      <Link to="/cursos">Cursos</Link>
 
      <Link to="/registro">Registro</Link>
 
      <Link to="/administrar-cursos">Administrar Cursos</Link>

      <Link to="/acerca-de">Acerca de</Link>
    </nav>
  );
}
 
export default Navbar;