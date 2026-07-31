import React, { useState } from 'react';

interface Direction {
  abbr: string;
  name: string;
  desc: string;
}

const DIRS: Direction[] = [
  { abbr: 'LLM', name: '大语言模型 (LLM)', desc: '垂直领域轻量化蒸馏与大模型警务工程应用' },
  { abbr: 'NLP', name: '自然语言处理 (NLP)', desc: '涉警热点文本挖掘、事件抽取与情感迁移感知' },
  { abbr: 'CV', name: '计算机视觉 (CV)', desc: '多模态图像/视频感知与变体敏感视觉识别' },
  { abbr: 'AIGC', name: 'AIGC 安全防范', desc: '深度伪造 (Deepfake) 鉴别与生成式内容风险反制' },
  { abbr: 'KG', name: '知识图谱 (Knowledge Graph)', desc: '舆情演化逻辑与实体关系网络图谱重构' },
  { abbr: 'AGENT', name: '智能体 (AI Agent)', desc: '自主多智能体协作模拟与舆情传播推演' },
];

const CENTER = 200;
const R = 150;

/** 第 i 根轴在半径 r 处的坐标（0 号轴指向正上方，顺时针 60° 递增） */
const pt = (r: number, i: number): [number, number] => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return [CENTER + r * Math.cos(a), CENTER + r * Math.sin(a)];
};

const ringPoints = (r: number) => DIRS.map((_, i) => pt(r, i).join(',')).join(' ');

/* 扫描扇形（55° 楔形 + 前沿亮线） */
const sweepPath = (() => {
  const r = R - 2;
  const a1 = (-90 * Math.PI) / 180;
  const a2 = ((-90 + 55) * Math.PI) / 180;
  const x1 = CENTER + r * Math.cos(a1);
  const y1 = CENTER + r * Math.sin(a1);
  const x2 = CENTER + r * Math.cos(a2);
  const y2 = CENTER + r * Math.sin(a2);
  return { wedge: `M${CENTER},${CENTER} L${x1},${y1} A${r},${r} 0 0 1 ${x2},${y2} Z`, x2, y2, r };
})();

export const ResearchRadar: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* 雷达盘面 */}
      <svg
        viewBox="0 0 400 400"
        className="w-full max-w-[420px] mx-auto select-none"
        role="img"
        aria-label="六大科研方向雷达：LLM、NLP、CV、AIGC、知识图谱、智能体"
      >
        {/* 六边形刻度环 */}
        {[50, 100, 150].map((r) => (
          <polygon
            key={r}
            points={ringPoints(r)}
            fill="none"
            stroke="#27272a"
            strokeWidth={r === 150 ? 1.2 : 1}
          />
        ))}

        {/* 扫描扇形（CSS 旋转，见 index.css .radar-sweep） */}
        <g className="radar-sweep">
          <path d={sweepPath.wedge} fill="#DEDBC8" fillOpacity={0.05} />
          <line
            x1={CENTER}
            y1={CENTER}
            x2={sweepPath.x2}
            y2={sweepPath.y2}
            stroke="#DEDBC8"
            strokeOpacity={0.35}
            strokeWidth={1}
          />
        </g>

        {/* 轴线与顶点 */}
        {DIRS.map((d, i) => {
          const [vx, vy] = pt(R, i);
          const [lx, ly] = pt(R + 26, i);
          const active = hovered === i;
          return (
            <g
              key={d.abbr}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'default' }}
            >
              <line x1={CENTER} y1={CENTER} x2={vx} y2={vy} stroke="#27272a" strokeWidth={1} />
              {/* 顶点节点 */}
              <circle
                cx={vx}
                cy={vy}
                r={active ? 6.5 : 4.5}
                fill={active ? '#DEDBC8' : '#0c0c0e'}
                stroke="#DEDBC8"
                strokeWidth={1.5}
                style={{ transition: 'r 0.25s, fill 0.25s' }}
              />
              {active && (
                <circle cx={vx} cy={vy} r={11} fill="none" stroke="#DEDBC8" strokeOpacity={0.35} />
              )}
              {/* 轴标签 */}
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={11}
                className="font-mono"
                fill={active ? '#DEDBC8' : '#71717a'}
                style={{ transition: 'fill 0.25s' }}
              >
                {d.abbr}
              </text>
            </g>
          );
        })}

        {/* 盘面中心 */}
        <circle cx={CENTER} cy={CENTER} r={2.5} fill="#DEDBC8" />
        <text
          x={CENTER}
          y={CENTER + 24}
          textAnchor="middle"
          fontSize={12}
          fontWeight={700}
          fill="#DEDBC8"
          className="font-mono"
        >
          311 LAB
        </text>
      </svg>

      {/* 方向索引列表：与雷达顶点双向联动 */}
      <div className="space-y-2">
        {DIRS.map((d, i) => {
          const active = hovered === i;
          return (
            <div
              key={d.abbr}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-default ${
                active
                  ? 'border-[#DEDBC8]/50 bg-[#DEDBC8]/[0.04] translate-x-1'
                  : 'border-[#27272a] bg-[#101010]'
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-widest mt-1 shrink-0 w-11 ${
                  active ? 'text-[#DEDBC8]' : 'text-gray-600'
                }`}
              >
                {d.abbr}
              </span>
              <div className="min-w-0">
                <h3
                  className={`text-sm font-bold transition-colors ${
                    active ? 'text-[#DEDBC8]' : 'text-[#E1E0CC]'
                  }`}
                >
                  {d.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
