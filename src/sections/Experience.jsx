import { ArrowUpRight } from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/portfolioData";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="04 — Experience"
          title="Professional experience."
          description="Hands-on experience across IT operations, infrastructure, data operations and software development."
        />

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-index">
                0{index + 1}
              </div>

              <div className="experience-main">
                <div className="experience-header">
                  <div>
                    <span className="experience-period">
                      {item.period}
                    </span>

                    <h3>{item.role}</h3>

                    <div className="experience-company">
                      {item.company}
                      <span>•</span>
                      {item.location}
                    </div>
                  </div>

                  <ArrowUpRight size={22} />
                </div>

                <p>{item.description}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;