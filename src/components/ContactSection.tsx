import { Mail, Github, Linkedin, Coffee, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2 
          {...fadeUp}
          className="text-4xl font-bold text-white pt-8"
        >
          Let's Build Something Amazing!
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
          {/* Column 1: Profile Summary */}
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              Sarita Joshi
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Passionate about building robust data systems, ML pipelines, and intelligent products. Currently exploring roles in Data Engineering, ML Engineering, and Full-Stack Development.
            </p>

            <motion.div 
              className="mt-6 space-y-4 text-sm text-white"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              {[
                {
                  icon: <Mail className="w-5 h-5 text-cyan-400" />,
                  label: "saritajoshi@csu.fullerton.edu",
                  href: "mailto:saritajoshi@csu.fullerton.edu"
                },
                {
                  icon: <Github className="w-5 h-5 text-gray-400" />,
                  label: "github.com/Sarita-Joshi",
                  href: "https://github.com/Sarita-Joshi"
                },
                {
                  icon: <Linkedin className="w-5 h-5 text-blue-400" />,
                  label: "linkedin.com/in/sarita-joshi",
                  href: "https://linkedin.com/in/sarita-joshi"
                }
              ].map(({ icon, label, href }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg"
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
                    className="hover:text-cyan-300"
                  >
                    {label}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2: Coffee CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-purple-950 rounded-xl p-8 border border-cyan-500/30 text-center shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-3">
              <Coffee className="text-cyan-400 w-7 h-7" />
              Get in Touch
            </h3>
            <p className="text-gray-300 mb-6 text-md">
              I'm currently looking for new opportunities. Always open to great ideas, exciting roles, and challenging problems.
            </p>
            <div className="flex flex-col gap-4">
              <Button
                className="w-full min-w-[180px] bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                onClick={() => window.location.href = "mailto:sarita@csu.fullerton.edu"}
              >
                Say Hello
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-cyan-400 text-cyan-300 px-6 py-2 rounded-lg font-medium hover:bg-cyan-600/10 transition"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            © 2024 Sarita Joshi. Built with React & Tailwind CSS. 
            <span className="text-blue-400 ml-2">Always learning, always building.</span>
          </p>
        </div>
    </section>
  );
};

export default ContactSection;
