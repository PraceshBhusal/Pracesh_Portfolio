import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { teaching } from "../data/portfolioData";
import "../styles/teaching.css";

const Teaching = () => {
  return (
    <section className="teaching-section" id="teaching">
      <div className="section-container">
        <div className="teaching-layout">
          <div className="teaching-label">
            <span className="section-eyebrow">TEACHING</span>

            <GraduationCap size={30} strokeWidth={1.5} />
          </div>

          <div className="teaching-content">
            <div className="teaching-header">
              <div>
                <h2 className="section-heading">
                  Sharing knowledge
                  <span>.</span>
                </h2>

                <p className="teaching-role">
                  {teaching.role}
                </p>
              </div>

              <span className="teaching-period">
                {teaching.period}
              </span>
            </div>

            <div className="teaching-institution">
              <strong>{teaching.institution}</strong>

              <span>
                <MapPin size={15} strokeWidth={1.7} />
                {teaching.location}
              </span>
            </div>

            <p className="teaching-description">
              {teaching.description}
            </p>

            <div className="teaching-programs">
              <span className="teaching-programs-title">
                Programs
              </span>

              <div className="teaching-program-list">
                {teaching.programs.map((program) => (
                  <div className="teaching-program" key={program}>
                    <span>{program}</span>
                    <ArrowUpRight size={16} strokeWidth={1.6} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;