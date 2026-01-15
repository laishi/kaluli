
import React from 'react';
import { NutritionData } from '../types';

interface ResultScreenProps {
  data: NutritionData;
  imageUrl: string;
  onSave: () => void;
  onBack: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ data, imageUrl, onSave, onBack }) => {
  const totalMacros = data.protein + data.carbs + data.fat;
  const pPct = Math.round((data.protein / totalMacros) * 100);
  const cPct = Math.round((data.carbs / totalMacros) * 100);
  const fPct = Math.round((data.fat / totalMacros) * 100);

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto overflow-x-hidden bg-dark-bg border-x border-[#2A2A2A]/50">
      <div className="flex items-center p-4 justify-between sticky top-0 bg-dark-bg/90 backdrop-blur-xl z-30 border-b border-[#2A2A2A]">
        <button 
          onClick={onBack}
          className="flex size-10 items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl text-primary-red">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-black leading-tight tracking-widest flex-1 text-center uppercase">识别结果</h2>
        <div className="size-10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary-red">more_horiz</span>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-5 pt-4 pb-40">
        <div className="relative mb-8">
          <div 
            className="w-full aspect-square bg-center bg-no-repeat bg-cover border-[6px] border-primary-red shadow-[0_0_20px_rgba(255,0,0,0.3)]" 
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-3 right-4 bg-primary-red text-white px-4 py-1 flex items-center gap-2 skew-x-[-12deg] font-black italic">
            <span className="material-symbols-outlined text-[18px] fill-1 skew-x-[12deg]">memory</span>
            <span className="text-xs uppercase tracking-tighter skew-x-[12deg]">AI 核心扫描</span>
          </div>
        </div>

        <div className="mb-10 text-center">
          <p className="text-primary-red text-sm font-black tracking-[0.3em] uppercase mb-1">能量数值报告</p>
          <h1 className="text-3xl font-black mb-4 tracking-tight">{data.foodName}</h1>
          <div className="flex flex-col items-center justify-center py-4 border-y-2 border-primary-red/20">
            <span className="text-[110px] leading-none font-[900] tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {data.calories}
            </span>
            <span className="text-2xl font-black text-primary-red mt-[-10px] tracking-[0.5em] ml-[0.5em]">千卡</span>
          </div>
        </div>

        <div className="space-y-8 bg-[#0A0A0A] p-6 border border-[#2A2A2A]">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-black text-primary-red uppercase tracking-widest">营养宏观分析</span>
            <span className="text-[10px] text-gray-500">SYSTEM v2.0</span>
          </div>

          {[
            { label: '蛋白质', val: data.protein, pct: pPct },
            { label: '碳水化合物', val: data.carbs, pct: cPct },
            { label: '脂肪', val: data.fat, pct: fPct },
          ].map(macro => (
            <div key={macro.label} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-red"></span> {macro.label}</span>
                <span>{macro.val}g <span className="text-gray-500 font-normal ml-1">/ {macro.pct}%</span></span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 h-3 ${i < Math.round(macro.pct / 10) ? 'bg-primary-red' : 'bg-[#2A2A2A]'}`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border-l-4 border-primary-red bg-[#2A2A2A]/30 flex gap-4">
          <span className="material-symbols-outlined text-primary-red shrink-0">info</span>
          <p className="text-xs text-gray-400 leading-relaxed font-medium">
            <span className="text-white font-bold">系统建议:</span> {data.suggestions}
          </p>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto p-6 bg-gradient-to-t from-black via-black/95 to-transparent z-40">
        <div className="flex flex-col gap-3">
          <button 
            onClick={onSave}
            className="w-full bg-primary-red hover:bg-red-700 text-white font-[900] py-4 transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(255,0,0,0.4)] uppercase tracking-widest text-lg"
          >
            <span className="material-symbols-outlined fill-1">save</span>
            记录进日记
          </button>
          <div className="flex gap-3">
            <button className="flex-1 bg-[#2A2A2A] hover:bg-gray-800 text-white font-bold py-3 transition-all flex items-center justify-center gap-2 border border-white/10 text-sm">
              <span className="material-symbols-outlined text-sm">edit</span>
              编辑数据
            </button>
            <button className="flex-1 bg-[#2A2A2A] hover:bg-gray-800 text-white font-bold py-3 transition-all flex items-center justify-center gap-2 border border-white/10 text-sm">
              <span className="material-symbols-outlined text-sm">share</span>
              分享结果
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-1.5 bg-[#2A2A2A] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
