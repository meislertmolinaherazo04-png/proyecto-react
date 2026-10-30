import { useEffect, useState } from "react";

function Fichas() {
    const [fichas, setFichas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevoContenido, setNuevoContenido] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts ")
            .then((respuesta) => {
                if (!respuesta.ok){
                    throw new Error("No se pudo consultar la información. ");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setFichas(datos);
            })
            .catch(() => {
                setError("No fue posible cargar los datos. Intenta nuevamente. ");
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    const enviarPut = (e) => {
        e.preventDefault();
        setEnviando(true);
        setMensaje("");

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT", // Método PUT[cite: 3]
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: nuevoTitulo,
                body: nuevoContenido,
                userId: 1
            })
        })
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Falló la petición PUT");
            }
            return respuesta.json();
        })
        .then((datos) => {
            setMensaje(`¡PUT exitoso! Registro actualizado. Título: "${datos.title}"`);
            setNuevoTitulo("");
            setNuevoContenido("");
        })
        .catch(() => {
            setMensaje("Hubo un error al actualizar la versión con PUT.");
        })
        .finally(() => {
            setEnviando(false);
        });
    };

    return (
        <section style={{ padding: "20px" }}>
            <h2>Fichas - Actualización Completa (PUT)</h2>

            {/* Formulario de prueba para PUT */}
            <form onSubmit={enviarPut} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
                <div>
                    <label>Nuevo Título: </label>
                    <input 
                        type="text" 
                        value={nuevoTitulo} 
                        onChange={(e) => setNuevoTitulo(e.target.value)} 
                        required 
                    />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label>Nuevo Contenido: </label>
                    <input 
                        type="text" 
                        value={nuevoContenido} 
                        onChange={(e) => setNuevoContenido(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" disabled={enviando} style={{ marginTop: "10px" }}>
                    {enviando ? "Enviando PUT..." : "Actualizar con PUT (ID 1)"}
                </button>
            </form>

            {mensaje && <p><strong>{mensaje}</strong></p>}

            <hr />

            <h2>Fichas (datos de prueba - GET)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {fichas.map((ficha) => (
                        <article key={ficha.id} style={{ border: "1px solid #eee", padding: "10px", margin: "10px 0" }}>
                            <h3>{ficha.title}</h3>
                            <p>{ficha.body}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Fichas;