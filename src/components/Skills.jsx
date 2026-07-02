import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, level: 90, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, level: 88, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, level: 85, color: "text-green-500" },
  { name: "Git", icon: FaGitAlt, level: 85, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, level: 90, color: "text-white" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Technologies I use to build modern, scalable and responsive web
            applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl hover:border-blue-500 hover:shadow-blue-500/30 transition-all"
              >

                <div className="flex items-center gap-5">

                  <div className="bg-slate-800 p-4 rounded-2xl">
                    <Icon className={`text-5xl ${skill.color}`} />
                  </div>

                  <div className="flex-1">

                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold">
                        {skill.name}
                      </h3>

                      <span className="text-blue-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.3,
                          delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}