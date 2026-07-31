import React from 'react';
import { ArrowLeft, Server, Users, Radar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Timeline } from '../components/Timeline';
import { ResearchRadar } from '../components/ResearchRadar';

export const Overview: React.FC = () => {
  const hardware = [
    {
      title: '位置与规模',
      spec: '80㎡ · 30 工位',
      desc: '模拟街区实战教学训练中心 311 室，80㎡ 专属研讨场地，30 个高规格独立工位。',
    },
    {
      title: '基础运算配置',
      spec: 'WORKSTATION',
      desc: '配备专用研讨电脑、高强度人体工学桌椅、独立高功率供电网络及工作站主机。',
    },
    {
      title: '独立服务器',
      spec: '24/7 远程并发',
      desc: '部署独立算力服务器，支持多名团队成员全天候多用户远程并发访问与模型训练。',
    },
    {
      title: '10TB 海量存储塔',
      spec: '10TB STORAGE',
      desc: '配置 10TB 极速数据存储塔，支撑海量涉警舆情、文本语料库的高效存储与共享。',
    },
    {
      title: '配套研讨设备',
      spec: '打印 · 投影',
      desc: '公共高速打印机、高清投影研讨系统，满足组会复盘、申报答辩与沙龙演练需求。',
    },
    {
      title: '远程集群调度',
      spec: 'KEY LINK',
      desc: '全天候局域网络与远程密钥连线，成员即使不在实验室亦可无缝调用核心算力。',
    },
  ];

  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC] pt-24 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Custom 2-Column Overview Header */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#DEDBC8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-b border-[#27272a] pb-8 pt-2">
            <div className="md:col-span-7 space-y-2">
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#E1E0CC] tracking-tight">
                实验室概况与设施
              </h1>
              <p className="text-sm text-gray-400 leading-relaxed">
                江苏警官学院 · 国家安全学院 311 研讨训练空间，提供完善的算力、基础设施与科研孵化支持。
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-2 justify-start md:justify-end">
              <span className="px-3 py-1.5 rounded-lg bg-[#141418] border border-[#27272a] text-xs font-mono text-[#DEDBC8]">
                80㎡ 战术场地
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#141418] border border-[#27272a] text-xs font-mono text-[#DEDBC8]">
                30 独立工位
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#141418] border border-[#27272a] text-xs font-mono text-emerald-400">
                10TB 存储阵列
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 1: 硬件设施（终端设备清单） */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-[#DEDBC8]" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">硬件设施条件</h2>
          </div>

          <div className="rounded-2xl border border-[#27272a] bg-[#0c0c0e] overflow-hidden">
            {/* 清单状态栏 */}
            <div className="flex items-center justify-between px-5 md:px-6 py-3 border-b border-[#27272a] bg-[#121215]">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#DEDBC8]">
                SYSTEM MANIFEST — 311 FACILITY
              </span>
              <span className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ALL NOMINAL
              </span>
            </div>

            <div className="divide-y divide-[#27272a]/60">
              {hardware.map((item, idx) => (
                <div
                  key={item.title}
                  className="group p-5 md:p-6 hover:bg-[#DEDBC8]/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="font-mono text-[10px] md:text-xs text-gray-600 group-hover:text-[#DEDBC8] transition-colors shrink-0 w-12 md:w-14">
                      FAC-0{idx + 1}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-[#E1E0CC] shrink-0">
                      {item.title}
                    </h3>
                    {/* 点状引导线 */}
                    <span className="flex-1 border-b border-dotted border-[#27272a] translate-y-1 hidden md:block" />
                    <span className="ml-auto md:ml-0 font-mono text-[9px] md:text-[10px] tracking-wider text-[#DEDBC8] border border-[#DEDBC8]/25 bg-[#DEDBC8]/5 px-2 py-1 rounded shrink-0">
                      {item.spec}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2.5 md:mt-2 md:pl-[96px] max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 清单收尾 */}
            <div className="px-5 md:px-6 py-3 border-t border-[#27272a] text-[10px] font-mono text-gray-600">
              $ 311 facility scan complete — 6 systems registered
            </div>
          </div>
        </section>

        {/* SECTION 2: 六大前沿科研方向（雷达扫描盘） */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Radar className="w-5 h-5 text-[#DEDBC8]" />
            <h2 className="text-2xl font-bold text-[#E1E0CC]">六大前沿科研方向</h2>
          </div>

          <ResearchRadar />
        </section>

        {/* SECTION 3: TEAM CULTURE */}
        <section className="space-y-6">
          <div className="p-8 rounded-3xl bg-[#121215] border border-[#27272a] space-y-4">
            <div className="flex items-center gap-3 text-[#DEDBC8]">
              <Users className="w-5 h-5" />
              <h2 className="text-2xl font-bold text-[#E1E0CC]">团队文化：团结 · 传承 · 创新</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
              每个人都是实验室不可或缺的存在。团队倡导互助互补，在不同的算法攻坚与学科竞赛中，跨年级组合碰撞新火花、迸发新活力。传帮带机制让每一位新生都能快速入门成长。
            </p>
          </div>
        </section>

        {/* SECTION 4: FUTURE ROADMAP */}
        <section className="space-y-6 pt-6 border-t border-[#27272a]">
          <h2 className="text-2xl font-bold text-[#E1E0CC]">未来发展规划时间线</h2>
          <Timeline />
        </section>
      </div>
    </div>
  );
};
