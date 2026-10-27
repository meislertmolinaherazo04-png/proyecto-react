import { useEffect, useState } from "react";

function Instructores() {
    const [instructores, setInstructores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users ")
            .then((respuesta) => {
                if (!respuesta.ok){
                    throw new Error("No se pudo consultar la información. ");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setInstructores(datos);
            })
            .catch(() => {
                setError("No fue posible cargar los datos. Intenta nuevamente. ");
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    return (
        <section>
            <h2>Instructores (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {instructores.map((instructor) => (
                        <article key={instructor.id}>
                            <h3>{instructor.name}</h3>
                            <p>Correo: {instructor.email}</p>
                            <p>Ciudad: {instructor.address.city}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Instructores;