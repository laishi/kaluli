
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between bg-dark-bg z-[100] overflow-hidden">
      <div className="absolute inset-0 red-glow pointer-events-none"></div>
      
      <div className="h-14 w-full"></div>
      
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md px-10 relative z-10">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute h-48 w-48 rounded-full border border-primary/20 scale-125"></div>
          <div className="absolute h-40 w-40 rounded-full border-2 border-primary/40"></div>
          <div className="relative flex items-center justify-center w-32 h-32 bg-black rounded-full border-2 border-primary shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[72px] text-primary fill-1">visibility</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px] text-black translate-y-1">restaurant</span>
              </div>
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="font-futuristic text-white tracking-[0.15em] text-[48px] font-black leading-tight mb-3">
            AI <span className="text-primary">识食</span>
          </h1>
          <p className="text-white/50 text-sm font-light tracking-[0.4em] uppercase">
            Advanced Nutrition Vision
          </p>
        </div>

        <div className="w-full max-w-[180px] mt-16">
          <div className="flex flex-col gap-4">
            <div className="relative h-[1px] w-full bg-white/10 overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_#DC2626] transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase italic">
                System Loading
              </p>
              <p className="text-white/40 text-[10px] font-mono">
                {progress}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-14 text-center relative z-10 w-full">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-[1px] bg-primary/40 mb-2"></div>
          <p className="text-white/20 text-[10px] font-futuristic tracking-[0.5em] uppercase">
            Neural Engine v2.0
          </p>
          <p className="text-white/10 text-[9px] uppercase tracking-tighter mt-1">
            Secure AI Recognition Platform
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20 m-6 rounded-tl-xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 m-6 rounded-br-xl pointer-events-none"></div>
    </div>
  );
};

export default SplashScreen;
