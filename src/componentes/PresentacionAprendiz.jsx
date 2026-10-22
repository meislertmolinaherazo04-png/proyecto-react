import { useState } from "react";

function PresentacionAprendiz() {
    const [nombre, setNombre] = useState("");
    const [curso, setCurso] = useState("");
    const [mensaje, setMensaje]= useState("");
    const [datosGuardados, setDatosGuardados] = useState ({nombre: "", curso: ""});
    const [mostrarDetalles, setMostrarDetalles] = useState(false);
    
    function manejarEnvio(evento) {
        evento.preventDefault();

        if (nombre.trim() === ""  || curso.trim() === "") {
            setMensaje(`por favor, completar los campos.`)
            return; 
        }

        setDatosGuardados({ nombre, curso });
        setMensaje(`¡Formulario enviado.!`);
        setNombre("");
        setCurso("");
    }

    function alternarInformacion(){
        if (!datosGuardados.nombre || !datosGuardados.curso) {
            setMensaje("Aun no has enviado informacion para mostrar.");
            return;
        }

        setMensaje("");
        setMostrarDetalles(!mostrarDetalles);
    }

    function limpiarFormulario() {
        setNombre("");
        setCurso("");
        setMensaje("");
    }
    return (
        <div>

            <h2>Mi presentación</h2>

            <form onSubmit={manejarEnvio}>

            <label htmlFor="nombrePresentacion">Escribe tu nombre:</label>


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

            <button type="button" onClick={alternarInformacion}>
                {mostrarDetalles ? "Ocultar informacion" : "Mostrar información"}
            </button>

            <button type="button" onClick={limpiarFormulario}>
                Limpiar
            </button>
            </form>
            {mensaje !== "" && (
                <p>{mensaje}</p>
            )}
            
            {mostrarDetalles && (
            <div>
                <p><strong>Nombre:</strong> {datosGuardados.nombre}</p>
                <p><strong>Curso de interés:</strong> {datosGuardados.curso}</p>
            </div>
            )}
        </div>
            
    );
}

export default PresentacionAprendiz;