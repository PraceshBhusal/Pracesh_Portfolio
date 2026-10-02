import SectionTitle from "../components/SectionTitle";
import { skillGroups } from "../data/portfolioData";
import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="06 — Skills"
          title="A broad technical toolkit."
          description="Tools and technologies I use across infrastructure, security, software development and digital operations."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-header">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;