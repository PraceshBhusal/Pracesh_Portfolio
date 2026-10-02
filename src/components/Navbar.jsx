import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">PB</span>

          <span className="logo-text">
            <strong>Pracesh</strong>
            <small>IT & Development</small>
          </span>
        </a>

        <nav className={`navbar-links ${isOpen ? "navbar-links-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#expertise" onClick={closeMenu}>
            Expertise
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="https://github.com/PraceshBhusal"
            target="_blank"
            rel="noreferrer"
            className="navbar-github"
            onClick={closeMenu}
          >
            GitHub
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="navbar-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;