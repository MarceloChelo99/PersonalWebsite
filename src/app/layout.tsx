import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Projects | Your Name",
  description: "A personal website showcasing projects and background.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="site-header">
            <div className="container header-content">
              <div>
                <p className="eyebrow">Your Name</p>
                <p className="subtitle">Software Engineer · Lifelong Learner</p>
              </div>
              <nav className="nav">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
              </nav>
            </div>
          </header>
          <main className="container main">{children}</main>
          <footer className="site-footer">
            <div className="container footer-content">
              <p>© 2024 Your Name. Built with Next.js.</p>
              <div className="footer-links">
                <a href="mailto:you@example.com">you@example.com</a>
                <span>·</span>
                <a href="https://github.com/yourname">GitHub</a>
                <span>·</span>
                <a href="https://linkedin.com/in/yourname">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
