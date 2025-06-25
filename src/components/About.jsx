function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="bg-zinc-900 text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-blue-400">🎯 Sobre mí</h2>
      <p className="max-w-3xl text-lg text-zinc-300 leading-relaxed text-left">
        Soy estudiante avanzado de la <span className="text-white font-medium">Licenciatura en Sistemas</span> en la Universidad Nacional de Lanús (UNLa), con experiencia en proyectos <span className="text-white font-medium">académicos y personales</span>, principalmente orientados al <span className="text-white font-medium">desarrollo backend</span>. He trabajado en el diseño de APIs, conexión con bases de datos relacionales y no relacionales, e integraciones con sistemas IoT.
        <br className="my-4" />
        Me interesa seguir formándome, especialmente en <span className="text-white font-medium">desarrollo backend</span>. Disfruto <span className="text-white font-medium">resolver problemas complejos</span>, aprender nuevas tecnologías y trabajar en equipo en la construcción de soluciones que generen <span className="text-white font-medium">impacto</span> y promuevan la calidad y la mejora continua.
      </p>
    </section>
  );
}

export default About;