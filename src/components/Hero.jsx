import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import profile from "../assets/formal.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-slate-950 text-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
        >
          <p className="text-blue-400 text-lg mb-2">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Ashok R
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",2000,
              "React Developer",2000,
              "Node.js Developer",2000,
              "AI Enthusiast",2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-semibold text-blue-400 mb-6"
          />

          <p className="text-gray-300 leading-8 max-w-2xl">
            Final-year BCA student at Nrupathunga University (CGPA: 8.0)
            with hands-on full-stack development experience. Built a Smart
            Farming Dashboard using React.js, Node.js, Flask, SQLite,
            OpenWeatherMap API and Fuzzy Logic AI. Seeking an entry-level
            Software Developer role to build scalable and user-friendly web
            applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              <FaDownload />
              Download Resume
            </a>

            
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/Ashok15122004"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ashok-r-2162752a6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ashok15122004@gmail.com"
              className="hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Ashok R"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
