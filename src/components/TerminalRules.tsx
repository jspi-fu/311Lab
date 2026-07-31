import React from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export const TerminalRules: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#27272a] bg-[#0c0c0e] shadow-xl font-mono text-xs sm:text-sm">
      {/* Clean Technical Header Bar */}
      <div className="bg-[#121215] px-4 py-2.5 flex items-center justify-between border-b border-[#27272a]">
        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
          <TerminalIcon className="w-3.5 h-3.5 text-[#DEDBC8]" />
          <span>SYS_POLICY // LAB_RULES</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">
          STRICT_ENFORCED
        </span>
      </div>

      {/* Terminal Output Body */}
      <div className="p-6 md:p-8 space-y-6 text-[#E1E0CC]/90 leading-relaxed">
        {/* Terminal Header Shell Output */}
        <div className="text-gray-500 space-y-1">
          <p>$ init_security_protocol --lab 311 --strict</p>
          <p className="text-emerald-400/90">[OK] Protocol loaded successfully. Loading lab core management policies...</p>
        </div>

        {/* Rule 1 - Absolute Iron Rule */}
        <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-2">
          <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>第一条铁律 (IRON RULE #01)</span>
          </div>
          <p className="text-red-200 text-sm md:text-base font-semibold pl-6">
            严禁在实验室里打游戏！
          </p>
          <p className="text-xs text-red-300/70 pl-6">
            实验室是严肃的高效研讨与算力攻坚阵地。零容忍游戏行为，违者直接取消工位使用权。
          </p>
        </div>

        {/* Rule 2 - Daily Attendance */}
        <div className="p-4 rounded-xl bg-[#141417] border border-[#27272a] space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Clock className="w-4 h-4 shrink-0" />
            <span>第二条规则 (DAILY ATTENDANCE)</span>
          </div>
          <p className="text-[#E1E0CC] font-medium pl-6">
            每日日常签到与考勤管理
          </p>
          <p className="text-xs text-gray-400 pl-6">
            确保假条内容落实到位，保证实验室内工作秩序与研发纪律，形成高效严谨的研究风气。
          </p>
        </div>

        {/* Rule 3 - Weekly Report */}
        <div className="p-4 rounded-xl bg-[#141417] border border-[#27272a] space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>第三条规则 (WEEKLY REPORT & MENTORING)</span>
          </div>
          <p className="text-[#E1E0CC] font-medium pl-6">
            每周周报提交 + 周日晚导师组会交流
          </p>
          <p className="text-xs text-gray-400 pl-6">
            周日全员提交周报，周日晚开展团队复盘组会。畅通“学生—导师”即时反馈渠道，确保科研与竞赛进度获得点对点指导。
          </p>
        </div>

        {/* Terminal Footer Prompt */}
        <div className="pt-2 flex items-center gap-2 text-emerald-400 font-mono text-xs">
          <span className="animate-pulse">▶</span>
          <span>ready_for_recruitment_2026 --target "26级全院新生"</span>
        </div>
      </div>
    </div>
  );
};
