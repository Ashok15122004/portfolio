import React from "react";
const projects = [
  
  {
    title: "Smart Farming Dashboard",
    description:
      "A smart agriculture dashboard with AI-powered recommendations, real-time sensor monitoring, and analytics.",
    tech: ["React", "Express", "Python", "SQLite", "Chart.js"],
    github: "https://github.com/Asok15122004/smart-agriculture-project",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-slate-700 p-6 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-medium transition"
                >
                  GitHub
                </a>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;