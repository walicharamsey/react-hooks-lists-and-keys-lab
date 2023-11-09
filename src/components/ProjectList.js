import React from 'react';

function ProjectItem({ name, technologies }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} name={project.name} technologies={project.technologies} />
      ))}
    </div>
  );
}

export default ProjectList;
