import { useEffect, useState } from "react";

function Aprendices() {
    const [aprendices, setAprendices] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

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

    return (
        <section>
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