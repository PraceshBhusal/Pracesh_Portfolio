import { Award, GraduationCap } from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import { education, certifications, languages } from "../data/portfolioData";
import "../styles/education.css";

const Education = () => {
  return (
    <section className="section education-section">
      <div className="container">
        <SectionTitle
          eyebrow="07 — Education"
          title="Education & certifications."
          description="Academic foundation combined with ongoing professional learning."
        />

        <div className="education-grid">
          <div className="education-main-card">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>

            <span className="education-period">{education.period}</span>

            <h3>{education.degree}</h3>

            <p className="education-institution">
              {education.institution}
            </p>

            <p>
              {education.university} · {education.location}
            </p>

            <div className="education-achievement">
              <Award size={17} />
              {education.achievement}
            </div>
          </div>

          <div className="certifications-card">
            <h3>Certifications & Learning</h3>

            <div className="certification-list">
              {certifications.map((certification) => (
                <div
                  className="certification-item"
                  key={certification.title}
                >
                  <div>
                    <strong>{certification.title}</strong>
                    <span>{certification.issuer}</span>
                  </div>

                  <small>{certification.status}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="languages-row">
          <span className="languages-label">Languages</span>

          {languages.map((language) => (
            <div className="language-item" key={language.name}>
              <strong>{language.name}</strong>
              <span>{language.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;