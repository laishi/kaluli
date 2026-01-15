
import React from 'react';
import { AppTab } from '../types';

interface BottomNavProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 pt-4 pb-8 flex items-center justify-between z-50">
      <button 
        onClick={() => onTabChange(AppTab.HOME)}
        className={`flex flex-col items-center gap-1 ${activeTab === AppTab.HOME ? 'text-primary-neon' : 'text-gray-500'}`}
      >
        <span className={`material-symbols-outlined text-2xl ${activeTab === AppTab.HOME ? 'fill-1' : ''}`}>grid_view</span>
        <span className="text-[10px] font-black uppercase">首页</span>
      </button>
      
      <button 
        onClick={() => onTabChange(AppTab.TRENDS)}
        className={`flex flex-col items-center gap-1 ${activeTab === AppTab.TRENDS ? 'text-primary-neon' : 'text-gray-500'}`}
      >
        <span className={`material-symbols-outlined text-2xl ${activeTab === AppTab.TRENDS ? 'fill-1' : ''}`}>analytics</span>
        <span className="text-[10px] font-black uppercase">趋势</span>
      </button>

      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <button 
          onClick={() => onTabChange(AppTab.CAMERA)}
          className="size-20 bg-crimson-red rounded-full shadow-[0_0_30px_rgba(220,20,60,0.5)] flex items-center justify-center text-white border-[6px] border-black hover:scale-105 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-4xl leading-none">photo_camera</span>
        </button>
      </div>

      <button 
        onClick={() => onTabChange(AppTab.RECORDS)}
        className={`flex flex-col items-center gap-1 ${activeTab === AppTab.RECORDS ? 'text-primary-neon' : 'text-gray-500'}`}
      >
        <span className={`material-symbols-outlined text-2xl ${activeTab === AppTab.RECORDS ? 'fill-1' : ''}`}>fastfood</span>
        <span className="text-[10px] font-black uppercase">记录</span>
      </button>

      <button 
        onClick={() => onTabChange(AppTab.PROFILE)}
        className={`flex flex-col items-center gap-1 ${activeTab === AppTab.PROFILE ? 'text-primary-neon' : 'text-gray-500'}`}
      >
        <span className={`material-symbols-outlined text-2xl ${activeTab === AppTab.PROFILE ? 'fill-1' : ''}`}>account_circle</span>
        <span className="text-[10px] font-black uppercase">我的</span>
      </button>
    </nav>
  );
};

export default BottomNav;
