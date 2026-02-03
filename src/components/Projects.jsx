function Projetcs() {
  const proyectos = [
    {
      titulo: "ONG Empuje Comunitario - Backend",
      descripcion: "Implementación de un sistema distribuido que permite a una ONG gestionar sus miembros, eventos solidarios e inventarios de donaciones. Además, le ofrece a la ONG la capacidad de interactuar con otras organizacions para que puedan colaborar entre ellas en lo relacionado a las donaciones y eventos que organizan. Lo desarrollé con mi grupo durante la cursada de la materia Desarrollo de Software en Sistemas Distribuidos.",
      tecnologias: ["Java", "Spring", "MySQL", "gRPC", "Kafka", "REST", "GraphQL", "SOAP", "Docker"],
      enlace: "https://github.com/MaximilianoCalahorra/TP-Distribuidos-GrupoC-backend"
    },
    {
      titulo: "ONG Empuje Comunitario - Frontend",
      descripcion: "Se trata de la interfaz de usuario del proyecto anterior, el sistema distribuido que desarrollamos para la ONG Empuje Comunitario. Esta capa de presentación permite a los diferentes usuarios, según sus roles, realizar distintas acciones en el sistema propio de la ONG e interactuar con los de las demás organizaciones que integran la red.",
      tecnologias: ["React"],
      enlace: "https://github.com/MaximilianoCalahorra/TP-Distribuidos-GrupoC-frontend"
    },
    {
      titulo: "FutBot",
      descripcion: "Desarrollo de un chatbot especializado en fútbol inmerso en Telegram. Se puede interactuar con el mismo a través de comandos y botoneras, permitiendo al usuario acceso a una gran cantidad de información sobre varias competiciones y sus equipos.",
      tecnologias: ["Python", "Telegram", "Groq"],
      enlace: "https://github.com/MaximilianoCalahorra/FutBot"
    },
    {
      titulo: "Sistema IoT",
      descripcion: "Proyecto de monitoreo de temperatura y humedad a modo de investigación e introducción al ecosistema IoT en el marco del lanzamiento del Laboratorio IoT de la Licenciatura en Sistemas de la Universidad Nacional de Lanús (UNLa).",
      tecnologias: ["ESP32", "MQTT", "MongoDB", "React", "NestJS"],
      enlace: "https://github.com/unla-investigacion-desarrollo/ecosistema-iot"
    },
    {
      titulo: "Cultura Jean",
      descripcion: "E-commerce de ropa con gestión de stock, compras (simuladas), clientes y pedidos de aprovisionamiento.",
      tecnologias: ["Java", "Spring", "PostgreSQL", "HTML", "JS"],
      enlace: "https://github.com/MaximilianoCalahorra/CulturaJean"
    },
    {
      titulo: "Sneakers Club",
      descripcion: "E-commerce de zapatillas con gestión de stock, compras (simuladas), clientes y pedidos de aprovisionamiento. Fue desarrollado en grupo como resolución a un trabajo práctico de la materia Orientación a Objetos II de la carrera.",
      tecnologias: ["Java", "Spring", "MySQL", "HTML", "CSS", "JS"],
      enlace: "https://github.com/MaximilianoCalahorra/SneakersClub"
    },
    {
      titulo: "Clon de Netflix",
      descripcion: "Sitio web que ofrece catálogo de películas, reproducción de las mismas y logueo. Fue desarrollado grupalmente como resolución a un trabajo práctico de la materia Proyecto de Software de la carrera.",
      tecnologias: ["Java", "Spring", "MySQL", "HTML", "CSS", "JS"],
      enlace: "https://github.com/MaximilianoCalahorra/Tp-Proyecto-de-Software-Grupo-5"
    },
    {
      titulo: "ElectroStore",
      descripcion: "E-commerce de tecnología con gestión de stock y compras (simuladas), y logueo. Fue desarrollado individualmente como resolución a un trabajo práctico de la materia Seminario de Lenguajes (PHP) de la carrera.",
      tecnologias: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS"],
      enlace: "https://github.com/MaximilianoCalahorra/web-electrostore"
    },
    {
      titulo: "Pruebas unitarias y de integración",
      descripcion: "El foco no es el proyecto (gestión en memoria de productos, clientes, tarjetas y carritos de un supermercado), sino las pruebas unitarias y de integración realizadas sobre él. Fue desarrollado grupalmente como resolución a un trabajo práctico de la materia Prueba de Software de la carrera.",
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
    },
    {
      titulo: "Portfolio",
      descripcion: "Sitio web personal donde me presento como desarrollador.",
      tecnologias: ["React", "Tailwind"],
      enlace: "https://github.com/MaximilianoCalahorra/portfolio"
    }
  ]
  
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="bg-zinc-900 text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-blue-400">🚀 Proyectos</h2>

      <ul className="grid gap-8 max-w-5xl w-full md:grid-cols-2">
        {proyectos.map((proyecto, index) => (
          <li
            key={index}
            className="bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col justify-between hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {proyecto.titulo}
            </h3>
            <p className="text-zinc-300 mb-2">{proyecto.descripcion}</p>
            <div className="text-sm text-zinc-400 mb-4">
              <span className="font-semibold text-zinc-200">Tecnologías:</span>{" "}
              <span className="italic">{proyecto.tecnologias.join(", ")}</span>
            </div>

            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Ver en GitHub
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projetcs;