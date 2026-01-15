
import React from 'react';
import { MOCK_HISTORY } from '../constants';

const ProfileScreen: React.FC = () => {
  return (
    <div className="max-w-[480px] mx-auto pb-32">
      <header className="flex items-center bg-black/80 backdrop-blur-md p-4 pb-2 justify-between sticky top-0 z-50">
        <button className="text-white flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined !text-[28px] text-primary">settings</span>
        </button>
        <h2 className="text-white text-lg font-black leading-tight tracking-wider flex-1 text-center">个人中心</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center rounded-xl h-12 bg-transparent text-white">
            <span className="material-symbols-outlined !text-[28px] text-primary">notifications</span>
          </button>
        </div>
      </header>

      <main className="px-5 pt-6">
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-4">
            <div className="size-28 rounded-full border-2 border-primary p-1">
              <div 
                className="w-full h-full rounded-full bg-center bg-cover border border-white/10" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOmJTC0tA0-PXVWRMptJxEFf-ts7_CsY_BSQsKj2HagBoZPuF7au1Zof2gbyX_w0SjFel1hMgzNDPnbqP_zD1VoGBl2Q1ID0fJs55ju0uoPiUIVipVPkqfg2SPHk0Ju1CExMaKsMEaTOi2thnBHCMrjbYBlStyCgpW1FdtFc_a01qk1jErJVcGITcQgltW4RAkP-DgmqjJKtxaUIYsXHBfAqJJuqk7Nu7X5Yj8EOHRO9u_44_FxwYJMgv67ukYsuOkxTdZlshNW10B")' }}
              ></div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary size-7 rounded-full flex items-center justify-center border-2 border-black">
              <span className="material-symbols-outlined text-[16px] text-white font-bold">bolt</span>
            </div>
          </div>
          <h1 className="text-2xl font-black mb-1">亚历克斯·约翰逊</h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-lg fill-1">local_fire_department</span>
              <span className="text-xs font-bold text-neutral-400">7 天连胜</span>
            </div>
            <div className="w-px h-3 bg-neutral-800"></div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-lg fill-1">workspace_premium</span>
              <span className="text-xs font-bold text-neutral-400">等级 12</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl p-5 mb-6 border border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold tracking-wide">饮食记录打卡</h3>
            <span className="text-sm font-black text-primary">2023年10月</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['日', '一', '二', '三', '四', '五', '六'].map(d => (
              <div key={d} className="text-[10px] font-black text-neutral-600 text-center pb-2 uppercase">{d}</div>
            ))}
            <div className="aspect-square"></div><div className="aspect-square"></div><div className="aspect-square"></div>
            <div className="aspect-square bg-primary/20 rounded-sm flex items-center justify-center text-[11px] font-bold text-white/50 border border-primary/30">1</div>
            {[2, 3, 4, 5].map(d => (
              <div key={d} className="aspect-square bg-primary rounded-sm flex items-center justify-center text-[11px] font-black text-white shadow-[0_0_15px_rgba(255,0,0,0.2)]">{d}</div>
            ))}
            <div className="aspect-square bg-primary/10 rounded-sm flex items-center justify-center text-[11px] font-bold text-white/40 border border-white/5">6</div>
            <div className="aspect-square bg-primary rounded-sm flex items-center justify-center text-[11px] font-black text-white shadow-[0_0_15px_rgba(255,0,0,0.2)]">7</div>
          </div>
          <p className="text-[11px] text-neutral-500 mt-5 text-center font-medium">红色方块表示已完成当日热量摄入目标</p>
        </div>

        <div className="bg-primary rounded-2xl p-6 mb-6 shadow-2xl shadow-primary/20">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">周卡路里趋势</p>
              <h3 className="text-3xl font-black text-white">12,450 <span className="text-xs">kcal</span></h3>
            </div>
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <span className="material-symbols-outlined text-white">show_chart</span>
            </div>
          </div>
          <div className="flex items-end justify-between h-24 gap-2 px-1">
            {[
              { label: '一', h: '60%' }, { label: '二', h: '85%' }, { label: '三', h: '45%' }, 
              { label: '四', h: '95%', active: true }, { label: '五', h: '70%' }, 
              { label: '六', h: '55%' }, { label: '日', h: '40%' }
            ].map(day => (
              <div key={day.label} className="flex flex-col items-center gap-2 flex-1">
                <div className={`w-full rounded-t-sm transition-all duration-500 ${day.active ? 'bg-white/60' : 'bg-white/30'}`} style={{ height: day.h }}></div>
                <span className={`text-[10px] font-bold ${day.active ? 'text-white' : 'text-white/80'}`}>{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black tracking-tight">最近记录</h3>
          <button className="text-primary text-xs font-bold px-3 py-1 bg-primary/10 rounded-full">查看全部</button>
        </div>
        
        <div className="space-y-3 pb-8">
          {MOCK_HISTORY.map(item => (
            <div key={item.id} className="flex items-center gap-4 p-3 bg-[#1A1A1A] rounded-xl border border-white/5">
              <div 
                className="size-14 rounded-lg bg-cover bg-center border border-white/10" 
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
              <div className="flex-1">
                <p className="font-bold text-sm">{item.foodName}</p>
                <p className="text-[11px] text-neutral-500">{item.mealType} • {item.timestamp}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-primary italic">{item.calories}</p>
                <p className="text-[9px] text-neutral-600 font-bold">千卡</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfileScreen;
