
import React from 'react';
import CalorieGauge from '../components/CalorieGauge';
import { MOCK_HISTORY } from '../constants';

const DashboardScreen: React.FC = () => {
  const currentCal = 760;
  const goalCal = 2000;

  return (
    <div className="pb-32">
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-11 rounded-full border-2 border-primary-neon/50 p-0.5">
            <img 
              className="w-full h-full rounded-full object-cover" 
              alt="User profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdwG5cF_SmqflkaxvsS9u6vzHt7rBudjt01BOe11nd5LMNJvbYf_kWc2LfYaNmcdaxUKETKSikQUhsLlCHMUsRVFXvckvdIUSIsK0zoMaK2qN8pdHAU4h4LnI44h26RdIEPlFQoVJ4-Nt9ZiKz_WZpd7hHvOgkH7emGDUe_rlklmxcVnKJMBuZfTPPRq7lyz11mh4jUvCfy4FgC3_yFtUYMYdILqcNZpp4StrqelKgv-ngx_x1iKeR70J9OmosswLqqDQaWrq0HMb3"
            />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">今日数据</p>
            <h2 className="text-lg font-black tracking-tight">你好, ALEX</h2>
          </div>
        </div>
        <button className="size-10 rounded-full bg-card-gray border border-white/5 flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>
      </header>

      <main className="px-6 space-y-10">
        <section className="flex flex-col items-center pt-8">
          <CalorieGauge current={currentCal} total={goalCal} />
          <div className="w-full grid grid-cols-2 gap-4 mt-8">
            <div className="bg-card-gray border border-border-red p-4 rounded-2xl flex flex-col items-center">
              <p className="text-[10px] text-gray-400 font-bold mb-1">已摄入</p>
              <p className="text-xl font-black text-white">{currentCal}</p>
            </div>
            <div className="bg-card-gray border border-border-red p-4 rounded-2xl flex flex-col items-center">
              <p className="text-[10px] text-gray-400 font-bold mb-1">每日目标</p>
              <p className="text-xl font-black text-white">{goalCal}</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between mb-5">
            <h3 className="text-xl font-black tracking-tight">营养配比</h3>
            <span className="text-xs font-bold text-primary-neon uppercase tracking-widest">详细报告</span>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {[
              { label: '蛋白质', val: 45, max: 120, icon: 'fitness_center' },
              { label: '碳水', val: 150, max: 250, icon: 'bakery_dining' },
              { label: '脂肪', val: 30, max: 65, icon: 'opacity' },
            ].map((macro) => (
              <div key={macro.label} className="bg-card-gray border border-border-red p-5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-primary-neon/10 flex items-center justify-center border border-primary-neon/20">
                    <span className="material-symbols-outlined text-primary-neon">{macro.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{macro.label}</p>
                    <p className="text-lg font-black">{macro.val}<span className="text-xs text-gray-500 ml-1">/ {macro.max}克</span></p>
                  </div>
                </div>
                <div className="w-24 h-2 bg-black rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-primary-neon shadow-[0_0_8px_rgba(255,0,0,0.6)]" 
                    style={{ width: `${(macro.val / macro.max) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-10">
          <h3 className="text-xl font-black mb-5 tracking-tight">最近识别</h3>
          {MOCK_HISTORY.slice(0, 1).map(item => (
            <div key={item.id} className="bg-card-gray border border-border-red p-4 rounded-2xl flex items-center gap-4">
              <div 
                className="size-20 rounded-xl bg-cover bg-center border border-white/10" 
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-gray-500 uppercase">{item.timestamp} · {item.mealType}</p>
                <p className="text-lg font-black">{item.foodName}</p>
                <p className="text-base text-primary-neon font-black italic">{item.calories} KCAL</p>
              </div>
              <button className="size-10 rounded-full flex items-center justify-center bg-black border border-white/5 text-primary-neon">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default DashboardScreen;
