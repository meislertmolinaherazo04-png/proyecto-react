import { useEffect, useState } from "react";

function Aprendices() {
    const [aprendices, setAprendices] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviando, setEnviando] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => {
                if (!respuesta.ok){
                    throw new Error("No se pudo consultar la información. ");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setAprendices(datos);
            })
            .catch(() => {
                setError("No fue posible cargar los datos. Intenta nuevamente. ");
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    const enviarPost = (evento) => {
        evento.preventDefault();
        setMensaje("");
        setEnviando(true);
        

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: nombre,
                body: correo,
                userId: 1
            })
        })
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("No se pudo enviar el registro.");
            }
            return respuesta.json();
        })
        .then((datos) => {
            setMensaje(`Solicitud exitosa. Id de prueba: ${datos.id}`);
            setNombre("");
            setCorreo("");
        })
        .catch(() => {
            setMensaje("Ocurrió un error al enviar los datos.");
        })
        .finally(() => {
            setEnviado(false);
        });
    }

    return (

        <section>
            <h2>Registrar aprendiz (prueba)</h2>

            <form>
                <div>
                    <label>Nombre completo</label>
                    <input 
                        value={nombre}
                        onChange={(evento) => setNombre(evento.target.value)}
                        required
                    /> 
                </div>

                <div>
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(evento) => setCorreo(evento.target.value)}
                        required
                    />
                </div>
                <button type="submit" onClick={enviarPost} disabled={enviando}>
                    {enviando ? "Enviado..." : "Registrar"}
                </button>
            </form>

            {mensaje && <p>{mensaje}</p>}

            <hr />

            <h2>Aprendices (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {aprendices.map((aprendiz) => (
                        <article key={aprendiz.id}>
                            <h3>{aprendiz.name}</h3>
                            <p>Correo: {aprendiz.email}</p>
                            <p>Ciudad: {aprendiz.address.city}</p>
                        </article>
                    ))}
                </div>
            )}

            
        </section>
    );
}

export default Aprendices;