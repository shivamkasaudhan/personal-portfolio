import profilePic from "./logo.jpg";
export default function Me() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 bg-linear-to-r from-blue-100 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">

      {/* Profile Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 md:mr-12 shrink-0">
        <img
          src={profilePic}
          alt="Shivam Kasaudhan"
          className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-500 animate-fadeIn"
        />
      </div>

      {/* Intro & Skills */}
      <div className="text-center md:text-left max-w-xl animate-fadeIn delay-300">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Hi, I'm <span className="text-blue-500 dark:text-cyan-400">Shivam Kasaudhan</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          Web Developer Intern{" "}
          <span className="text-blue-500 dark:text-cyan-400 font-semibold">@Connekt Sphere</span> |
          Fullstack Developer | Open Source Contributor
        </p>


        {/* Skills Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          {["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Firebase", "AWS", "GCP", "Git/Github", "MySQL", "C++", "JavaScript"].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Call-to-action Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {/* Connect with Me button */}
          <a
            href='Contact'
            className="inline-block bg-blue-500 dark:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 dark:hover:bg-cyan-500 hover:shadow-lg transition-all duration-300"
          >
            Connect with Me
          </a>

          {/* Resume button */}
          <a
            href="https://drive.google.com/file/d/1j1vGLJ-zKo_KgoXFi85DkLV-_i5oSGEK/view" // Replace with your drive link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-lg transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
