function Projetcs() {
  const proyectos = [
    {
      titulo: "Sistema IoT",
      descripcion: "Proyecto de monitoreo de temperatura y humedad a modo de investigación e introducción al ecosistema IoT en el marco del lanzamiento del Laboratorio IoT de la Licenciatura en Sistemas de la Universidad Nacional de Lanús (UNLa).",
      tecnologias: ["ESP32", "MQTT", "MongoDB", "React", "NestJS"],
      enlace: "https://github.com/unla-investigacion-desarrollo/ecosistema-iot"
    },
    {
      titulo: "Cultura Jean",
      descripcion: "E-commerce de ropa con gestión de stock, compras (simuladas), clientes y pedidos de aprovisionamiento",
      tecnologias: ["Java", "Spring", "PostgreSQL", "HTML", "JS"],
      enlace: "https://github.com/MaximilianoCalahorra/CulturaJean"
    },
    {
      titulo: "Sneakers Club",
      descripcion: "E-commerce de zapatillas con gestión de stock, compras (simuladas), clientes y pedidos de aprovisionamiento. Fue desarrollado en grupo como resolución a un trabajo práctico de la materia Orientación a Objetos II de la carrera",
      tecnologias: ["Java", "Spring", "MySQL", "HTML", "CSS", "JS"],
      enlace: "https://github.com/MaximilianoCalahorra/SneakersClub"
    },
    {
      titulo: "Clon de Netflix",
      descripcion: "Sitio web que ofrece catálogo de películas, reproducción de las mismas y logueo. Fue desarrollado grupalmente como resolución a un trabajo práctico de la materia Proyecto de Software de la carrera",
      tecnologias: ["Java", "Spring", "MySQL", "HTML", "CSS", "JS"],
      enlace: "https://github.com/MaximilianoCalahorra/Tp-Proyecto-de-Software-Grupo-5"
    },
    {
      titulo: "ElectroStore",
      descripcion: "E-commerce de tecnología con gestión de stock y compras (simuladas), y logueo. Fue desarrollado individualmente como resolución a un trabajo práctico de la materia Seminario de Lenguajes (PHP) de la carrera",
      tecnologias: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS"],
      enlace: "https://github.com/MaximilianoCalahorra/web-electrostore"
    },
    {
      titulo: "Pruebas unitarias y de integración",
      descripcion: "El foco no es el proyecto (gestión en memoria de productos, clientes, tarjetas y carritos de un supermercado), sino las pruebas unitarias y de integración realizadas sobre él. Fue desarrollado grupalmente como resolución a un trabajo práctico de la materia Prueba de Software de la carrera",
      tecnologias: ["Java", "JUnit5", "Mockito"],
      enlace: "https://github.com/MaximilianoCalahorra/supermercado-prueba_de_software"
    },
    {
      titulo: "Prode Liga Argentina 2023",
      descripcion: "Juego multijugador por consola que genera resultados de distintos partidos y asigna puntos a los jugadores en base a sus predicciones, confeccionando un ranking.",
      tecnologias: ["C"],
      enlace: "https://github.com/MaximilianoCalahorra/prode-liga-argentina-2023"
    },
    {
      titulo: "Quini 6",
      descripcion: "Juego de azar por consola que genera partidas ganadoras y entrega premios en base a la cantidad de aciertos del cartón elegido por el jugador.",
      tecnologias: ["C"],
      enlace: "https://github.com/MaximilianoCalahorra/quini6"
    }
  ]
  
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <p><strong>Tecnologías:</strong> {proyecto.tecnologias.join(", ")}</p>
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projetcs;