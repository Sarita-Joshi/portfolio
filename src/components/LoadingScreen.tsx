import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Initializing AI portfolio...",
    "Loading data pipelines...",
    "Connecting to cloud services...",
    "Deploying ML models...",
    "Compiling technical skills...",
    "Ready to showcase amazing work!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        } else {
          setTimeout(() => onComplete(), 800);
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 font-mono text-sm max-w-md w-full mx-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2">Terminal</span>
        </div>
        
        <div className="space-y-3">
          {loadingSteps.map((step, index) => (
            <div key={index} className={`flex items-center gap-2 transition-all duration-300 ${
              index <= currentStep ? 'opacity-100' : 'opacity-30'
            }`}>
              <span className="text-purple-400">$</span>
              <span className="text-cyan-400">{step}</span>
              {index === currentStep && (
                <span className="animate-pulse text-cyan-400">|</span>
              )}
              {index < currentStep && (
                <span className="text-green-400 ml-auto">✓</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
