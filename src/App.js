import "./App.css";
import Testimonio from "./components/Testimonio.js";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto es lo que nuestros alumnos dicen de nostros</h1>
        <Testimonio 
          nombre="Her"
          pais=" mi Vida"
          imagen="her"
          cargo="Reyna "
          empresa="Corazon"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."/>
        <Testimonio 
        nombre="Sarah"
        pais="Singapur"
        imagen="sarah"
        cargo="Ingeniera de Software"
        empresa="Amazon"
        testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."/>  
        <Testimonio 
        nombre="Sarah"
        pais="Singapur"
        imagen="emma"
        cargo="Ingeniera de Software"
        empresa="Amazon"
        testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."/>  
      </div>
    </div>
  );
}

export default App;
