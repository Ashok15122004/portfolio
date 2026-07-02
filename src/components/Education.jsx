import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-400">
            Education
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6 text-lg">
            My academic journey and achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 ml-6">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 ml-10"
          >
            <div className="absolute -left-6 bg-blue-500 p-3 rounded-full shadow-lg">
              <FaGraduationCap className="text-white text-xl" />
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700 hover:border-blue-500 transition">

              <div className="flex items-center gap-3 mb-4">
                <FaUniversity className="text-blue-400 text-2xl" />

                <h3 className="text-2xl font-bold">
                  Bachelor of Computer Applications (BCA)
                </h3>
              </div>

              <p className="text-blue-400 font-semibold text-lg">
                Nrupathunga University, Bengaluru
              </p>

              <p className="text-gray-400 mt-2">
                2023 – 2026
              </p>

              <p className="mt-4 text-lg">
                <span className="font-semibold text-white">CGPA:</span> 8.0
              </p>

              <p className="mt-5 text-gray-300 leading-8">
                Pursuing Bachelor of Computer Applications with strong interest
                in Full Stack Web Development, Artificial Intelligence and
                Software Engineering. Developed projects using React.js,
                Node.js, Express.js, MongoDB, SQLite, Flask, REST APIs and
                Fuzzy Logic AI.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;