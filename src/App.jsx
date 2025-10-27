import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Certifications from "./components/Certification";
import Experience from "./components/Experience";
import Contact from "./components/ContactMe";
import { Moon, Sun } from "lucide-react";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme to HTML root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-linear-to-b from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 font-inter">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
          <Link
            to="/"
            className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
          >
            Shivam<span className="font-light text-gray-600 dark:text-gray-400"> Kasaudhan</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              Me
            </Link>
            <Link
              to="/projects"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/certifications"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              Certifications
            </Link>
            <Link
              to="/experience"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition duration-300"
            >
              Contact
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="grow mt-20 px-4">
          <Routes>
            <Route path="/" element={<Me />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-16 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-center py-4 transition-colors">
          <p className="text-sm">
            © {new Date().getFullYear()} Made with ❤️ by{" "}
            <span className="font-medium bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Shivam
            </span>
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
