import { useEffect, useState } from "react";

function Evaluaciones() {
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((respuesta) => {
                if (!respuesta.ok){
                    throw new Error("No se pudo consultar la información. ");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setEvaluaciones(datos);
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
            <h2>Evaluaciones (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {evaluaciones.map((evaluacion) => (
                        <article key={evaluacion.id}>
                            <h3>{evaluacion.name}</h3>
                            <p>Correo: {evaluacion.email}</p>
                            <p>Comentario: {evaluacion.body}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Evaluaciones;