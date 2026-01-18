export default function AboutPage() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h1>Curious builder with a passion for problem-solving.</h1>
      </div>
      <div className="content-grid">
        <div>
          <p className="lead">
            I’m a computer science student who loves translating ideas into
            reliable, human-centered software. My interests range from full-stack
            web development to cloud-native infrastructure.
          </p>
          <p>
            Outside of coding, I enjoy reading about product strategy, sketching
            UX flows, and mentoring peers. I’m always looking for opportunities
            to collaborate on meaningful projects.
          </p>
        </div>
        <div className="callout">
          <h2>Quick Facts</h2>
          <ul>
            <li>Based in: City, Country</li>
            <li>Studying: Computer Science</li>
            <li>Interests: Systems design, developer tooling, UX research</li>
            <li>Open to: Internships & freelance collaborations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
