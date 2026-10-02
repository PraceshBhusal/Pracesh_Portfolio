import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Teaching from "./sections/Teaching";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import "./styles/global.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Teaching />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>PRACESH BHUSAL</strong>
            <span>IT Administrator • Full-Stack Developer</span>
          </div>

          <span>
            © {new Date().getFullYear()} Pracesh Bhusal. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default App;