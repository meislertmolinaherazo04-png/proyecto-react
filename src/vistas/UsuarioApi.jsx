import { useState, useEffect } from "react";
 
function UsuariosApi() {
 
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
 
    async function obtenerUsuarios() {
 
      try {
 
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
 
        if (!respuesta.ok) {
          throw new Error("No fue posible obtener los usuarios.");
        }
 
        const datos = await respuesta.json();
 
        setUsuarios(datos);
 
      } catch (error) {
 
        setError("No pudimos cargar los usuarios. Intenta nuevamente.");
 
      } finally {
 
        setCargando(false);
 
      }
    }
 
    obtenerUsuarios();
 
  }, []);
 
  if (cargando) {
    return <p>Cargando usuarios...</p>;
  }
 
  if (error) {
    return <p>{error}</p>;
  }
 
  return (
<section className="usuarios-api">
 
      <h2>Usuarios de prueba</h2>
 
      <p>
        Esta información viene de una API externa.
</p>
 
      <div className="lista-usuarios">
 
        {usuarios.map((usuario) => (
 
          <article
            className="tarjeta-usuario"
            key={usuario.id}
>
 
            <h3>{usuario.name}</h3>
 
            <p>{usuario.email}</p>
 
          </article>
 
        ))}
 
      </div>
 
    </section>
  );
}
 
export default UsuariosApi;