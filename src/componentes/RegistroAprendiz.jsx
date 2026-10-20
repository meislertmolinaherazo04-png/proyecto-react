import { useState } from "react";

function RegistroAprendiz() {
const [nombre, setNombre] = useState("");

function mostrarMensaje() {
        
        alert(`Bienvenido, ${nombre}`);
    }
    return (
        <div>
                <h2>Registro de Aprendiz</h2>
                <label> Escribe tu nombre:</label>

            <input
                type="text"
                placeholder="escribe tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            
            <button onClick={mostrarMensaje}>
                registrarme
            </button>
            
        </div>
    );
}

export default RegistroAprendiz;