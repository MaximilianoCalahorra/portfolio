import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-blue-400 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-400">Maximiliano Calahorra</h1>

        {/* Botón hamburguesa en pantallas pequeñas */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menú en desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-medium">
            <NavLinks />
          </ul>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <NavLinks onClick={() => setIsOpen(false)} />
          </ul>
        </div>
      )}
    </header>
  );
}

//Componente reutilizable para los enlaces:
function NavLinks({ onClick }) {
  return (
    <>
      <li><a href="#hero" onClick={onClick} className="hover:text-white transition-colors">Inicio</a></li>
      <li><a href="#about" onClick={onClick} className="hover:text-white transition-colors">Sobre mí</a></li>
      <li><a href="#tech" onClick={onClick} className="hover:text-white transition-colors">Tecnologías</a></li>
      <li><a href="#projects" onClick={onClick} className="hover:text-white transition-colors">Proyectos</a></li>
      <li><a href="#contact" onClick={onClick} className="hover:text-white transition-colors">Contacto</a></li>
    </>
  );
}

export default Header;
