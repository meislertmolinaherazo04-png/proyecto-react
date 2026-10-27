import { useEffect, useState } from "react";

function Competencias() {
    const [competencias, setCompetencias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((respuesta) => {
                if (!respuesta.ok){
                    throw new Error("No se pudo consultar la información. ");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setCompetencias(datos);
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
            <h2>Competencias (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {competencias.map((competencia) => (
                        <article key={competencia.id}>
                            <h3>{competencia.title}</h3>
                            <p>tarea completada: {competencia.completed ? "SI" : "NO"}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Competencias;
