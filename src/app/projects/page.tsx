import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h1>Selected work in computer science and software engineering.</h1>
        <p className="lead">
          Here are a few projects that highlight my interests in systems,
          analytics, and user experience. Swap these out with your own work when
          you’re ready.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a className="project-link" href={project.link}>
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
