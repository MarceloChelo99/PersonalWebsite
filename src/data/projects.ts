export type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "GraphPulse",
    description:
      "A visualization tool that explores social graphs using WebGL and real-time clustering.",
    stack: ["TypeScript", "WebGL", "D3.js"],
    link: "https://example.com/graphpulse",
  },
  {
    title: "CacheCraft",
    description:
      "A distributed cache simulator that compares eviction strategies for cloud workloads.",
    stack: ["Python", "Redis", "Docker"],
    link: "https://example.com/cachecraft",
  },
  {
    title: "SignalScout",
    description:
      "An anomaly detection dashboard for IoT telemetry with streaming alerts.",
    stack: ["Next.js", "Node.js", "Kafka"],
    link: "https://example.com/signalscout",
  },
  {
    title: "PlanAhead",
    description:
      "A productivity app that blends calendar data with machine learning to predict focus windows.",
    stack: ["React", "TensorFlow.js", "PostgreSQL"],
    link: "https://example.com/planahead",
  },
];
