import React from "react";

const certifications = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    image: "https://i.imgur.com/NJ2Jp3H.png",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git", "UX Design"],
    verifyLink:
      "https://www.coursera.org/account/accomplishments/professional-cert/ABC123",
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    image: "https://i.imgur.com/ok6s9rA.png",
    skills: ["AWS EC2", "S3", "IAM", "Lambda", "Cloud Basics"],
    verifyLink: "https://aws.amazon.com/verification-link",
  },
  {
    id: 3,
    title: "HackerRank SQL (Intermediate)",
    image: "https://i.imgur.com/xgV7GxI.png",
    skills: ["SQL", "Joins", "Aggregations", "Subqueries"],
    verifyLink: "https://www.hackerrank.com/certificates/verify/XYZ789",
  },
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 flex flex-col items-center px-6 py-16 transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-12 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Certifications
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg transform hover:scale-[1.03] transition duration-300 ease-out hover:shadow-cyan-300/40 dark:hover:shadow-cyan-500/40"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-xl mb-5 shadow-sm"
            />
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {cert.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-cyan-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-gray-100 font-medium border border-blue-200 dark:border-gray-500"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.open(cert.verifyLink, "_blank")}
              className="w-full py-2 mt-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-600 dark:hover:to-blue-600 transition duration-300"
            >
              Verify Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
