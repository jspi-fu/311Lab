import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Server, Brain, ShieldAlert, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CapabilityCard {
  id: string;
  badge: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  highlights: string[];
  linkText: string;
  linkPath: string;
  bgGradient: string;
}

export const CapabilitiesCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards: CapabilityCard[] = [
    {
      id: 'hardware',
      badge: '01 / HARDWARE & ENVIRONMENT',
      shortTitle: '硬件环境',
      title: '模拟街区 311 室战术环境',
      subtitle: '80㎡ 专属研讨空间，30 个高规格独立工位。配备高性能工作站主机与独立服务器阵列。',
      icon: <Server className="w-6 h-6 text-[#DEDBC8]" />,
      highlights: [
        '独立服务器架构，支持多用户全天候远程访问调度',
        '10TB 海量极速存储塔，支撑大规模舆情与文本运算',
        '模拟街区 311 室，独立集中研讨与算力测试环境',
        '配齐公共打印设备与高清投影研讨沙龙设施',
      ],
      linkText: '查看完整硬件清单',
      linkPath: '/overview',
      bgGradient: 'from-amber-950/20 via-[#101010] to-[#18181b]',
    },
    {
      id: 'research',
      badge: '02 / AI & RESEARCH DIRECTIONS',
      shortTitle: '科研矩阵',
      title: '六大前沿 AI 科研创新矩阵',
      subtitle: '“各自钻研，合作创新”——多维度技术互补，打造全栈舆情安全与文本感知能力。',
      icon: <Brain className="w-6 h-6 text-[#DEDBC8]" />,
      highlights: [
        '大语言模型 (LLM) 与智能体 (Agent) 垂直领域工程落地',
        '自然语言处理 (NLP) 文本挖研与反情感分析算法',
        '计算机视觉 (CV) 与 AIGC 多模态伪造/变体识别预警',
        '知识图谱 (Knowledge Graph) 舆情传播隐秩序建模',
      ],
      linkText: '了解科研成果与论文',
      linkPath: '/achievements',
      bgGradient: 'from-blue-950/20 via-[#101010] to-[#18181b]',
    },
    {
      id: 'police',
      badge: '03 / REAL POLICE PRACTICE',
      shortTitle: '警务实战',
      title: '公安一线实战与成果覆盖',
      subtitle: '提前熟悉公安核心业务，与网安、情指等部门深度对接，将科研算法转化为警务战斗力。',
      icon: <ShieldAlert className="w-6 h-6 text-[#DEDBC8]" />,
      highlights: [
        '技术成果已全面覆盖南京、无锡、连云港、苏州、常熟、宿迁等地的警务单位',
        '获得相关实战部门高度评价及正式表扬信与合作奖励',
        '多位实验室骨干在毕业前即被实战单位领导熟知并高度肯定',
        '把代码写在海量警务实战场景中，积累不可替代的实操履历',
      ],
      linkText: '查看公安实战成果',
      linkPath: '/development',
      bgGradient: 'from-emerald-950/20 via-[#101010] to-[#18181b]',
    },
    {
      id: 'score',
      badge: '04 / COMPREHENSIVE SCORE & EXTRA POINTS',
      shortTitle: '素拓加分',
      title: '6211 综合评价体系 · 素拓破局拉开项',
      subtitle: '智育/警务化大家差距微弱，10% 素拓分是拉开综合排名的核心胜负手！实验室全方位保驾护航。',
      icon: <Award className="w-6 h-6 text-[#DEDBC8]" />,
      highlights: [
        '项目符合教育部《2023全国普通高校竞赛分析报告》白名单，全额认定素拓加分',
        '一学期 12 分科研创新/文体竞赛素拓分，在实验室可轻松刷满破局',
        '优秀成员可直接斩获学院嘉奖（荣誉证书+奖金+警务化加分）',
        '大量成员获得学院通报表扬，履历高光直接拉满',
      ],
      linkText: '解读素拓加分细则',
      linkPath: '/development',
      bgGradient: 'from-purple-950/20 via-[#101010] to-[#18181b]',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full relative">
      {/* Top Carousel Navigation Tabs */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar border-b border-[#27272a]/60">
        <div className="flex gap-2">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs transition-colors flex items-center gap-2 font-medium whitespace-nowrap ${
                activeIndex === idx
                  ? 'bg-[#DEDBC8] text-black font-bold'
                  : 'bg-[#18181b] text-gray-400 hover:text-white hover:bg-[#27272a]'
              }`}
            >
              <span>0{idx + 1}</span>
              <span>{card.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Carousel Arrow Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-[#18181b] border border-[#27272a] text-[#E1E0CC] flex items-center justify-center hover:bg-[#27272a] transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#18181b] border border-[#27272a] text-[#E1E0CC] flex items-center justify-center hover:bg-[#27272a] transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Active Card Stage */}
      <div className="relative min-h-[460px] md:min-h-[420px] rounded-3xl overflow-hidden border border-[#27272a] bg-[#101010]">
        <AnimatePresence mode="wait">
          {cards.map(
            (card, idx) =>
              activeIndex === idx && (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute inset-0 p-6 md:p-10 flex flex-col justify-between bg-gradient-to-br ${card.bgGradient}`}
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#DEDBC8]/80 bg-[#DEDBC8]/10 px-3 py-1 rounded-full border border-[#DEDBC8]/20">
                        {card.badge}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-[#18181b] border border-[#27272a] flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>

                    {/* Card Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1E0CC] tracking-tight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mb-6">
                      {card.subtitle}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {card.highlights.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2.5">
                          <div className="mt-1 w-4 h-4 rounded-full bg-[#DEDBC8]/10 border border-[#DEDBC8]/40 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#DEDBC8]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#E1E0CC]/90 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-[#27272a]/80 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-mono">
                      SLIDE {idx + 1} OF {cards.length}
                    </span>
                    <Link
                      to={card.linkPath}
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DEDBC8] text-black text-xs sm:text-sm font-semibold hover:bg-[#f0edd9] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
