import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'scale-in' | 'slide-left' | 'slide-right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'scale-in':
        return isVisible ? 'animate-spring-in' : 'opacity-0 scale-95';
      case 'slide-left':
        return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-x-8';
      case 'slide-right':
        return isVisible ? 'animate-fade-in-up' : 'opacity-0 -translate-x-8';
        case 'slide-right':
          return isVisible ? 'animate-fade-in-up' : 'opacity-0 -translate-x-8';
        default:
        return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div 
      ref={sectionRef} 
      className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;