import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '获奖成果', path: '/achievements' },
    { name: '个人发展', path: '/development' },
    { name: '实验室概况', path: '/overview' },
    { name: '加入我们', path: '/join' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      {/* Hanging pill container */}
      <div className="pointer-events-auto bg-[#0a0a0c]/90 backdrop-blur-md border border-[#27272a] rounded-b-2xl md:rounded-b-3xl px-4 sm:px-6 md:px-10 py-2.5 md:py-3 shadow-2xl flex items-center justify-between gap-4 md:gap-10 transition-colors duration-300">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/logo.png" alt="311 LAB Logo" className="h-7 w-auto object-contain group-hover:opacity-90 transition-opacity" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#E1E0CC] flex items-center gap-1.5">
            青朗先锋 <span className="hidden sm:inline text-xs text-gray-500 font-normal">| 舆情安全实验室</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-xs md:text-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-[#E1E0CC] font-bold' : 'text-[#E1E0CC]/70 hover:text-[#E1E0CC]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DEDBC8] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Badge */}
        <Link
          to="/join"
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-[#DEDBC8]/10 hover:bg-[#DEDBC8]/20 border border-[#DEDBC8]/30 text-[#DEDBC8] transition-colors duration-200"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>招新通道</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#E1E0CC] p-1 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="pointer-events-auto fixed inset-x-4 top-16 bg-[#101014]/95 backdrop-blur-xl border border-[#27272a] rounded-2xl p-6 md:hidden shadow-2xl flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#DEDBC8]/10 text-[#E1E0CC] font-bold'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 text-center text-xs font-semibold text-black bg-[#DEDBC8] rounded-xl hover:bg-[#f0edd9] transition-colors"
            >
              立即加入 311 LAB
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
