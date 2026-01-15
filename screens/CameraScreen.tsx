
import React, { useRef, useState, useEffect } from 'react';

interface CameraScreenProps {
  onCapture: (base64: string) => void;
  onCancel: () => void;
}

const CameraScreen: React.FC<CameraScreenProps> = ({ onCapture, onCancel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    };
    startCamera();
    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        ctx.drawImage(videoRef.current, 0, 0);
        const base64 = canvasRef.current.toDataURL('image/jpeg', 0.8).split(',')[1];
        onCapture(base64);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(',')[1];
        onCapture(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.85)_100%)]"></div>
      </div>

      <div className="relative z-30 flex items-center justify-between p-6 pt-12">
        <button 
          onClick={onCancel}
          className="flex size-11 items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-xl text-white"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex gap-4">
          <button className="flex size-11 items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-xl text-white">
            <span className="material-symbols-outlined">history</span>
          </button>
          <button className="flex size-11 items-center justify-center rounded-full bg-black/40 border border-white/10 backdrop-blur-xl text-white">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      <div className="relative z-20 flex-1 flex items-center justify-center px-12">
        <div className="w-full aspect-square max-w-[280px] relative">
          <div className="laser-line"></div>
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[3px] border-l-[3px] border-primary"></div>
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-[3px] border-r-[3px] border-primary"></div>
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-[3px] border-l-[3px] border-primary"></div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[3px] border-r-[3px] border-primary"></div>
          <div className="absolute inset-0 border border-white/5 bg-primary/5"></div>
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-full">
            <div className="bg-black/60 border border-primary/50 text-primary px-4 py-1 rounded-sm text-[10px] font-bold tracking-[0.2em] backdrop-blur-md uppercase">
              AI 智能扫描中
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 bg-gradient-to-t from-black via-black/80 to-transparent pb-10 pt-16 px-6">
        <div className="flex justify-center mb-10">
          <div className="bg-primary/10 border border-primary/30 backdrop-blur-md px-6 py-2 rounded-full">
            <p className="text-primary text-xs font-bold tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm animate-pulse">target</span>
              对准食物以识别热量
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between max-w-sm mx-auto mb-10">
          <div className="flex flex-col items-center gap-2 w-16">
            <label className="cursor-pointer">
              <input type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />
              <div className="size-12 rounded-lg border border-white/20 overflow-hidden bg-white/5 p-0.5">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-400">image</span>
                </div>
              </div>
            </label>
            <span className="text-white/50 text-[10px] font-bold tracking-widest">相册</span>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute size-24 rounded-full border-2 border-primary/30 animate-ping"></div>
            <button 
              onClick={handleCapture}
              className="size-20 rounded-full border-[3px] border-primary shutter-glow flex items-center justify-center bg-transparent active:scale-90 transition-transform"
            >
              <div className="size-16 rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">camera</span>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-center gap-2 w-16">
            <button className="size-12 rounded-full bg-white/5 border border-white/20 backdrop-blur-md text-white flex items-center justify-center">
              <span className="material-symbols-outlined">bolt</span>
            </button>
            <span className="text-white/50 text-[10px] font-bold tracking-widest">闪光灯</span>
          </div>
        </div>

        <div className="flex justify-center gap-10 items-center overflow-x-hidden">
          <span className="text-white/30 text-[11px] font-bold tracking-tighter whitespace-nowrap">多项识别</span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-primary text-xs font-black tracking-widest border-b-2 border-primary pb-1">单菜品模式</span>
          </div>
          <span className="text-white/30 text-[11px] font-bold tracking-tighter whitespace-nowrap">条形码</span>
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraScreen;
