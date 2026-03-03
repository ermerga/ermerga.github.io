import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="card">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-description">{project.description}</p>
      <div className="card-tech">
        {project.tech.map((tag) => (
          <span key={tag} className="card-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="card-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Watch Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
