import React from "react";

const projectList = [
  { title: "Portfolio Website", tech: "React, CSS", link: "#" },
  { title: "Room Booking App", tech: "React, Node.js", link: "#" },
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projectList.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>Tech: {project.tech}</p>
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;