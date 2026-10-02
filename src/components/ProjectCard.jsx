import { ArrowUpRight, ExternalLink } from "lucide-react";
import "../styles/projects.css";

const ProjectCard = ({ project, index }) => {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="project-status">{project.status}</span>
      </div>

      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="project-card-footer">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        ) : (
          <span className="project-private">Private / Internal</span>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Visit
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;