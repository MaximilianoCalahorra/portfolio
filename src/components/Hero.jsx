function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hola, soy Maximiliano Calahorra</h1>
      <h2>Desarrollador Full Stack · Estudiante de Sistemas</h2>
      <p>Apasionado por crear soluciones de calidad, escalables y con impacto.</p>
      <div className="buttons">
        <a href="CV Maximiliano Calahorra.pdf" download className="btn">📄 Descargar CV</a>
        <a href="https://github.com/MaximilianoCalahorra" target="_blank" rel="noopener noreferrer" className="btn">💻 GitHub</a>
        <a href="https://linkedin.com/in/maximiliano-calahorra" target="_blank" rel="noopener noreferrer" className="btn">🔗 LinkedIn</a>
      </div>
    </section>
  );
}

export default Hero;