import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#070709] border-t border-[#27272a] text-[#E1E0CC]/80 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="311 LAB Logo" className="h-7 w-auto object-contain" />
            <span className="text-sm font-bold text-[#E1E0CC]">
              网络舆情安全实验室
            </span>
          </div>
          <span className="hidden sm:inline text-gray-600">|</span>
          <p className="text-xs text-gray-400 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#DEDBC8] shrink-0" />
            <span>江苏警官学院 · 国家安全学院 311室</span>
          </p>
        </div>

        {/* Credentials & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-500 font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400/90 font-sans">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>重点警务孵化实验室</span>
          </span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <span>© 2026 311 LAB. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};
