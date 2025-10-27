import React from "react";
import vox from './vox.png'
import agri from './agri.png'
import port from './port.png'
import sat from './sat.png'
import quick from './quick.png'
import backup from './backup.png'
const projects = [
  {
    id: 1,
    title: "AgriConnect - AI Farm Guide",
    image: `${agri}`,
    description:
      "An AI-powered multilingual farm guide built with React and MongoDB to help farmers get instant crop insights in 10 Indian languages.",
    techStack: ["React", "Express","Node", "MongoDB", "OpenAI API", "Tailwind"],
    github: "https://github.com/shivamkasaudhan/Agri-Connect",
  },
  {
    id: 2,
    title: "SAT - Order Scheduling Website",
    image: `${sat}`,
    description:
      "Built SAT – Order Scheduling Website to streamline order management and scheduling with an intuitive interface and efficient backend integration.",
    techStack: ["React", "Express", "MongoDB Atlas","Node","Tailwind"],
    github: "https://github.com/shivamkasaudhan/sat",
  },
  {
    id: 3,
    title: "AWSS3-Dataset-Visualization",
    image: `${quick}`,
    description:
      "Created data visualization using Amazon S3 and Amazon Quicksight, Working with large dataset of best-selling Amazon products.",
    techStack: ["AWS S3", "AWS QuickSight", "Dataset","Visualization"],
    github: "https://github.com/shivamkasaudhan/AWSS3-Dataset-Visualization",
  },
  {
    id: 4,
    title: "AWS-EC2-Backup-Automation",
    image: `${backup}`,
    description:
      "This project automates daily backups of a specified directory using a shell script and rsync, with logging for both success and failure outcomes, and integrates email notifications for backup status.",
    techStack: ["AWS S3","AWS EC2","Shell Script","Rsync","Cron-job","Linux"],
    github: "https://github.com/shivamkasaudhan/AWS-EC2-Backup-Automation",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    image: `${port}`,
    description:
      "Developed a responsive personal portfolio website to showcase projects, skills, and achievements with a modern UI using React and Tailwind CSS.",
    techStack: ["React", "EmailJS","Tailwind"],
    github: "https://github.com/shivamkasaudhan/personal-portfolio",
  },
  {
    id: 6,
    title: "VOX - Voice Assistant",
    image: `${vox}`,
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
