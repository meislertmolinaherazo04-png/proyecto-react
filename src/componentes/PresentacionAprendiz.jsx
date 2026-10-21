import { useState } from "react";

function PresentacionAprendiz() {
    const [nombre, setNombre] = useState("");
    const [curso, setCurso] = useState("");
    const [mensaje, setMensaje]= useState("");
    
    function manejarEnvio(evento) {
        evento.preventDefault();

        if (nombre.trim() === ""  || curso.trim() === "") {
            setMensaje(`por favor, completar los campos.`)
            return; 
        }

        setMensaje(`¡Formulario enviado Nombre: ${nombre}, curso de interés: ${curso}.!`);
        setNombre("");
        setCurso("");
    }
    return (
        <div>

            <h2>Mi presentación</h2>

            <form onSubmit={manejarEnvio}>

            <label htmlFor="nombre Presentacion">Escribe tu nombre:</label>


            <input
                id="nombrePresentacion"
                type="text"
                value={nombre}
                onChange={(evento) => setNombre (evento.target.value)}
                placeholder="Ejemplo: Gabriel"
            />

            <br />

            <label htmlFor="cursoPresentacion">¿Qué curso te interesa?</label>

            <input
                id="cursoPresentacion"
                type="text"
                value={curso}
                onChange={(evento) => setCurso(evento.target.value)}
                placeholder="Ejemplo: React"
            />

            <br />
            <br />

            <button type="submit">
                Enviar formulario
            </button>

            </form>
            {mensaje !== "" && (
                <p>{mensaje}</p>
            )}

        </div>
    );
}

export default PresentacionAprendiz;