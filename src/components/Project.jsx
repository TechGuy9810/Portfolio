import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Realtime Web ChatApp",
    description:
      "A realtime Web ChatApp where users can chat, share media and emojis. Users can see who is currently online. They can also see which person is currently typing messages. 1) Users can send Media. 2) Can see who is online & who is typing.",
    tags: ["React", "Node.js", "Express.js", "Tailwindcss", "MongoDB","socket.io", "Cloudinary", "multer",],
    imageUrl: "./project2.png",
    github:"https://github.com/TechGuy9810/ChatApp",
    website: "https://chatapp-production-e859.up.railway.app/",
  },
  {
    title: "Hotel Reservation Site",
    description:
      "Full-stack Hotel Reservation Site where users can search, arrange prices, and book hotels. It is integrated with razorpay payment gateway for payments and have full responsive design. 1) Payment Gateway (Razorpay) 2) Email Verfification using nodemailer. 3) User Authentication",
    tags: ["React", "Node.js", "Express.js", "Bootstrap", "MongoDB","razorpay", "nodemailer"],
    imageUrl: "./project1.png",
    github:"https://github.com/TechGuy9810/HotelSite",
    website: "https://hotelbooking-production-542f.up.railway.app/",
  },
  {
    title: "GPT - AI ChatApp",
    description:
      "Web AI ChatApp where users can chat with google gemini and can also attach media and ask queries. 1) Integrated Google gemini API. 2) Smooth authentication usin Clerk",
    tags: ["React", "Node.js", "Express.js", "Tailwindcss", "MongoDB","Google Gemini", "clerk"],
    imageUrl: "./project2.png",
    website: "https://offsetcommunications.africa",
  },
];

const Project = () => {
  return (
    <div className="min-h-[90vh] h-auto w-full lg:pl-20 lg:pr-20 pl-10 pr-10">
      <div className="bg-white text-black py-10">
        <h1 className="text-4xl font-bold mb-10 font-Monoton text-center">
          Selected Projects
        </h1>
        <div className="flex flex-col gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg flex lg:flex-row flex-col lg:items-center p-6 gap-2 justify-center lg:hover:scale-105 lg:transform lg:transition lg:duration-200"
            >
              <div className="flex-shrink-0 w-full lg:w-1/3 h-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 lg:h-auto object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col flex-grow space-y-4 h-full">
                <h2 className="lg:text-4xl text-2xl font-semibold text-white">
                  {project.title}
                </h2>
                {/* Split description into sentences and render each as a new line */}
                <div className="text-sm text-gray-300 flex-grow space-y-2">
                  {project.description.split(/(?=\d)/).map((sentence, i) => (
                    <p key={i}>{sentence.trim()}.</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-3 py-1 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="no-underline flex lg:gap-4 gap-4 w-auto whitespace-nowrap items-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                    >
                      <FaGithub className="lg:size-6 size-6 text-white cursor-pointer" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.website}
                      className="relative inline-flex items-center justify-center pt-1 pb-1 pl-4 pr-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-lg shadow-md group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        live
                      </span>
                      <span className="relative invisible">live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
