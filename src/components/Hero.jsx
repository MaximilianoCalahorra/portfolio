function Hero() {
  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10 text-center md:text-left min-h-screen bg-zinc-800 text-white px-6"
    >
      <img
        src="/foto-perfil.png"
        alt="Foto de Maximiliano Calahorra"
        className="w-40 h-40 md:w-80 md:h-80 rounded-full shadow-lg border-2 border-zinc-700 ring-4 ring-blue-500/30"
      />

      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          👋Hola, soy Maximiliano Calahorra
        </h1>
        <h2 className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-6">
          Desarrollador Full Stack · Estudiante de Sistemas
        </h2>
        <p className="text-lg sm:text-xl max-w-xl mb-8 text-zinc-300">
          Apasionado por crear soluciones de calidad, escalables y con impacto.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="CV Maximiliano Calahorra.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            📄 Descargar CV
          </a>
          <a
            href="https://github.com/MaximilianoCalahorra"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            💻 GitHub
          </a>
          <a
            href="https://linkedin.com/in/maximiliano-calahorra"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;