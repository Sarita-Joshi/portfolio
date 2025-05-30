import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Coffee } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarita@example.com",
      action: "mailto:sarita@example.com",
      color: "text-cyan-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-20 bg-gray-900">
      <div className="text-center mb-16">
        <h2 
          className={`text-4xl font-bold text-white mb-4 ${
            isVisible ? 'animate-spring-in' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0ms' }}
        >
          Let's Build Something Amazing
        </h2>
        <p 
          className={`text-xl text-gray-300 max-w-2xl mx-auto ${
            isVisible ? 'animate-spring-in' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '200ms' }}
        >
          Ready to discuss your next project or just want to chat about data engineering and AI? 
          I'm always excited to connect with fellow tech enthusiasts!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="space-y-6">
          <div 
            className={`${
              isVisible ? 'animate-spring-in' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '400ms' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Coffee className="text-cyan-400" />
              Get In Touch
            </h3>
          </div>

          <div className="space-y-2">
          <Card 
    className={`bg-gradient-to-br from-slate-800 to-gray-900 border border-gray-700/50 backdrop-blur-sm transition-all duration-300 ${
      isVisible ? 'animate-spring-in' : 'opacity-0 translate-y-8'
    }`}
    style={{ animationDelay: '400ms' }}
  >
    <CardContent className="p-6 text-center md:text-left">
      <h2 className="text-3xl font-bold text-white mb-2">Sarita Joshi</h2>
      <p className="text-gray-300 text-sm">
        Data Engineer & ML Enthusiast actively seeking full-time opportunities.
        Open to backend, AI/ML, and data-driven product roles.
      </p>
    </CardContent>
  </Card>
          </div>

          {/* Social Links */}
  <div 
    className={`${
      isVisible ? 'animate-spring-in' : 'opacity-0 translate-y-8'
    }`}
    style={{ animationDelay: '800ms' }}
  >
    <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-cyan-400/50`}
        >
          <social.icon className="w-5 h-5" />
          <span className="text-sm font-medium">{social.label}</span>
        </a>
      ))}
    </div>
  </div>

                  </div>

        {/* CTA Section */}
        <div 
          className={`${
            isVisible ? 'animate-spring-in' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '1400ms' }}
        >
          <Card className=" bg-gradient-to-br from-slate-900 via-slate-800 to-purple-950 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Collaborate?</h3>
                <p className="text-gray-300">
                Open to opportunities in Data Engineering, ML Engineering, and Full-Stack Development
                </p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 font-semibold"
                >
                  Let's Start a Conversation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-cyan-400 hover:bg-cyan-100 hover:text-black"
                >
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sarita Joshi. Built with React & Tailwind CSS. 
            <span className="text-blue-400 ml-2">Always learning, always building.</span>
          </p>
        </div>
    </section>
  );
};

export default ContactSection;