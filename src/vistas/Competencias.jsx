import { useEffect, useState } from "react";

function Competencias() {
    const [competencias, setCompetencias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    // Estados para la prueba de PATCH
    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");

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

    // Acción PATCH: Modificar solo el título del registro ID 1
    const enviarPatch = (e) => {
        e.preventDefault();
        setEnviando(true);
        setMensaje("");

        fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: nuevoTitulo // Envía únicamente el campo a modificar[cite: 3]
            })
        })
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Falló la petición PATCH");
            }
            return respuesta.json();
        })
        .then((datos) => {
            setMensaje(`¡PATCH exitoso! Título actualizado a: "${datos.title}"`);
            setNuevoTitulo("");
        })
        .catch(() => {
            setMensaje("Hubo un error al realizar la actualización parcial.");
        })
        .finally(() => {
            setEnviando(false);
        });
    };

    return (
        <section style={{ padding: "20px" }}>
            <h2>Competencias - Actualización Parcial (PATCH)</h2>

            {/* Formulario PATCH */}
            <form onSubmit={enviarPatch} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
                <div>
                    <label>Nuevo Título (ID 1): </label>
                    <input 
                        type="text" 
                        value={nuevoTitulo} 
                        onChange={(e) => setNuevoTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" disabled={enviando} style={{ marginTop: "10px" }}>
                    {enviando ? "Enviando PATCH..." : "Actualizar con PATCH"}
                </button>
            </form>

            {mensaje && <p><strong>{mensaje}</strong></p>}

            <hr />

            <h2>Competencias (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {competencias.map((competencia) => (
                        <article key={competencia.id} style={{ border: "1px solid #eee", padding: "10px", margin: "10px 0" }}>
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