import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, FileText, Code2, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NumberTicker } from '../components/NumberTicker';

/* ---------- 数据 ---------- */

interface AwardChip {
  k: string; // 奖项类别
  v: string; // 数量
  blocks?: number; // 信号柱数量（按真实数量，10 封顶）
  hot?: boolean; // 最高战果高亮
  live?: boolean; // 进行中标记
}

interface Competition {
  name: string;
  level: string;
  chips: AwardChip[];
  detail: string;
}

const competitions: Competition[] = [
  {
    name: '蓝桥杯全国软件和信息技术专业人才大赛',
    level: '国家级一等奖',
    chips: [
      { k: '国一', v: '×8', blocks: 8, hot: true },
      { k: '国家级', v: '46 人次', blocks: 10 },
      { k: '省级', v: '81 人次', blocks: 10 },
    ],
    detail: '国一 8 项，学生累计获国家级奖项 46 人次，省级奖项 81 人次',
  },
  {
    name: '中国高校计算机大赛——团体程序设计天梯赛',
    level: '国家级二等奖',
    chips: [
      { k: '国二', v: '×3', blocks: 3, hot: true },
      { k: '国三', v: '×5', blocks: 5 },
      { k: '个人国级', v: '18 人次', blocks: 10 },
      { k: '省二/省三', v: '各 2 次', blocks: 2 },
    ],
    detail: '代表学校出战，获省二/省三各2次；团体获国二 3 项、国三 5 项；个人获国家级 18 人次',
  },
  {
    name: '全国大学生数字媒体科技作品及创意竞赛',
    level: '国家级一等奖',
    chips: [
      { k: '国一', v: '×1', blocks: 1, hot: true },
      { k: '国三', v: '×7', blocks: 7 },
    ],
    detail: '斩获最高荣誉国家级一等奖 1 项，国家级三等奖 7 项',
  },
  {
    name: '中国大学生计算机设计大赛',
    level: '国家级二等奖',
    chips: [
      { k: '国二', v: '×1', blocks: 1, hot: true },
      { k: '国三', v: '×4', blocks: 4 },
    ],
    detail: '获得国家级二等奖 1 项，国家级三等奖 4 项',
  },
  {
    name: '全国大学生信息安全竞赛',
    level: '国家级奖项',
    chips: [{ k: '国家级', v: '×6', blocks: 6, hot: true }],
    detail: '斩获全国大学生信息安全竞赛国家级奖项共 6 项',
  },
  {
    name: '中国高校计算机大赛——网络技术挑战赛',
    level: '国家级/省级奖项',
    chips: [
      { k: '国奖', v: '×10', blocks: 10, hot: true },
      { k: '省奖', v: '×18', blocks: 10 },
    ],
    detail: '获得国家级奖项 10 项，省级奖项 18 项',
  },
  {
    name: '挑战杯、创新大赛、全国大学生数学建模竞赛',
    level: '白名单重点赛事',
    chips: [{ k: '持续冲击中', v: '…', live: true }],
    detail: '围绕网络舆情安全与警务实战技术，持续多路出击',
  },
];

const startupProjects = [
  {
    title: '反诈哨兵',
    tag: '国家级大创',
    stamp: 'border-[#DEDBC8]/70 text-[#DEDBC8] bg-[#DEDBC8]/[0.05]',
    desc: '基于知识蒸馏与图神经网络 (GNN) 的电信网络诈骗预警与反制系统',
  },
  {
    title: '复杂网络可控性研究',
    tag: '省级大创',
    stamp: 'border-[#52525b] text-gray-400',
    desc: '基于复杂网络理论的涉警舆情网络传播可控性及节点影响力研究',
  },
  {
    title: '幻意',
    tag: '省级大创',
    stamp: 'border-[#52525b] text-gray-400',
    desc: '基于对抗机器学习与文本挖掘的异构隐蔽文本反情感分析系统',
  },
  {
    title: '开源情报研判',
    tag: '省级大创',
    stamp: 'border-[#52525b] text-gray-400',
    desc: '总体国家安全观视角下的涉警开源情报 (OSINT) 研判与风险感知',
  },
  {
    title: '谣言传播隐秩序',
    tag: '省级大创',
    stamp: 'border-[#52525b] text-gray-400',
    desc: '基于传染病动力学 SEIR 模型的涉警网络谣言传播隐秩序研究',
  },
  {
    title: '多模态风险预警',
    tag: '重点申报项目',
    stamp: 'border-red-400/50 text-red-400 bg-red-950/20',
    desc: '融合变体敏感词识别与 AIGC 虚假信息判别的多模态警务预警系统',
  },
];

const papers = [
  {
    authors: '高浩铭, 洪磊, 祁嘉诚 等',
    title: '新冠肺炎热点事件下的 Twitter 文本事件分析和用户画像',
    journal: '《信息技术与信息化》',
    year: '2021',
  },
  {
    authors: '陈乐遥, 洪磊, 陈杨 等',
    title: '基于文本挖掘的公安院校公众号主题类型挖掘研究',
    journal: '《计算机时代》',
    year: '2020',
  },
  {
    authors: '盛雨, 洪磊, 黄菲易',
    title: '基于人工智能的公安政务微博分析系统研究',
    journal: '《网络安全技术与应用》',
    year: '2022',
  },
  {
    authors: '谈天辰, 洪磊, 杨逸尘 等',
    title: '基于 SIR 模型的涉警舆情网络传播研究',
    journal: '《信息技术与信息化》',
    year: '2021',
  },
  {
    authors: '钱怡吉, 洪磊, 张语瑞',
    title: '基于 SEIR 模型的舆情传播和舆情控制模型',
    journal: '《电脑与电信》',
    year: '2022',
  },
];

const copyrights = [
  'PR 值批量分类反赌博网站软件 (登记号 / 软著权认证)',
  '短视频用户影响力评价系统（基于 PageRank 算法）',
  '高校网络热点舆情监测与预警系统',
  '涉警舆情预警系统（基于多源网络数据）',
  '“镜”内外——多维度境内外舆情态势感知和预警系统',
];

/* ---------- 奖项信号芯片：按真实数量渲染信号柱 ---------- */

const AwardChipView: React.FC<{ chip: AwardChip }> = ({ chip }) => (
  <span
    className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border font-mono text-[10px] sm:text-xs whitespace-nowrap ${
      chip.hot
        ? 'border-[#DEDBC8]/30 bg-[#DEDBC8]/[0.06] text-[#DEDBC8]'
        : 'border-[#27272a] bg-[#18181b] text-gray-400'
    }`}
  >
    {chip.blocks !== undefined && (
      <span className="flex items-end gap-[2px]" aria-hidden>
        {Array.from({ length: chip.blocks }).map((_, i) => (
          <motion.span
            key={i}
            className={`w-[3px] rounded-[1px] ${chip.hot ? 'bg-[#DEDBC8]' : 'bg-[#DEDBC8]/35'}`}
            initial={{ height: 2 }}
            whileInView={{ height: 5 + ((i + 1) / (chip.blocks as number)) * 9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </span>
    )}
    {chip.live && <span className="w-[3px] h-3.5 bg-[#DEDBC8]/70 animate-pulse" aria-hidden />}
    <span>{chip.k}</span>
    <b className={`font-bold ${chip.hot ? 'text-[#E1E0CC]' : 'text-gray-300'}`}>{chip.v}</b>
  </span>
);

/* ---------- 页面 ---------- */

export const Achievements: React.FC = () => {
  const [openRow, setOpenRow] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC] pt-24 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Breadcrumb Header */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#DEDBC8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#27272a] pb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#E1E0CC] tracking-tight">
                获奖成果与科研产出
              </h1>
            </div>

            {/* 页首战绩速报（替换原灰色段落，数字可滚动） */}
            <div className="space-y-2">
              <div className="flex items-end gap-7 sm:gap-9">
                {[
                  { value: 48, suffix: '项', label: '国一 · 近五年' },
                  { value: 78, suffix: '项', label: '省一 · 近五年' },
                  { value: 489, suffix: '人次', label: '获奖 · 近五年' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#DEDBC8]">
                      <NumberTicker value={s.value} />
                      <span className="text-base ml-0.5 text-[#DEDBC8]/60">{s.suffix}</span>
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-500">学生作为第一作者发表 SCI、EI 近十篇。</p>
            </div>
          </div>
        </div>

        {/* SECTION 1: 竞赛战果矩阵（档案行） */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-[#DEDBC8]" />
              <h2 className="text-2xl font-bold text-[#E1E0CC]">学科竞赛成果</h2>
            </div>
            <span className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-600">
              点击行展开战报详情 ▾
            </span>
          </div>

          <div className="rounded-2xl border border-[#27272a] bg-[#101010] overflow-hidden divide-y divide-[#27272a]/60">
            {competitions.map((c, idx) => {
              const open = openRow === idx;
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenRow(open ? null : idx)}
                    aria-expanded={open}
                    className="w-full text-left px-5 md:px-7 py-5 group hover:bg-[#DEDBC8]/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                      <span className="font-mono text-sm text-gray-600 group-hover:text-[#DEDBC8] transition-colors shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-sm sm:text-base font-bold text-[#E1E0CC] leading-snug">
                            {c.name}
                          </h3>
                          <ChevronDown
                            className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-300 ${
                              open ? 'rotate-180 text-[#DEDBC8]' : ''
                            }`}
                          />
                        </div>
                        <span className="text-[10px] font-mono tracking-wider text-gray-600">
                          最高战果 · {c.level}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 md:justify-end md:max-w-[44%] shrink-0">
                        {c.chips.map((chip) => (
                          <AwardChipView key={chip.k} chip={chip} />
                        ))}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-7 pb-5 md:pl-[70px]">
                          <p className="text-xs sm:text-sm text-gray-400 border-l border-[#27272a] pl-4 leading-relaxed max-w-2xl">
                            {c.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: 创新创业项目（立案档案 + 级别印章） */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#DEDBC8]" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">创新创业重点项目</h2>
          </div>

          <div className="space-y-3">
            {startupProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 md:p-6 rounded-2xl bg-[#101010] border border-[#27272a] hover:border-[#DEDBC8]/40 transition-colors"
              >
                <span className="font-mono text-[10px] tracking-widest text-gray-600 shrink-0">
                  FILE 0{idx + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-[#E1E0CC]">{project.title}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-2xl">{project.desc}</p>
                </div>
                <span
                  className={`shrink-0 self-start sm:self-center px-3 py-1.5 border-2 rounded font-mono text-[10px] font-bold tracking-[0.15em] rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300 ${project.stamp}`}
                >
                  {project.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: 论文索引 & 软著登记簿 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 论文 — 年份索引式著录 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#DEDBC8]" />
              <h2 className="text-2xl font-bold text-[#E1E0CC]">代表性学术论文</h2>
            </div>

            <div className="rounded-2xl border border-[#27272a] bg-[#101010] overflow-hidden divide-y divide-[#27272a]/60">
              {papers.map((paper, idx) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid grid-cols-[auto_1fr] sm:grid-cols-[64px_1fr_auto] gap-x-5 gap-y-1 items-baseline p-5 hover:bg-[#18181b]/50 transition-colors"
                >
                  <span className="font-mono text-sm text-[#DEDBC8]">{paper.year}</span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-[#E1E0CC] group-hover:translate-x-1 transition-transform duration-300">
                      {paper.title}
                    </h4>
                    <div className="text-xs text-gray-500 mt-0.5">{paper.authors}</div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 sm:text-right">
                    {paper.journal}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 软著 — 登记簿 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-[#DEDBC8]" />
              <h2 className="text-2xl font-bold text-[#E1E0CC]">软件著作权 (部分)</h2>
            </div>

            <div className="rounded-2xl border border-[#27272a] bg-[#101010] overflow-hidden divide-y divide-[#27272a]/60">
              {copyrights.map((cp, idx) => (
                <motion.div
                  key={cp}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-4 p-4 hover:bg-[#18181b]/50 transition-colors"
                >
                  <span className="font-mono text-[10px] text-gray-600 shrink-0 group-hover:text-[#DEDBC8] transition-colors">
                    REG 0{idx + 1}
                  </span>
                  <span className="flex-1 text-xs text-gray-300 group-hover:text-[#E1E0CC] transition-colors font-medium">
                    {cp}
                  </span>
                  <span className="font-mono text-xs text-[#DEDBC8]/40 shrink-0">©</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
