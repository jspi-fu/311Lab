import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Key, Award, ShieldCheck, CheckCircle, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NumberTicker } from '../components/NumberTicker';

/* 6211 综评构成（占比为真实权重） */
const scoreSegments = [
  {
    name: '智育',
    en: 'INTELLECTUAL',
    pct: 60,
    bg: 'bg-[#141417]',
    note: '队长看重排名，但优等生之间智育分数差距微弱，难以单靠智育拉开绝对档次。',
  },
  {
    name: '警务化',
    en: 'POLICE MGMT',
    pct: 20,
    bg: 'bg-[#18181b]',
    note: '有干部分数稍高，无干部的保持常规扣分，基础得分差距微乎其微。',
  },
  {
    name: '体能',
    en: 'PHYSICAL',
    pct: 10,
    bg: 'bg-[#1d1d21]',
    note: '保持基础体能达标即可，在综评总分中影响权重有限。',
  },
  {
    name: '素拓',
    en: 'KEY DIFFERENCE',
    pct: 10,
    bg: 'bg-[#DEDBC8]',
    note: '关键拉开项！涵盖科研创新、白名单竞赛、文体活动与社会实践。',
  },
];

/* 实战覆盖节点（布局为示意拓扑，非地理坐标） */
const cityNodes = [
  { name: '南京', x: 215, y: 118 },
  { name: '无锡', x: 520, y: 84 },
  { name: '连云港', x: 645, y: 68 },
  { name: '苏州', x: 620, y: 236 },
  { name: '常熟', x: 445, y: 286 },
  { name: '宿迁', x: 128, y: 236 },
];

const HUB = { x: 380, y: 172 };

export const Development: React.FC = () => {
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC] pt-24 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Custom Development Header */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#DEDBC8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-b border-[#27272a] pb-8 pt-2">
            <div className="md:col-span-8 space-y-2">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#E1E0CC] tracking-tight">
                个人发展与公安实战
              </h1>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                深度解构 6211 综合评价体系胜负手，助力素拓加分破局；提前对接网安、情指等公安一线实战部门，积累不可替代的履历成果。
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col items-start md:items-end gap-2 font-mono text-xs text-emerald-400">
              <span className="bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                ★ 12 分/学期 素拓轻松刷满
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 1: 6211 综合评价体系解构（比例合成条） */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Key className="w-6 h-6 text-[#DEDBC8]" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">6211 综合评价体系解构</h2>
          </div>

          <div>
            {/* 堆叠合成条：宽度即真实权重 */}
            <div className="flex h-16 md:h-20 rounded-2xl overflow-hidden border border-[#27272a] bg-black">
              {scoreSegments.map((seg, idx) => {
                const isKey = idx === 3;
                return (
                  <motion.div
                    key={seg.name}
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${seg.pct}%` }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className={`${seg.bg} ${idx < 3 ? 'border-r border-[#27272a]' : ''} ${
                      isKey ? 'relative' : ''
                    } flex items-center justify-center`}
                  >
                    {isKey && (
                      <motion.span
                        aria-hidden
                        className="absolute inset-0 bg-[#DEDBC8]"
                        animate={{ opacity: [0, 0.35, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    <span
                      className={`relative font-extrabold tracking-tight ${
                        isKey
                          ? 'text-black text-sm md:text-xl'
                          : 'text-gray-500 text-base md:text-2xl'
                      }`}
                    >
                      {seg.pct}%
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* 胜负手标注：指向末端 10% 素拓段 */}
            <div className="mt-3 flex justify-end">
              <div className="flex items-start gap-2 max-w-[240px] sm:max-w-xs">
                <Flame className="w-4 h-4 text-[#DEDBC8] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#DEDBC8]">
                    胜负手 · 一学期 12 分可刷满
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                    前三项差距微乎其微，末端 10% 素拓才是拉开综合排名的关键。
                  </div>
                </div>
              </div>
            </div>

            {/* 构成图例 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 pt-6 mt-4 border-t border-[#27272a]/60">
              {scoreSegments.map((seg, idx) => {
                const isKey = idx === 3;
                return (
                  <div key={seg.name}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-[3px] shrink-0 ${
                          isKey ? 'bg-[#DEDBC8]' : 'bg-[#3f3f46]'
                        }`}
                      />
                      <span
                        className={`text-sm font-bold ${
                          isKey ? 'text-[#DEDBC8]' : 'text-[#E1E0CC]'
                        }`}
                      >
                        {seg.name} {seg.pct}%
                      </span>
                    </div>
                    <div className="text-[10px] font-mono tracking-widest text-gray-600 mt-1">
                      {seg.en}
                    </div>
                    <p
                      className={`text-[11px] mt-2 leading-relaxed ${
                        isKey ? 'text-gray-300 font-semibold' : 'text-gray-500'
                      }`}
                    >
                      {seg.note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Lab Advantage Cards（保留原设计） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#101010] border border-[#27272a] space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#DEDBC8]/10 border border-[#DEDBC8]/30 flex items-center justify-center text-[#DEDBC8]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#E1E0CC]">实验室如何助你刷满素拓分？</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>
                    <strong>白名单赛事认证：</strong> 实验室参与的所有项目均纳入《2023 全国普通高校大学生竞赛分析报告》，完全符合学院评奖评优与素拓申报标准。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>
                    <strong>稀缺科研创新分：</strong> 在实验室之外，普通学生极难获得科研创新类素拓加分；而在 311 实验室，一学期 12 分的上限可轻松靠竞赛和项目刷满。
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#101010] border border-[#27272a] space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-[#DEDBC8]/10 border border-[#DEDBC8]/30 flex items-center justify-center text-[#DEDBC8]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#E1E0CC]">学院嘉奖与通报表扬</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>
                    <strong>学院嘉奖：</strong> 在重点赛事中取得卓越国奖成绩的同学，可直接申请学院嘉奖，获得官方荣誉证书、奖金及警务化额外加分。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#DEDBC8] shrink-0 mt-0.5" />
                  <span>
                    <strong>通报表扬：</strong> 实验室绝大部分取得成果的成员均可斩获学院通报表扬，极大充实档案与评优履历。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2: 公安一线实战对接（部署网络） */}
        <section className="space-y-8 pt-6 border-t border-[#27272a]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#DEDBC8]" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">公安一线实战对接</h2>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/20 via-[#101010] to-[#18181b] border border-[#27272a] space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-emerald-400">REAL POLICE FIELDWORK</span>
              <h3 className="text-2xl font-bold text-[#E1E0CC]">提前熟悉警务业务，未毕业已获领导认可</h3>
              <p className="text-xs sm:text-sm text-gray-400">
                与网安、情指等公安核心部门保持长效深度的项目协作。算法与工程直接服务于一线警务实战。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
              {/* 部署网络拓扑：311 LAB 为枢纽，信号沿链路脉冲流动 */}
              <svg
                viewBox="0 0 760 340"
                className="w-full select-none"
                role="img"
                aria-label="实战成果覆盖地市网络：南京、无锡、连云港、苏州、常熟、宿迁"
              >
                {/* 枢纽雷达环 */}
                {[52, 92, 132].map((r) => (
                  <circle
                    key={r}
                    cx={HUB.x}
                    cy={HUB.y}
                    r={r}
                    fill="none"
                    stroke="#27272a"
                    strokeDasharray="3 6"
                    opacity={1 - r / 200}
                  />
                ))}

                {/* 链路：底线 + 脉冲信号 */}
                {cityNodes.map((c, idx) => (
                  <g key={`link-${c.name}`}>
                    <line
                      x1={HUB.x}
                      y1={HUB.y}
                      x2={c.x}
                      y2={c.y}
                      stroke={hoveredCity === idx ? '#DEDBC8' : '#27272a'}
                      strokeWidth={hoveredCity === idx ? 1.4 : 1}
                      opacity={hoveredCity === idx ? 0.55 : 1}
                      style={{ transition: 'stroke 0.25s' }}
                    />
                    <motion.line
                      x1={HUB.x}
                      y1={HUB.y}
                      x2={c.x}
                      y2={c.y}
                      stroke="#34d399"
                      strokeWidth={1.2}
                      strokeDasharray="3 18"
                      strokeLinecap="round"
                      opacity={hoveredCity === idx ? 0.9 : 0.45}
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -42 }}
                      transition={{
                        duration: 2 + idx * 0.3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </g>
                ))}

                {/* 城市节点 */}
                {cityNodes.map((c, idx) => (
                  <g
                    key={c.name}
                    onMouseEnter={() => setHoveredCity(idx)}
                    onMouseLeave={() => setHoveredCity(null)}
                    style={{ cursor: 'default' }}
                  >
                    {/* 扩散脉冲 */}
                    <motion.circle
                      cx={c.x}
                      cy={c.y}
                      fill="none"
                      stroke="#34d399"
                      strokeWidth={1}
                      initial={{ r: 4, opacity: 0.5 }}
                      animate={{ r: 18, opacity: 0 }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        delay: idx * 0.45,
                        ease: 'easeOut',
                      }}
                    />
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={hoveredCity === idx ? 6 : 4}
                      fill={hoveredCity === idx ? '#DEDBC8' : '#E1E0CC'}
                      style={{ transition: 'fill 0.25s, r 0.25s' }}
                    />
                    <text
                      x={c.x}
                      y={c.y + 24}
                      textAnchor="middle"
                      fontSize={13}
                      fill={hoveredCity === idx ? '#DEDBC8' : '#71717a'}
                      className="font-mono"
                      style={{ transition: 'fill 0.25s' }}
                    >
                      {c.name}
                    </text>
                  </g>
                ))}

                {/* 枢纽：311 LAB */}
                <motion.circle
                  cx={HUB.x}
                  cy={HUB.y}
                  fill="none"
                  stroke="#DEDBC8"
                  strokeWidth={1}
                  initial={{ r: 12, opacity: 0.5 }}
                  animate={{ r: 30, opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                />
                <circle cx={HUB.x} cy={HUB.y} r={9} fill="#DEDBC8" />
                <circle cx={HUB.x} cy={HUB.y} r={3.5} fill="#000" />
                <text
                  x={HUB.x}
                  y={HUB.y + 34}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={700}
                  fill="#DEDBC8"
                  className="font-mono"
                >
                  311 LAB
                </text>
              </svg>

              {/* 覆盖统计 */}
              <div className="lg:text-right space-y-3">
                <span className="text-xs font-mono text-gray-400 block">
                  DEPLOYED CITIES / 实战成果覆盖地市
                </span>
                <div className="flex items-end lg:justify-end gap-3">
                  <span className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#DEDBC8]">
                    <NumberTicker value={6} />
                  </span>
                  <span className="text-lg text-[#DEDBC8]/60 pb-2">地市单位</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed lg:ml-auto lg:max-w-[220px]">
                  技术成果获得相关实战部门高度评价及正式表扬信与合作奖励，多位骨干毕业前即被实战单位领导熟知。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
