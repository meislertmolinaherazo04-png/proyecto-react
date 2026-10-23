function Contacto() {
    return (
        <section id="contacto">
            <h2>Contáctanos</h2>

            <div className="contenedor-contacto">
                <p>¿Tienes alguna duda o quieres saber más sobre nuestros servicios? Comunícate con nosotros a través de nuestros canales:</p>
                
                <ul className="lista-contacto">
                    <li>
                        <strong>Correo:</strong> contacto@tudominio.com
                    </li>
                    <li>
                        <strong>Teléfono / WhatsApp:</strong> +57 300 123 4567
                    </li>
                    <li>
                        <strong>Ubicación:</strong> Barranquilla, Colombia
                    </li>
                    <li>
                        <strong>Redes Sociales:</strong> @SenaBarranquilla
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contacto;