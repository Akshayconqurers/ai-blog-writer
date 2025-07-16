import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Code Marathon",
      description: "Team formation platform for hackathons reducing team-building time by 60%",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
      features: ["Real-time matching algorithm", "JWT Authentication", "AWS EC2 deployment"],
      status: "Completed"
    },
    {
      title: "Athletix",
      description: "Sports management platform for college athletics programs",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: ["Player registration", "Tournament scheduling", "Performance tracking"],
      status: "SIH'24 Top 10%"
    },
    {
      title: "IoT Streetlight Controller",
      description: "Automated streetlight control system reducing power consumption by 35%",
      technologies: ["Arduino", "C++", "IoT Sensors", "LDR"],
      features: ["Energy-efficient solution", "Automated control", "Research publication"],
      status: "Published in IJSREM"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;