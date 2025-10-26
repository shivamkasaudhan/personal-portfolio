import React from "react";

const projects = [
  {
    id: 1,
    title: "Inboxly - Mail Management System",
    image: "https://i.imgur.com/D3N4NnL.png",
    description:
      "A full-stack MERN application for managing mails efficiently with real-time communication, authentication, and cloud deployment.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    github: "https://github.com/shivamkasaudhan/Inboxly-Mail-Service",
  },
  {
    id: 2,
    title: "AgriConnect - AI Farm Guide",
    image: "https://i.imgur.com/fzmGBHR.png",
    description:
      "An AI-powered multilingual farm guide built with React and MongoDB to help farmers get instant crop insights in 10 Indian languages.",
    techStack: ["React", "Express", "MongoDB", "OpenAI API", "Tailwind"],
    github: "https://github.com/shivamkasaudhan/AgriConnect",
  },
  {
    id: 3,
    title: "VOX - Voice Assistant",
    image: "https://i.imgur.com/ILf6u9F.png",
    description:
      "A Python-based voice assistant that can perform system tasks, answer questions, and automate workflows with a natural voice interface.",
    techStack: ["Python", "SpeechRecognition", "Pyttsx3", "APIs"],
    github: "https://github.com/shivamkasaudhan/VOX-Voice-Assistant",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 flex flex-col items-center px-6 py-16 transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-12 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg transform hover:scale-[1.03] transition duration-300 ease-out hover:shadow-cyan-300/40 dark:hover:shadow-cyan-500/40"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-5 shadow-sm"
            />
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {project.title}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-cyan-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-gray-100 font-medium border border-blue-200 dark:border-gray-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.open(project.github, "_blank")}
              className="w-full py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-600 dark:hover:to-blue-600 transition duration-300"
            >
              View Source
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
