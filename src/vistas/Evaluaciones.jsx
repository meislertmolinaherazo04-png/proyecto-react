import { useEffect, useState } from "react";

function Evaluaciones() {
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    // Estados para la prueba de DELETE
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");

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

    // Acción DELETE: Solicitar eliminación (Actividad D)
    const eliminarRegistro = () => {
        // Paso 25: Pedir confirmación con window.confirm()[cite: 4]
        if (!window.confirm("¿Estás seguro de solicitar la eliminación de este registro?")) {
            return;
        }

        // Paso 27: Desactivar botón mientras la solicitud está en curso[cite: 4]
        setEnviando(true);
        setMensaje("");

        // Pasos 23 y 24: URL de prueba y method: 'DELETE'[cite: 4]
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        })
        .then((respuesta) => {
            // Paso 26: Comprobar respuesta.ok[cite: 4]
            if (!respuesta.ok) {
                throw new Error("Falló la eliminación");
            }
            // Nota: algunas respuestas DELETE no tienen cuerpo JSON[cite: 4]
            setMensaje("¡DELETE exitoso! Solicitud de eliminación completada.");
        })
        .catch(() => {
            setMensaje("Hubo un error al intentar eliminar el registro.");
        })
        .finally(() => {
            setEnviando(false); // Reactivar botón
        });
    };

    return (
        <section style={{ padding: "20px" }}>
            <h2>Evaluaciones - Solicitud de Eliminación (DELETE)</h2>

            {/* Sección del botón DELETE */}
            <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
                <button type="button" onClick={eliminarRegistro} disabled={enviando}>
                    {enviando ? "Eliminando..." : "Eliminar Registro (ID 1)"}
                </button>
                {mensaje && <p style={{ marginTop: "10px" }}><strong>{mensaje}</strong></p>}
            </div>

            <hr />

            <h2>Evaluaciones (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {evaluaciones.map((evaluacion) => (
                        <article key={evaluacion.id} style={{ border: "1px solid #eee", padding: "10px", margin: "10px 0" }}>
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