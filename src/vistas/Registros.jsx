import PresentacionAprendiz from "../componentes/PresentacionAprendiz";
 
function Registro({ cursos }) {
  return (
    <section>
      <h2>Registro de aprendices</h2>
 
      <PresentacionAprendiz cursos={cursos} />
    </section>
  );
}
 
export default Registro;