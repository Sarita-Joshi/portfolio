
import { useState, useEffect } from 'react';
import { ArrowDown, Code2, MessageSquare, Bot } from 'lucide-react';

const Hero = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const chatMessages = [
    { type: 'user', text: "Tell me about Sarita’s expertise." },
    { type: 'bot', text: "She’s a creative technologist blending AI, data engineering, and product thinking to build smart, scalable systems." },
    { type: 'user', text: "Nice! What's her vibe?" },
    { type: 'bot', text: "Creative, curious, and driven. She’s always chasing the next challenge and finishing it with flair." },
    { type: 'user', text: "She sounds like someone I’d hire." },
    { type: 'bot', text: "She sounds like someone who’d impress you. Let’s get started." }
  ];

  useEffect(() => {
    const message = chatMessages[currentMessage];
    if (!message) return;

    let index = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < message.text.length) {
        setDisplayText(message.text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % chatMessages.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center  px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center w-full">
{/* Left side - Minimal intro with chatbot on right */}
<div className="text-left max-w-3xl max-sm:pt-12">
  <p className="text-lg font-medium mb-2">Hey there 👋</p>
  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
  I’m <span className="text-blue-400">Sarita.</span>
</h1>
<p className="text-lg text-gray-400 mb-8">
Feel free to scroll, click, or grab a coffee — I’ll be here.
</p>


  <div className="flex flex-row flex-wrap gap-4  gap-4">
    <a
      href="/Sarita_Joshi_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      View Resume
    </a>
    <button
      onClick={scrollToProjects}
      className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition"
    >
      View My Work
    </button>
  </div>
</div>



        {/* Right side - Chat Interface */}
        <div className="lg:block">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl p-6">
            <div className="flex items-center mb-6 pb-4 border-b border-gray-700">
              <Bot className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">Interactive Introduction</h3>
              <div className="ml-auto flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4 h-80 overflow-y-auto">
              {chatMessages.slice(0, currentMessage + 1).map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-200'
                  }`}>
                    {index === currentMessage ? (
                      <span>
                        {displayText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </span>
                    ) : (
                      message.text
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-gray-500" />
                <div className="flex-1 bg-gray-700 rounded-lg px-3 py-2">
                  <span className="text-gray-400 text-sm">Want to know more?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {!scrolled && <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
        <ArrowDown className="text-gray-500 mt-2 mx-auto" size={20} />
      </div>}
    </section>
  );
};

export default Hero;
