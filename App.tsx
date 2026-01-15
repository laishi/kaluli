
import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import DashboardScreen from './screens/DashboardScreen';
import CameraScreen from './screens/CameraScreen';
import ResultScreen from './screens/ResultScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import { AppTab, NutritionData } from './types';
import { recognizeFood } from './services/geminiService';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [resultData, setResultData] = useState<{ data: NutritionData; imageUrl: string } | null>(null);
  const [isLoadingResult, setIsLoadingResult] = useState(false);

  useEffect(() => {
    // Hide splash after a delay if needed or based on internal progress
  }, []);

  const handleCapture = async (base64: string) => {
    setIsCameraOpen(false);
    setIsLoadingResult(true);
    try {
      const nutrition = await recognizeFood(base64);
      setResultData({
        data: nutrition,
        imageUrl: `data:image/jpeg;base64,${base64}`
      });
    } catch (err) {
      alert("分析失败: " + (err as Error).message);
    } finally {
      setIsLoadingResult(false);
    }
  };

  const renderContent = () => {
    if (isLoadingResult) {
      return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <div className="relative size-32 mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl animate-pulse">memory</span>
            </div>
          </div>
          <p className="text-primary font-futuristic tracking-[0.2em] animate-pulse">AI CORE ANALYSIS...</p>
        </div>
      );
    }

    if (resultData) {
      return (
        <ResultScreen 
          data={resultData.data} 
          imageUrl={resultData.imageUrl} 
          onSave={() => {
            alert("已保存到日记");
            setResultData(null);
            setActiveTab(AppTab.HOME);
          }}
          onBack={() => setResultData(null)}
        />
      );
    }

    switch (activeTab) {
      case AppTab.HOME:
        return <DashboardScreen />;
      case AppTab.PROFILE:
        return <ProfileScreen />;
      case AppTab.TRENDS:
        return <div className="p-10 text-center text-gray-500">趋势分析模块加载中...</div>;
      case AppTab.RECORDS:
        return <div className="p-10 text-center text-gray-500">历史记录模块加载中...</div>;
      default:
        return <DashboardScreen />;
    }
  };

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-display">
      {renderContent()}
      
      {!resultData && !isLoadingResult && (
        <BottomNav 
          activeTab={activeTab} 
          onTabChange={(tab) => {
            if (tab === AppTab.CAMERA) {
              setIsCameraOpen(true);
            } else {
              setActiveTab(tab);
            }
          }} 
        />
      )}

      {isCameraOpen && (
        <CameraScreen 
          onCapture={handleCapture} 
          onCancel={() => setIsCameraOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
