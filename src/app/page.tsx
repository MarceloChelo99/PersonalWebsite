import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Welcome</p>
        <h1>Building thoughtful software for people and platforms.</h1>
        <p className="lead">
          I’m a computer science enthusiast focused on clean engineering,
          delightful UX, and scalable systems. Explore my background and the
          projects I’m most proud of.
        </p>
        <div className="cta-group">
          <Link className="button primary" href="/projects">
            View Projects
          </Link>
          <Link className="button ghost" href="/about">
            About Me
          </Link>
        </div>
      </div>
      <div className="hero-card">
        <h2>Current Focus</h2>
        <ul>
          <li>Designing accessible web experiences.</li>
          <li>Learning distributed systems patterns.</li>
          <li>Experimenting with AI-powered developer tools.</li>
        </ul>
      </div>
    </section>
  );
}
