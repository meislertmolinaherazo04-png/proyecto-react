import { useState } from "react";

function Curso (props) {

    const [interesados, setInteresados] = useState(0);
    
    const [registrarInscripcion, setRegistrarme] = useState(0);
    
    function agregarinteresado(){
        setInteresados(interesados + 1);
    }

    function mostrarMensaje() {
        alert(`¡Bienvenido al curso de ${props.nombre}!`);
    }

    function mostrarInscripcion() {
        alert(`¡Se a inscrito a ${props.nombre}!`);
    }

    function agregarRegistro(){
        setRegistrarme(registrarInscripcion + 1);
    }
    return (
        <div>
            <h3>{props.nombre}</h3>

            <p>{props.descripcion}</p>

            <p>personas interesadasa: {interesados}</p>

            

            <button onClick={mostrarMensaje}>
                Ver información
            </button>

            <button onClick={mostrarInscripcion}>
                Inscribirme
            </button>

            <button onClick={agregarinteresado}>
                Me interesa
            </button>
            
            <p>personas registradas: {registrarInscripcion}</p>
            
            <button onClick={agregarRegistro}>
                Registrarme
            </button>
        </div>
    );
}

export default Curso;