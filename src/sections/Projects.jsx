import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionTitle
          eyebrow="03 — Selected Work"
          title="Projects built for real requirements."
          description="A selection of systems and websites developed across hospital technology, business software and digital services."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;