import { useEffect, useState } from "react";

function Fichas() {
    const [fichas, setFichas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

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

    return (
        <section>
            <h2>Fichas (datos de prueba)</h2>

            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}

            {!cargando && !error && (
                <div>
                    {fichas.map((ficha) => (
                        <article key={ficha.id}>
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