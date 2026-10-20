function PresentacionAprendiz() {
    const [nombre, setNombre] = useState("");
    const [curso, setCurso] = useState("");
    
    return (
    <div>

        <h2>Mi presentación</h2>


        <label htmlFor="nombre Presentacion">Escribe tu nombre:</label>


        <input
            id="nombrePresentacion"
            type="text"
            value={nombre}
            onChange={(evento) => setNombre (evento.target.value)}
            placeholder="Ejemplo: Gabriel"
        />


        <br />
        <br />


        <label htmlFor="cursoPresentacion">¿Qué curso te interesa?</label>


        <input
            id="cursoPresentacion"
            type="text"
            value={curso}
            onChange={(evento) => setCurso(evento.target.value)}
            placeholder="Ejemplo: React"
        />

        <h3>Mis datos</h3>

        <p>Mi nombre es: {nombre}</p>

        <p>Me interesa aprender: {curso}</p>

        <p>
            ¡Hola, (nombre)! Te interesa aprender (curso).
        </p>

    </div>
    );
}

export default PresentacionAprendiz;