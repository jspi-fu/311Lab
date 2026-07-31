import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Terminal as TerminalIcon, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TerminalRules } from '../components/TerminalRules';

const selectionSteps = [
  {
    phase: 'STEP 01 — OPEN CALL',
    title: '面向对象 · 26 级全院新生',
    desc: '广泛吸收来自江苏警官学院全院各专业、各学科的 26 级新生。不限专业背景，只要有热血与钻研精神！',
  },
  {
    phase: 'STEP 02 — PREP WINDOW',
    title: '备赛窗口 · 军训结束 → 十月底',
    desc: '利用军训结束到十月底的时间，提前自学编程基础语法、数组、循环与简单算法逻辑，便能在周赛中拔得头筹。',
  },
  {
    phase: 'STEP 03 — WEEKLY ARENA',
    title: '编程周赛 · 十月底正式启动',
    desc: '通过每周周赛题目考察逻辑思考、代码编写与学习抗压能力。',
  },
];

export const Join: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC] pt-24 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Step-by-step Indicator Header */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#DEDBC8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
          
          <div className="p-6 md:p-8 rounded-3xl bg-[#121215] border border-[#27272a] space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-[#DEDBC8]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>RECRUITMENT // 2026 级新生通道</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#E1E0CC] tracking-tight">
              加入 311 LAB 实验室
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
              广泛吸收 26 级全院新生，不限专业背景。十月底编程周赛正式启动，在这里开启你的算法竞赛与警务科研高光之旅。
            </p>
          </div>
        </div>

        {/* SECTION 1: MANIFESTO BANNER */}
        <div className="p-8 rounded-3xl bg-[#121215] border border-red-500/30 space-y-3">
          <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider">
            核心招募宣言
          </span>
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#E1E0CC] leading-relaxed">
            “让这些分数可以上 985/211 但不是地方大学的孩子们，在 JSPI 也能闪耀，也有搞科研、打比赛的机会，发出不亚于南大那些高等学府学生的独特光芒。”
          </p>
        </div>

        {/* SECTION 2: SELECTION & ASSESSMENT PIPELINE */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <TerminalIcon className="w-5 h-5 text-[#DEDBC8]" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">选拔考核流程与建议</h2>
          </div>

          {/* 三步选拔管线 */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 贯穿轨道线（桌面端） */}
            <div className="hidden md:block absolute top-11 left-[12%] right-[12%] h-px bg-[#27272a]" />

            {selectionSteps.map((step, idx) => (
              <div
                key={step.phase}
                className="relative p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-[#DEDBC8]/40 transition-colors"
              >
                {/* 轨道节点 */}
                <div className="w-10 h-10 rounded-full bg-[#0a0a0c] border border-[#DEDBC8]/40 flex items-center justify-center font-mono text-sm font-bold text-[#DEDBC8] mb-5">
                  0{idx + 1}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                  {step.phase}
                </span>
                <h3 className="text-base font-bold text-[#E1E0CC] mt-1.5">{step.title}</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">{step.desc}</p>

                {idx < selectionSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-[13px] w-4 h-4 text-[#DEDBC8] z-10" />
                )}
              </div>
            ))}
          </div>

          {/* 语言键帽 */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-4 p-5 rounded-2xl border border-[#27272a] bg-[#121215]">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
              ACCEPTED LANGUAGES /
            </span>
            <kbd className="px-3 py-1.5 rounded-md bg-[#18181b] border border-[#27272a] font-mono text-xs text-[#E1E0CC]">
              C
            </kbd>
            <kbd className="px-3 py-1.5 rounded-md bg-[#18181b] border border-[#27272a] font-mono text-xs text-[#E1E0CC]">
              C++
            </kbd>
            <kbd className="px-3 py-1.5 rounded-md bg-[#18181b] border border-[#DEDBC8]/50 font-mono text-xs font-bold text-[#DEDBC8] inline-flex items-center gap-2">
              PYTHON
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#DEDBC8] text-black font-bold">荐</span>
            </kbd>
            <span className="text-xs text-gray-400">
              语言仅为工具，核心在于算法逻辑与代码习惯。
            </span>
          </div>
        </section>

        {/* SECTION 3: MANAGEMENT RULES TERMINAL */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">日常管理三项要求</h2>
          </div>

          <TerminalRules />
        </section>

        {/* SECTION 4: GEEK SLOGAN CALL */}
        <section className="p-10 rounded-3xl bg-[#101010] border border-[#DEDBC8]/40 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#E1E0CC] tracking-tight">
            如果你符合以下期待——
          </h3>
          <div className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto space-y-2 leading-relaxed font-mono">
            <p>• 想在离家后加入一个胜似家的热血团队</p>
            <p>• 想作为优秀学生登台晚会、登上学院官微</p>
            <p>• 不怕苦，不怕累，为得国奖把码背</p>
            <p>• 肯吃苦，能耐劳，跪求系统要可靠</p>
          </div>
          <div className="pt-2">
            <span className="inline-block px-8 py-3 rounded-full bg-[#DEDBC8] text-black font-bold text-sm tracking-widest shadow-xl">
              ★ 那么——欢迎加入 311 实验室！
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
