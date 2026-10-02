import { ArrowUpRight } from "lucide-react";
import { expertise } from "../data/portfolioData";
import "../styles/expertise.css";

const Expertise = () => {
  return (
    <section className="expertise-section" id="expertise">
      <div className="section-container">
        <div className="expertise-heading">
          <div>
            <span className="section-eyebrow">WHAT I DO</span>
            <h2 className="section-heading">
              Technical expertise
              <span>.</span>
            </h2>
          </div>

          <p className="expertise-intro">
            Combining infrastructure management, cybersecurity, business
            systems, and full-stack development to solve practical technology
            problems.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <div className="expertise-card-top">
                <span className="expertise-number">{item.number}</span>

                <ArrowUpRight size={20} strokeWidth={1.7} />
              </div>

              <div className="expertise-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;