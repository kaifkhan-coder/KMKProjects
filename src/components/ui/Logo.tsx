import React from 'react';
import { CircuitBoard } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className || ''}`}>
      <div className="relative flex items-center justify-center w-10 h-10 border-2 border-emerald-500 rounded shrink-0">
        <CircuitBoard className="absolute text-emerald-500/20 w-6 h-6" />
        <span className="relative text-2xl font-black text-emerald-500 z-10 leading-none">K</span>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-emerald-500"></div>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-emerald-500"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-white leading-none uppercase">
          KMK Projects
        </span>
        <span className="text-[0.6rem] font-medium text-emerald-500 mt-1 uppercase tracking-widest hidden sm:block">
          We Build Your Ideas Into Success
        </span>
      </div>
    </div>
  );
};
