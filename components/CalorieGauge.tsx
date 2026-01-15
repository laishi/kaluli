
import React from 'react';

interface CalorieGaugeProps {
  current: number;
  total: number;
}

const CalorieGauge: React.FC<CalorieGaugeProps> = ({ current, total }) => {
  const percentage = Math.min((current / total) * 100, 100);
  const remaining = Math.max(total - current, 0);

  // Rotation logic: -45deg to 135deg (180deg total sweep)
  // 0% -> -45deg
  // 100% -> 135deg
  const rotation = -45 + (percentage * 1.8);

  return (
    <div className="relative w-[280px] h-[140px] overflow-hidden">
      {/* Track */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] rounded-full border-[12px] border-[#222] border-b-transparent border-l-transparent -rotate-45"></div>
      
      {/* Fill */}
      <div 
        className="absolute top-0 left-0 w-[280px] h-[280px] rounded-full border-[12px] border-primary-neon border-b-transparent border-l-transparent transition-transform duration-1000 ease-out"
        style={{ transform: `rotate(${rotation}deg)`, boxShadow: '0 0 15px rgba(255, 0, 0, 0.5)', filter: 'drop-shadow(0 0 5px #FF0000)' }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 text-center pb-2">
        <span className="text-5xl font-black block tracking-tighter">{remaining.toLocaleString()}</span>
        <span className="text-[10px] text-primary-neon font-bold tracking-[0.2em] uppercase">剩余千卡</span>
      </div>
    </div>
  );
};

export default CalorieGauge;
