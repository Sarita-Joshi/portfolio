import { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Awards from '@/components/Awards';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import TechnicalSkills from '@/components/TechnicalSkiils';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("initialLoadDone");

    if (!alreadyLoaded) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("initialLoadDone", "true");
      }, 1000); // adjust your loader time
    } else {
      // Skip loader immediately if session already marked as loaded
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Tech-inspired background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 -right-4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <TechnicalSkills />
        <Education />
        <Experience />
        <Projects />
        <Awards />
        
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
