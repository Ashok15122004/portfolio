import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-blue-400">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4">
            Feel free to connect with me for internships, jobs or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-3xl text-blue-400" />
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <a
                    href="mailto:ashok15122004@gmail.com"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    ashok15122004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaGithub className="text-3xl text-blue-400" />
                <div>
                  <h3 className="font-semibold text-xl">GitHub</h3>
                  <a
                    href="https://github.com/Ashok15122004"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    github.com/Ashok15122004
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLinkedin className="text-3xl text-blue-400" />
                <div>
                  <h3 className="font-semibold text-xl">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/ashok-r-2162752a6"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    Ashok R
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-3xl text-blue-400" />
                <div>
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-gray-300">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/ashok15122004@gmail.com"
            method="POST"
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition font-semibold"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;