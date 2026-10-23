import { useEffect, useState } from "react";

function EjemploEffect () {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("El contador cambio");
    }, [contador]);
    
    return (
        <section>
            <h2>Contador</h2>

            <p>Contador: {contador}</p>

            <button onClick={() => setContador(contador + 1)}>
                Aumentar
            </button>
        </section>
    );
}

export default EjemploEffect;