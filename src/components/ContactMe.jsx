import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaMedium, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { send } from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message sent successfully!"); 
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Oops! Something went wrong."); 
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 flex flex-col items-center px-6 py-16 transition-colors duration-500">
      <h1 className="text-4xl font-bold mb-10 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Contact Me
      </h1>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {[
          { icon: <FaLinkedin className="text-3xl text-blue-600" />, link: "https://www.linkedin.com/in/shivamkasaudhan_" },
          { icon: <FaGithub className="text-3xl text-gray-800 dark:text-gray-100" />, link: "https://github.com/shivamkasaudhan" },
          { icon: <FaMedium className="text-3xl text-black dark:text-white" />, link: "https://medium.com/@shivamkasaudhan" },
          { icon: <FaInstagram className="text-3xl text-pink-500" />, link: "https://www.instagram.com/shivamkasaudhan" },
          { icon: <FaXTwitter className="text-3xl text-black dark:text-white" />, link: "https://x.com/shivamdetox" },
          { icon: <SiLeetcode className="text-3xl text-yellow-500" />, link: "https://leetcode.com/shivam_kasaudhan" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-cyan-300/40 dark:hover:shadow-cyan-500/40 transition duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 w-full max-w-lg transition-colors duration-500"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Send Me a Message
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-400 hover:to-blue-400 dark:hover:from-cyan-600 dark:hover:to-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
