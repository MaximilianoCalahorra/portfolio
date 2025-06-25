function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="bg-zinc-800 text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-blue-400">📬 Contacto</h2>
      <p className="text-lg text-zinc-300 mb-6 text-center max-w-xl">
        ¿Querés escribirme o ver más sobre mi trabajo? Podés contactarme por:
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="mailto:maximilianocalahorra@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition text-center"
        >
          📧 Email
        </a>
        <a
          href="https://linkedin.com/in/maximiliano-calahorra"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition text-center"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/MaximilianoCalahorra"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition text-center"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;