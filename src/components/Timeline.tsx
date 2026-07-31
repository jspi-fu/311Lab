import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Milestone } from 'lucide-react';

interface TimelineNode {
  year: string;
  badge: string;
  items: string[];
}

export const Timeline: React.FC = () => {
  const nodes: TimelineNode[] = [
    {
      year: '2025',
      badge: '巩固与深化',
      items: [
        '申报省级大创新创业项目 2 项',
        '全面参与蓝桥杯、天梯赛、数媒等 10 项白名单学科竞赛',
        '团队第一作者发表 SCI / EI 等高质量科研论文 2 篇',
        '申请并获批软著专利 3 项',
      ],
    },
    {
      year: '2026',
      badge: '跨越与突破',
      items: [
        '申报国家级大创项目 1 项、省级大创项目 1 项',
        '冲刺“互联网+”、“挑战杯”红色专项赛道国家级大奖',
        '申请并获批软著专利 4 项',
        '发表核心科研论文 3 篇',
      ],
    },
    {
      year: '2027',
      badge: '领航与传承',
      items: [
        '申报国家级与省级大创项目各 1 项',
        '持续深化南京、无锡、连云港等各地公安实战单位合作',
        '出战全国大学生数学建模竞赛等顶尖赛事',
        '申请软著 4 项，发表论文 3 篇，完成新老团队梯队交接',
      ],
    },
  ];

  return (
    <div className="w-full relative py-6">
      {/* Responsive Guide Line: Left-aligned on Mobile (left-5), Centered on Desktop (left-1/2) */}
      <div className="absolute left-5 md:left-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#DEDBC8]/60 via-[#27272a] to-[#27272a]/20 -translate-x-1/2 pointer-events-none" />

      <div className="space-y-8 md:space-y-12 relative">
        {nodes.map((node, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={node.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card Side */}
              <div className="w-full md:w-1/2 pl-12 pr-0 md:px-8">
                <div className="bg-[#101010] p-5 sm:p-6 rounded-2xl border border-[#27272a] hover:border-[#DEDBC8]/40 transition-colors shadow-xl relative group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#DEDBC8] font-mono tracking-tight">
                      {node.year}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#DEDBC8]/10 text-[#DEDBC8] border border-[#DEDBC8]/30">
                      {node.badge}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    {node.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#DEDBC8] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Milestone Icon Dot (Mobile: absolute left-5; Desktop: static centered) */}
              <div className="absolute left-5 md:relative md:left-auto transform -translate-x-1/2 md:translate-x-0 top-6 md:top-auto z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#18181b] border-2 border-[#DEDBC8] flex items-center justify-center text-[#DEDBC8] shadow-lg shrink-0">
                <Milestone className="w-4 h-4" />
              </div>

              {/* Empty Spacer Side for Desktop alternating layout */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
