import { Mail, Github, Linkedin, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900">
      {/* Section Header */}
     <div className="text-center mb-16">
        <motion.h2
          {...fadeUp}
          className="flex items-center justify-center gap-3 text-4xl font-bold text-white pt-8"
        >
          <Coffee className="w-8 h-8 text-cyan-400" />
          Get in Touch
        </motion.h2>
      </div>

      {/* Two-column layout: Bio + Contact Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Name + Bio */}
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
            Sarita Joshi
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Passionate about building scalable software and data systems powered by AI.
            I'm currently seeking full-time roles in Software Engineering, Data Engineering, or Applied AI.
            <br />
            Let's connect!
          </p>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="space-y-4 text-sm text-white"
        >
          {[
            {
              icon: <Mail className="w-5 h-5 text-cyan-400" />,
              label: "joshisarita1311@gmail.com",
              href: "mailto:joshisarita1311@gmail.com",
            },
            {
              icon: <Github className="w-5 h-5 text-gray-400" />,
              label: "github.com/Sarita-Joshi",
              href: "https://github.com/Sarita-Joshi",
            },
            {
              icon: <Linkedin className="w-5 h-5 text-blue-400" />,
              label: "linkedin.com/in/sarita-joshi",
              href: "https://linkedin.com/in/sarita-joshi",
            },
          ].map(({ icon, label, href }, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/60 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {icon}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 break-all"
              >
                {label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-gray-400">
          © 2024 Sarita Joshi. Built with React, Tailwind CSS.
          <span className="text-blue-400 ml-2">Always learning, always building.</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
