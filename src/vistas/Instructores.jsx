import { useEffect, useState } from "react";

function Instructores() {
    const [instructores, setInstructores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
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

    const enviarPatch = (e) => {
        e.preventDefault();
        setEnviando(true);
        setMensaje("");

        fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: nuevoTitulo
            })
        })
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("Falló la petición PATCH");
            }
            return respuesta.json();
        })
        .then((datos) => {
            setMensaje(`¡PATCH exitoso! Título parcial actualizado a: "${datos.title}"`);
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
            <h2>Instructores - Actualización Parcial (PATCH)</h2>

            <form onSubmit={enviarPatch} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
                <div>
                    <label>Nuevo Título (Cambiar solo este campo): </label>
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

            <h2>Instructores (datos de prueba - GET)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {instructores.map((instructor) => (
                        <article key={instructor.id} style={{ border: "1px solid #eee", padding: "10px", margin: "10px 0" }}>
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