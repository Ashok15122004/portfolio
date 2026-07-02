import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaUniversity,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-blue-400">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              Hello! I'm <span className="text-blue-400 font-semibold">Ashok R</span>,
              a Final-Year Bachelor of Computer Applications (BCA) student at
              <span className="text-blue-400"> Nrupathunga University</span>
              with a CGPA of <span className="text-blue-400">8.0</span>.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              I am passionate about Full Stack Web Development and enjoy
              building responsive, scalable, and user-friendly web applications
              using React.js, Node.js, Express.js, MongoDB, SQLite, Flask,
              REST APIs, and modern web technologies.
            </p>

            <p className="text-gray-300 leading-8 mb-5">
              My major project, <span className="text-blue-400 font-semibold">
              Smart Farming Dashboard</span>, integrates OpenWeatherMap API,
              Fuzzy Logic AI, React.js, Node.js, Flask, SQLite, and Chart.js
              to provide intelligent irrigation recommendations for farmers.
            </p>

            <p className="text-gray-300 leading-8">
              I am looking for an entry-level Software Developer role where I
              can contribute my technical skills while continuously learning
              new technologies and building impactful software solutions.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {/* Education */}
            <div className="bg-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <div className="flex items-center gap-4">
                <FaUserGraduate className="text-3xl text-blue-400" />
                <div>
                  <h4 className="text-xl font-semibold">Education</h4>
                  <p className="text-gray-400">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>
            </div>

            {/* University */}
            <div className="bg-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <div className="flex items-center gap-4">
                <FaUniversity className="text-3xl text-blue-400" />
                <div>
                  <h4 className="text-xl font-semibold">University</h4>
                  <p className="text-gray-400">
                    Nrupathunga University
                  </p>
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div className="bg-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <div className="flex items-center gap-4">
                <FaCode className="text-3xl text-blue-400" />
                <div>
                  <h4 className="text-xl font-semibold">Specialization</h4>
                  <p className="text-gray-400">
                    Full Stack Web Development
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-3xl text-blue-400" />
                <div>
                  <h4 className="text-xl font-semibold">Location</h4>
                  <p className="text-gray-400">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-3">
                Career Objective
              </h4>

              <p className="leading-7">
                Seeking an entry-level Software Developer role where I can
                apply my knowledge of React.js, Node.js, REST APIs, AI systems,
                and modern web technologies to build innovative and impactful
                software solutions.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;