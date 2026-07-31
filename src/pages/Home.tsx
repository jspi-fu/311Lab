import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WordsPullUp } from '../components/WordsPullUp';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';
import { AnimatedTextReveal } from '../components/AnimatedLetter';
import { NumberTicker } from '../components/NumberTicker';
import { CapabilitiesCarousel } from '../components/CapabilitiesCarousel';
import { TerminalRules } from '../components/TerminalRules';
import { Timeline } from '../components/Timeline';

export const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC]">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen p-3 sm:p-4 md:p-6 flex flex-col justify-between">
        {/* Rounded Inset Container */}
        <div className="relative w-full h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-[#27272a]/60 bg-[#09090b] flex flex-col justify-end p-6 sm:p-10 md:p-14">
          
          {/* Background Canvas: Dark Visual Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30 scale-105 filter saturate-150 contrast-125"
            >
              <source
                src="https://ik.imagekit.io/a3keouazok/311Lab-hero-bg.mp4"
                type="video/mp4"
              />
            </video>
            {/* SVG Noise Overlay */}
            <div className="absolute inset-0 noise-overlay opacity-[0.6] mix-blend-overlay pointer-events-none" />
            {/* Dark Gradient Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-[#0a0a0c]/80 pointer-events-none" />
          </div>

          {/* Top Inset Badge */}
          <div className="absolute top-6 sm:top-10 left-6 sm:left-10 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101010]/80 backdrop-blur-md border border-[#DEDBC8]/20 text-[10px] sm:text-xs font-mono tracking-widest text-[#DEDBC8]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>JSPI · NATIONAL SECURITY COLLEGE</span>
            </div>
          </div>

          {/* Bottom Hero Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left 8 Columns: Title */}
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#DEDBC8]/80 block mb-1">
                网络舆情安全实验室 · 青朗先锋团队
              </span>
              <WordsPullUp
                text="311 LAB"
                showAsterisk={true}
                className="text-[20vw] sm:text-[18vw] md:text-[14vw] lg:text-[11vw] font-bold leading-[0.85] tracking-tighter text-[#E1E0CC]"
              />
            </div>

            {/* Right 4 Columns: Description & CTA */}
            <div className="lg:col-span-4 space-y-6">
              <p className="text-xs sm:text-sm md:text-base text-[#DEDBC8]/80 leading-relaxed">
                由国家安全学院副院长洪磊教授领头，聚焦网络舆情安全与 AI 前沿工程。自 2017 年成立以来，突出公安需求导向，加强警务技术孵化，守护清朗网络空间。
              </p>

              <div>
                <Link
                  to="/join"
                  className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-full bg-[#DEDBC8] text-black font-semibold text-sm transition-colors hover:bg-[#f0edd9]"
                >
                  <span>申请加入 311 LAB</span>
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE STATS (OPS SCOREBOARD) */}
      <section className="py-16 px-4 md:px-8 border-b border-[#27272a]/60 bg-[#0a0a0c]">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-[#27272a] bg-[#0c0c0e] overflow-hidden">
            {/* 面板状态栏 */}
            <div className="flex items-center justify-between px-5 md:px-6 py-3 border-b border-[#27272a] bg-[#121215]">
              <div className="flex items-center gap-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#DEDBC8]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LAB PERFORMANCE / 2017 — 2026</span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-600">
                UNIT: AWARDS · PERSONS
              </span>
            </div>

            {/* 计分板主体 */}
            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a]">
                <div className="group p-6 md:p-8 bg-[#0c0c0e] hover:bg-[#101010] transition-colors">
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors mb-4">
                    Development
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#DEDBC8] tabular-nums">
                    <NumberTicker value={9} />
                    <span className="text-xl sm:text-2xl md:text-3xl ml-1 text-[#DEDBC8]/60 font-sans">年</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-400">实验室成立持续发展</div>
                </div>

                <div className="group relative p-6 md:p-8 bg-[#0c0c0e] lg:bg-[#DEDBC8]/[0.04] hover:bg-[#DEDBC8]/[0.07] transition-colors overflow-hidden">
                  <Trophy className="absolute -right-3 -bottom-4 w-24 h-24 text-[#DEDBC8]/[0.07] group-hover:text-[#DEDBC8]/[0.12] transition-colors" />
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#DEDBC8] font-bold mb-4">
                    ★ National Awards
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#DEDBC8] tabular-nums">
                    <NumberTicker value={56} />
                    <span className="text-xl sm:text-2xl md:text-3xl ml-1 text-[#DEDBC8]/60 font-sans">项</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-300">国家级学科竞赛奖项</div>
                </div>

                <div className="group p-6 md:p-8 bg-[#0c0c0e] hover:bg-[#101010] transition-colors">
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors mb-4">
                    Provincial Awards
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#DEDBC8] tabular-nums">
                    <NumberTicker value={99} />
                    <span className="text-xl sm:text-2xl md:text-3xl ml-1 text-[#DEDBC8]/60 font-sans">项</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-400">省级学科竞赛奖项</div>
                </div>

                <div className="group p-6 md:p-8 bg-[#0c0c0e] hover:bg-[#101010] transition-colors">
                  <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors mb-4">
                    Total Winners
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#DEDBC8] tabular-nums">
                    <NumberTicker value={527} />
                    <span className="text-xl sm:text-2xl md:text-3xl ml-1 text-[#DEDBC8]/60 font-sans">人次</span>
                  </div>
                  <div className="mt-4 text-xs text-gray-400">团队成员累计获奖</div>
                </div>
              </div>

              {/* 扫描线 */}
              <motion.div
                aria-hidden
                className="absolute inset-y-0 w-1/3 pointer-events-none bg-gradient-to-r from-transparent via-[#DEDBC8]/[0.05] to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '400%' }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MANIFESTO & ABOUT (Asymmetric Left-aligned) */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0c] relative">
        <div className="max-w-5xl mx-auto border-l-2 border-[#DEDBC8]/40 pl-6 sm:pl-10 space-y-8">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-[#E1E0CC]">
            <WordsPullUpMultiStyle
              segments={[
                { text: '由洪磊教授领头，以青年之力，', className: 'font-sans text-[#E1E0CC]' },
                { text: '守护清朗网络空间。', className: 'font-sans font-bold text-[#DEDBC8]' },
              ]}
            />
          </div>

          <AnimatedTextReveal
            text="让这些分数可以上985/211但不是地方大学的孩子们，在JSPI也能闪耀，也有搞科研、打比赛的机会，发出不亚于南大那些高等学府学生的独特光芒。"
            className="text-base sm:text-lg md:text-xl text-[#DEDBC8]/90 max-w-3xl leading-relaxed font-light text-left"
          />

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/overview"
              className="px-6 py-2.5 rounded-full border border-[#27272a] bg-[#121215] text-xs sm:text-sm text-gray-300 hover:text-white hover:border-[#DEDBC8] transition-colors"
            >
              了解实验室概况与设施 →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: CAPABILITIES SHOWCASE */}
      <section className="py-20 px-4 md:px-8 bg-[#0a0a0c] border-t border-[#27272a]/60">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#E1E0CC] tracking-tight">
                硬件设施 · 科研矩阵 · 警务实战 · 素拓破局
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md">
              切换下方滑动卡片，全方位了解 311 实验室如何助力每一位成员实现技术与履历的双重突破。
            </p>
          </div>

          <CapabilitiesCarousel />
        </div>
      </section>

      {/* SECTION 5: RECRUITMENT & MANAGEMENT RULES (Terminal Style, Left Aligned Header) */}
      <section className="py-24 px-4 md:px-8 bg-[#08080a] border-t border-[#27272a]/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          <div className="space-y-2 border-b border-[#27272a] pb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E1E0CC]">
              选拔考核与日常管理规范
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              面向全院 26 级新生招生，十月底开始编程周赛选拔。严明纪律、尊重意愿、共同成长。
            </p>
          </div>

          <TerminalRules />
        </div>
      </section>

      {/* SECTION 6: FUTURE ROADMAP (Timeline, Left Aligned Header) */}
      <section className="py-24 px-4 md:px-8 bg-[#0a0a0c] border-t border-[#27272a]/60">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-2 border-b border-[#27272a] pb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E1E0CC]">
              2025 - 2027 发展规划时间线
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              清晰的科研与竞赛蓝图，让每一年的付出都有迹可循、收获满满。
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION (Side-by-Side Full-width Banner Layout) */}
      <section className="py-20 px-6 md:px-12 bg-[#121215] border-t border-[#27272a] relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#E1E0CC] tracking-tight">
              准备好加入青朗先锋，发出属于你的独特光芒了吗？
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              不怕苦，不怕累，为得国奖把码背；肯吃苦，能耐劳，跪求系统要可靠。311 实验室等待你的加入！
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/join"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#DEDBC8] text-black font-bold text-sm hover:bg-[#f0edd9] transition-colors"
            >
              <span>了解 26 级选拔流程</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#27272a] bg-[#0a0a0c] text-[#E1E0CC] text-sm hover:bg-white/5 transition-colors"
            >
              查看历年战绩
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
