import React from "react";

const experiences = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "ConnektSphere",
    duration: "Oct 2025 – Present",
    description:
      "Collaborating with the founding team to build the company’s official platform from scratch. Designing responsive web pages and improving performance through clean code practices.",
  },
  {
    id: 2,
    role: "Full Stack Developer (Freelance)",
    company: "AgriConnect Project",
    duration: "Apr 2025 – Aug 2025",
    description:
      "Developed an AI-powered multilingual farm guide using MERN stack and OpenAI API. Migrated database from Firebase to MongoDB for better scalability and performance.",
  },
  {
    id: 3,
    role: "Backend Developer & Team Lead",
    company: "Inboxly Mail Service",
    duration: "Jan 2025 – Mar 2025",
    description:
      "Built backend architecture using Express.js, JWT, and MongoDB. Enhanced authentication, integrated real-time features, and managed version control with Git and Render deployment.",
  },
  {
    id: 4,
    role: "AWS Automation Developer",
    company: "Personal Project",
    duration: "Sep 2024 – Nov 2024",
    description:
      "Automated daily EC2 backups using Bash, rsync, and cron. Configured email notifications and improved system efficiency through process monitoring and mail queue optimization.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 flex flex-col items-center px-6 py-16 transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-12 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Experience
      </h1>

      <div className="relative w-full max-w-5xl">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-cyan-400 to-blue-400 rounded-full"></div>

        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full`}
            >
              <div
                className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg transform hover:scale-[1.03] hover:shadow-cyan-300/40 dark:hover:shadow-cyan-500/40 transition duration-300 ease-out w-[90%] md:w-[45%] ${
                  index % 2 === 0 ? "ml-0" : "mr-0"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.role}
                </h3>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                  {exp.company}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>

              {/* Circle Connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-linear-to-r from-cyan-400 to-blue-400 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
