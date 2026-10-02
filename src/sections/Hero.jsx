import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import profilePhoto from "../assets/images/profile.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-background"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="hero-line"></span>
            <span>IT ADMINISTRATOR & FULL-STACK DEVELOPER</span>
          </div>

          <h1>
            Building reliable
            <br />
            <span>technology systems</span>
            <br />
            that work.
          </h1>

          <p className="hero-description">
            I work across IT infrastructure, networking, security and
            full-stack web development — turning real operational requirements
            into practical technology solutions.
          </p>

          <div className="hero-location">
            <MapPin size={16} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work
              <ArrowUpRight size={17} />
            </a>

            <a href={`mailto:${personalInfo.email}`} className="button button-secondary">
              <Mail size={17} />
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <div className="hero-photo-label">
              <span className="status-dot"></span>
              IT • DEVELOPMENT • INFRASTRUCTURE
            </div>

            <img
              src={profilePhoto}
              alt="Pracesh Bhusal"
              className="hero-photo"
            />

            <div className="hero-photo-bottom">
              <span>PRACESH BHUSAL</span>
              <span>NEPAL / 2026</span>
            </div>
          </div>

          <div className="hero-floating-card hero-card-one">
            <strong>IT</strong>
<span>Infrastructure & Operations</span>
          </div>

          <div className="hero-floating-card hero-card-two">
           <strong>WEB</strong>
<span>Digital Solutions</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span>Scroll to explore</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
};

export default Hero;